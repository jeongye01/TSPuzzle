import { boardState,block,distanceFromOrigin,generatedBlocks, point } from "..";
import { isPlaceable } from "../components/BlockGenerator";
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
        generatedBlocks.removeOne(block.element.id);
block.element.remove();
if(!generatedBlocks.leftBlockIds.length){
    generateRandomBlocks();
}
let allFilledRows=[];
let allFilledCols=[0,1,2,3,4,5,6,7,8,9];
boardState.forEach((row,rowIdx)=>{
    let thisRowAllFilled=true;
    row.forEach((col,colIdx)=>{
      if(col===0){
        thisRowAllFilled=false
        if(allFilledCols.indexOf(colIdx)!==-1){
            allFilledCols.splice(allFilledCols.indexOf(colIdx),1);
        }
      };
 
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
if(allFilledCols.length){
    for(let i=0;i<allFilledCols.length;i++){
      for(let j=0;j<boardState.length;j++){
         boardState[j][allFilledCols[i]]=0;
         document.getElementById(`${allFilledCols[i]}+${j}`).classList.remove('board__tile--filled');

    }
  
  }
  
}

const filledLineCtn=allFilledCols.length+allFilledRows.length;
console.log(filledLineCtn,"라인 수");
// 점수 올리기 
if(filledLineCtn){
    let newPoint=0;
   if(filledLineCtn===1){
    newPoint=10;
   }
   if(filledLineCtn===2){
    newPoint=20;
   }
   if(filledLineCtn===3){
    newPoint=60;
   }
   if(filledLineCtn===4){
    newPoint=100;
   }
   if(filledLineCtn===5){
    newPoint=200;
   }
   

   point.setter(newPoint);
   console.log("point",newPoint,point.value)
}
console.log(generatedBlocks.leftBlockIds);
generatedBlocks.leftBlockIds.forEach((id)=>{
    const leftBlock=document.getElementById(id);
    console.log(generatedBlocks.mapShapeNId.get(id),'asdlkfj');
  const result=isPlaceable(leftBlock,generatedBlocks.mapShapeNId.get(id));
  console.log(result);
});
// console.log(generatedBlocks);
// console.log(boardState);
}


