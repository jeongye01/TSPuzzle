import { holdingBlock } from '..';
import { getLeftEnd, getUpEnd } from './blockEnds';
import { isBlockOverlapping } from './isBlockOverlapping';
import { isOutOfRange } from './isOutOfRange';

export const overBlock = (x: number, y: number) => {
  const blockShape = holdingBlock.getBlock().shape;
  const blockColor = holdingBlock.getBlock().color;
  console.log('over', blockColor);
  const rowLength = blockShape.length;
  const colLength = blockShape[0].length;
  if (isOutOfRange(x, y, rowLength, colLength)) return;

  if (isBlockOverlapping(x, y, rowLength, colLength)) return;
  for (let ox = 0; ox < colLength; ox++) {
    for (let oy = 0; oy < rowLength; oy++) {
      if (!blockShape[oy][ox]) continue;
      const targetTile = document.getElementById(
        `${ox + getLeftEnd(x, colLength)}+${oy + getUpEnd(y, rowLength)}`
      );
      targetTile.classList.add('board__tile--over');
      targetTile.style.backgroundColor = blockColor;
    }
  }
};
