import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import * as Toolbar from '@radix-ui/react-toolbar';
import DefaultEdge from './edges/DefaultEdge';
import { zinc } from 'tailwindcss/colors';

import { Square } from './nodes/Square';
import { Ellipse } from './nodes/Ellipse';

const NODE_TYPES = {
  square: Square,
  ellipse: Ellipse,
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: { x: 200, y: 400 },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'ellipse',
    position: { x: 600, y: 400 },
    data: {}
  }
] satisfies Node[];

export const App = () => {
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges));
  }, []);

  function addSquareNode(type: keyof typeof NODE_TYPES) {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type,
        position: { x: 750, y: 350 },
        data: {}
      }
    ]);
  }

  return (
    <div className='w-screen h-screen'>
      <ReactFlow
        nodeTypes={NODE_TYPES}
        defaultEdgeOptions={{
          type: 'default'
        }}
        edgeTypes={EDGE_TYPES}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodes={nodes}
        onNodesChange={onNodesChange}
        connectionMode={ConnectionMode.Loose}
      >
        <Background
          gap={12}
          size={1}
          color={zinc[400]}
        />

        <Controls />
      </ReactFlow>


      <Toolbar.Root className='fixed flex gap-3 bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-96 overflow-hidden'>
        <Toolbar.Button
          onClick={() => addSquareNode('square')}
          className='w-24 h-24 bg-violet-500 mt-6 rounded hover:-translate-y-2 transition-transform'
        />

        <Toolbar.Button
          onClick={() => addSquareNode('ellipse')}
          className='w-24 h-24 bg-violet-500 mt-6 rounded-2/1 hover:-translate-y-2 transition-transform'
        />
      </Toolbar.Root>
    </div>
  )
}
