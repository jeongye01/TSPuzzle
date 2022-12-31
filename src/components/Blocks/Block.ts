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
 
const isAlignCenter=()=>{
  let result=false;
  for(let i=0;i<blockShape.length;i++){
    if(blockShape[i][blockShape[0].length-1]===0 && blockShape[i][0]===0){
      result=true;
      break;
    }
  }
  
  return result;
}
  const blockElement=document.createElement('div');
  
  
  const onDragStart=(e)=>{
   
   
    const {originX,originY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
    statesSetter(originX,originY,blockElement,blockShape);
    }
  BlockGenerator(blockElement,blockShape);

  blockElement.draggable=true;
  blockElement.addEventListener("dragstart" ,onDragStart);
  blockElement.setAttribute('class',`${isAlignEnd()?"-align--end":""} ${isAlignCenter()?"-align--center":""} block`);

 
 // block.setAttribute('class','block')
 root.appendChild(blockElement);
 
 }




