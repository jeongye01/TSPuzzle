import { holdingBlock } from '..';
import { getDownEnd, getLeftEnd, getRightEnd, getUpEnd } from './blockEnds';
import { isBlockOverlapping } from './isBlockOverlapping';
import { isOutOfRange } from './isOutOfRange';

export const overBlock = (x: number, y: number) => {
  console.log(x, y);
  const blockShape = holdingBlock.getBlock().shape;
  const blockColor = holdingBlock.getBlock().color;
  console.log('over', blockColor, blockShape);
  const rowLength = blockShape.length;
  const colLength = blockShape[0].length;
  if (isOutOfRange(x, y, rowLength, colLength)) return;
  console.log('over통과');
  if (isBlockOverlapping(x, y, rowLength, colLength)) return;
  console.log('over통과2');
  for (let ox = 0; ox < colLength; ox++) {
    for (let oy = 0; oy < rowLength; oy++) {
      if (!blockShape[oy][ox]) continue;
      const targetTile = document.getElementById(`${ox + x}+${oy + y}`);
      targetTile.classList.add('board__tile--over');
      targetTile.style.backgroundColor = blockColor;
    }
  }
};
