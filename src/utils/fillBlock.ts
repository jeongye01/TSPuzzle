import { boardState,block,distanceFromOrigin,generatedBlocks } from "..";
import { getLeftEnd, getUpEnd } from "./blockEnds";
import { generateRandomBlocks } from "./generateRandomBlocks";
import { isBlockOverlapping } from "./isBlockOverlapping";
import { isOutOfRange } from "./isOutOfRange";

export const fillBlock =(x:number,y:number)=>{
    const {shape:blockShape}= block;
    const rowLength=blockShape.length;
    const colLength=blockShape[0].length;
    if(isOutOfRange(x,y,rowLength,colLength))return;
    // if(x-1<0 || y+1>9)return;
    if(isBlockOverlapping(x,y,rowLength,colLength))return;
    for(let ox=0; ox<colLength;ox++){
        for(let oy=0; oy<rowLength;oy++){
            if(!blockShape[oy][ox]) continue;
             boardState[oy+getUpEnd(y,rowLength)][ox+getLeftEnd(x,colLength)]=1;
             document.getElementById(`${ox+getLeftEnd(x,colLength)}+${oy+getUpEnd(y,rowLength)}`).classList.add('board__tile--filled');
             document.getElementById(`${ox+getLeftEnd(x,colLength)}+${oy+getUpEnd(y,rowLength)}`).classList.remove('board__tile--over');
        }
        }
        generatedBlocks.removeOne();
block.element.remove();
if(!generatedBlocks.leftCount){
    generateRandomBlocks();
}
let allFilledRows=[];
boardState.forEach((row,rowIdx)=>{
    let thisRowAllFilled=true;
    row.forEach((col,colIdx)=>{
      if(col===0)thisRowAllFilled=false;

    })
    if(thisRowAllFilled){
        allFilledRows.push(rowIdx);
    }
});
if(allFilledRows.length){
      for(let i=0;i<allFilledRows.length;i++){
        for(let j=0;j<boardState.length;j++){
           boardState[allFilledRows[i]][j]=0;
           document.getElementById(`${j}+${allFilledRows[i]}`).classList.remove('board__tile--filled');

      }
    
    }
}
console.log(allFilledRows);
console.log(boardState);
}


