import { NodeProps } from 'reactflow';
import { NodeContainer} from './NodeContainer';

export const Ellipse = ({ selected }: NodeProps) => {
  return (
    <NodeContainer
      selected={selected}
      className='rounded-2/1 bg-violet-500 min-w-[200px] min-h-[200px]'
    />
  );
}