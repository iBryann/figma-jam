import { ResizeParams } from '@reactflow/node-resizer';
import { useState } from 'react';
import { NodeProps } from 'reactflow';
import { NodeContainer} from './NodeContainer';

export const Triangle = (props: NodeProps) => {
  const [{ height, width }, setContainerSize] = useState({} as ResizeParams);

  return (
    <NodeContainer
      setContainerSize={setContainerSize}
      selected={props.selected}
      className={`border-transparent border-b-violet-500`}
      style={{
        borderLeftWidth: (width || 200) / 2,
        borderRightWidth: (width || 200) / 2,
        borderBottomWidth: height || 200,
      }}
    />
  );
}