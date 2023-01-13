import { $root, holdingBlock, boardState } from '../..';
import BlockGenerator from '../BlockGenerator';
import { blockStateSetter, calcBlockOriginPos } from '../blockDragStart';

export function Block(blockShape: number[][], id: string) {
  const getAlignItemState = () => {
    let alignItemState = 'start';
    for (let i = 0; i < blockShape.length; i++) {
      if (blockShape[i][0] === 0) {
        alignItemState = 'end';
        if (blockShape[i][blockShape[0].length - 1] === 0) {
          alignItemState = 'center';
          break;
        }
      }
    }
    return alignItemState;
  };

  const blockElement = document.createElement('div');

  const onDragStart = (e) => {
    const { originX, originY } = calcBlockOriginPos(
      e.offsetX,
      e.offsetY,
      blockShape
    );
    blockStateSetter(originX, originY, blockElement, blockShape);
    holdingBlock.element.classList.add('hide');
  };
  const onDragEnd = (e) => {
    holdingBlock.element.classList.remove('hide');
  };

  BlockGenerator(blockElement, blockShape);
  blockElement.draggable = true;
  blockElement.addEventListener('dragstart', onDragStart);
  blockElement.addEventListener('dragend', onDragEnd);
  blockElement.setAttribute('class', 'block');
  blockElement.style.alignItems = getAlignItemState();
  blockElement.id = id;
  console.log(blockElement);
  // block.setAttribute('class','block')
  $root.appendChild(blockElement);
}
