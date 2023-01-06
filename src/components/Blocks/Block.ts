import {  root,block, boardState } from "../..";
import BlockGenerator from "../BlockGenerator";
import { blockStateSetter,calcBlockOriginPos } from "../blockDragStart";


export function Block (blockShape:number[][]){

const getAlignItemState=()=>{
  let alignItemState='start';
  for(let i=0;i<blockShape.length;i++){
    if(blockShape[i][0]===0){
      alignItemState="end";
      if(blockShape[i][blockShape[0].length-1]===0){
        alignItemState="center";
        break;
      }
      
    }
  }
  return alignItemState;
}
 

  const blockElement=document.createElement('div');
  
  
  const onDragStart=(e)=>{
    const {originX,originY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
    blockStateSetter(originX,originY,blockElement,blockShape);
    block.element.classList.add('hide');
    }
  const onDragEnd=(e)=>{
      console.log("drag end");
      block.element.classList.remove('hide');
  }

   
  BlockGenerator(blockElement,blockShape);
  blockElement.draggable=true;
  blockElement.addEventListener("dragstart" ,onDragStart);
  blockElement.addEventListener("dragend" ,onDragEnd);
  blockElement.setAttribute('class','block');
  blockElement.style.alignItems=getAlignItemState();
  
 
 // block.setAttribute('class','block')
 root.appendChild(blockElement);
 
 }




