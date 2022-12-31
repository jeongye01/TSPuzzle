import {  root } from "../..";
import BlockGenerator from "../BlockGenerator";
import { statesSetter,calcBlockOriginPos } from "../blockDragStart";


export function Block (blockShape:number[][]){
 
const isAlignEnd=()=>{
  let result=false;
  for(let i=0;i<blockShape.length;i++){
    if(blockShape[i][0]===0){
      result=true;
      break;
    }
  }
  return result;
}

  const block=document.createElement('div');
  
  
  const onDragStart=(e)=>{
   
   
    const {diffX,diffY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
    statesSetter(diffX,diffY,block,blockShape);
    }
  BlockGenerator(block,blockShape);

  block.draggable=true;
  block.addEventListener("dragstart" ,onDragStart);
  block.setAttribute('class',`${isAlignEnd()?"-align--end":""} block`);

 
 // block.setAttribute('class','block')
 root.appendChild(block);
 
 }




