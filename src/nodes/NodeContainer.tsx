import { NodeResizer, ResizeParams } from '@reactflow/node-resizer';
import { Handle, Position, useReactFlow } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import { Dispatch, HTMLAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  selected: boolean;
  className: string;
  setContainerSize?: Dispatch<SetStateAction<ResizeParams>>;
}

export const NodeContainer = ({ className, selected, setContainerSize, ...rest }: Props) => {
  const reactFlowInstance = useReactFlow();

  console.log(reactFlowInstance);

  return (
    <div className={`w-full h-full ${className}`} {...rest}>
      <NodeResizer
        minWidth={200}
        minHeight={200}
        isVisible={selected}
        lineClassName='border-blue-400'
        handleClassName='h-3 w-3 bg-white rounded border-2 border-blue-400'
        onResize={(event, params: ResizeParams) => setContainerSize && setContainerSize(params)}
      />

      <Handle
        id="right"
        type='source'
        position={Position.Right}
        className='-right-5 w-3 h-3 bg-blue-400/80'
      />

      <Handle
        id="left"
        type='source'
        position={Position.Left}
        className='-left-5 w-3 h-3 bg-blue-400/80'
      />

      <Handle
        id="top"
        type='source'
        position={Position.Top}
        className='-top-5 w-3 h-3 bg-blue-400/80'
      />

      <Handle
        id="bottom"
        type='source'
        position={Position.Bottom}
        className='-bottom-5 w-3 h-3 bg-blue-400/80'
      />
    </div>
  );
}