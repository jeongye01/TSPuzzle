import { boardState, generatedBlocks, holdingBlock, point } from '..';

import { getLeftEnd, getUpEnd } from './blockEnds';
import { generateRandomBlocks } from './generateRandomBlocks';
import { isBlockOverlapping } from './isBlockOverlapping';
import { isOutOfRange } from './isOutOfRange';
import { isPlaceable } from './isPlaceable';

export const fillBlock = (x: number, y: number) => {
  const blockShape = holdingBlock.getBlock().shape;
  const blockColor = holdingBlock.getBlock().color;
  // const blockElement = holdingBlock.element;
  if (blockColor === undefined) return;
  const rowLength = blockShape.length;
  const colLength = blockShape[0].length;
  if (isOutOfRange(x, y, rowLength, colLength)) return;
  // if(x-1<0 || y+1>9)return;
  if (isBlockOverlapping(x, y, rowLength, colLength)) return;
  for (let ox = 0; ox < colLength; ox++) {
    for (let oy = 0; oy < rowLength; oy++) {
      if (!blockShape[oy][ox]) continue;
      boardState[oy + getUpEnd(y, rowLength)][
        ox + getLeftEnd(x, colLength)
      ] = 1;
      const targetTile = document.getElementById(
        `${ox + getLeftEnd(x, colLength)}+${oy + getUpEnd(y, rowLength)}`
      );
      console.log(targetTile);
      targetTile.classList.remove('board__tile--over');
      targetTile.style.backgroundColor = `${blockColor}`;
    }
  }
  generatedBlocks.removeOne(holdingBlock.getBlock().id);
  const blockElement = document.getElementById(holdingBlock.getBlock().id);
  blockElement.remove();
  if (!generatedBlocks.leftBlockIds.length) {
    generateRandomBlocks();
  }
  let allFilledRows = [];
  let allFilledCols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  boardState.forEach((row, rowIdx) => {
    let thisRowAllFilled = true;
    row.forEach((col, colIdx) => {
      if (col === 0) {
        thisRowAllFilled = false;
        if (allFilledCols.indexOf(colIdx) !== -1) {
          allFilledCols.splice(allFilledCols.indexOf(colIdx), 1);
        }
      }
    });
    if (thisRowAllFilled) {
      allFilledRows.push(rowIdx);
    }
  });
  if (allFilledRows.length) {
    for (let i = 0; i < allFilledRows.length; i++) {
      for (let j = 0; j < boardState.length; j++) {
        boardState[allFilledRows[i]][j] = 0;
        document.getElementById(
          `${j}+${allFilledRows[i]}`
        ).style.backgroundColor = null;
      }
    }
  }
  if (allFilledCols.length) {
    for (let i = 0; i < allFilledCols.length; i++) {
      for (let j = 0; j < boardState.length; j++) {
        boardState[j][allFilledCols[i]] = 0;
        document.getElementById(
          `${allFilledCols[i]}+${j}`
        ).style.backgroundColor = null;
      }
    }
  }

  const filledLineCtn = allFilledCols.length + allFilledRows.length;
  //console.log(filledLineCtn,"라인 수");
  // 점수 올리기
  // console.log(block.getTileCtn(),"타일 수");
  let newPoint = holdingBlock.getBlock().getTileCtn();
  if (filledLineCtn) {
    if (filledLineCtn === 1) {
      newPoint += 10;
    }
    if (filledLineCtn === 2) {
      newPoint += 30;
    }
    if (filledLineCtn === 3) {
      newPoint += 60;
    }
    if (filledLineCtn === 4) {
      newPoint += 100;
    }
    if (filledLineCtn === 5) {
      newPoint += 200;
    }

    // console.log("point",newPoint,point.value)
  }
  point.setter(newPoint);
  let disabledBlockCtn = 0;
  generatedBlocks.leftBlockIds.forEach((id) => {
    const leftBlock = document.getElementById(id);
    //  console.log(generatedBlocks.mapShapeNId.get(id),'asdlkfj');
    // 비활성화 상태인지 판단하고, 해당 스타일을 입힘.
    const placableState = isPlaceable(
      leftBlock,
      generatedBlocks.mapShapeNId.get(id)
    );
    if (!placableState) disabledBlockCtn += 1;
  });
  if (disabledBlockCtn === generatedBlocks.leftBlockIds.length) {
    console.log(
      'game over',
      disabledBlockCtn,
      generatedBlocks.leftBlockIds.length
    );
  }
  // console.log(generatedBlocks);
  console.log(boardState);
};
