import { NodeProps } from 'reactflow';
import { NodeContainer} from './NodeContainer';

export const Square = ({ selected }: NodeProps) => {
  return (
    <NodeContainer
      selected={selected}
      className='rounded bg-violet-500 min-w-[200px] min-h-[200px]'
    />
  );
}