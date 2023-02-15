import { boardState, holdingBlock } from '..';
import { getLeftEnd, getUpEnd } from './blockEnds';

export const isBlockOverlapping = (
  x: number,
  y: number,
  rowLength: number,
  colLength: number
) => {
  const blockShape = holdingBlock.getBlock().shape;
  let result = false;
  for (let ox = 0; ox < colLength; ox++) {
    for (let oy = 0; oy < rowLength; oy++) {
      console.log(
        boardState,
        boardState[y + oy][x + ox],
        blockShape[oy][ox],
        '12432'
      );
      if (boardState[y + oy][x + ox] && blockShape[oy][ox]) {
        result = true;
        break;
      }
    }
  }
  return result;
};
