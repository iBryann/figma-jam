import { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  ConnectionMode,
  Controls,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { zinc } from 'tailwindcss/colors';

import { Square } from './nodes/Square';
import { Ellipse } from './nodes/Ellipse';
import { Toolbar } from './components/Toolbar';
import { DefaultEdge } from './edges/DefaultEdge';
import { Triangle } from './nodes/Triangle';

export const NODE_TYPES = {
  square: Square,
  ellipse: Ellipse,
  triangle: Triangle,
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

      <Toolbar setNodes={setNodes} />
    </div>
  )
}
