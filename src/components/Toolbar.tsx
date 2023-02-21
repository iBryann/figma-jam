import { Dispatch, SetStateAction } from 'react';
import { Node } from 'reactflow';
import { Button, Root } from '@radix-ui/react-toolbar';

import { NODE_TYPES } from '../App';

interface Props {
  setNodes: Dispatch<SetStateAction<Node<{}, string | undefined>[]>>
}

export const Toolbar = ({ setNodes }: Props) => {
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
    <Root className='fixed flex items-end bottom-12 left-1/2 -translate-x-1/2 overflow-hidden'>
      <div className='flex justify-center gap-3 h-20 mt-4 px-8 bg-white shadow-lg rounded-4 border border-zinc-300'>
        <Button
          onClick={() => addSquareNode('square')}
          className='mt-4 w-24 h-24 bg-violet-500 rounded hover:-translate-y-7 transition-transform'
          />

        <Button
          onClick={() => addSquareNode('ellipse')}
          className='mt-4 w-24 h-24 bg-violet-500 rounded-2/1 hover:-translate-y-7 transition-transform'
          />

        <Button
          onClick={() => addSquareNode('triangle')}
          className='mt-4 border-l-[50px] border-r-[50px] border-b-[96px] border-transparent border-b-violet-500 w-0 h-0 hover:-translate-y-7 transition-transform'
        />
      </div>
    </Root>
  );
}