import { blockInfo, boardState, diff, root } from "../..";
import { isOutOfRange } from "../../utils/isOutOfRange";
import { statesSetter,calcBlockOriginPos } from "../blockDragStart";
import BlockGenerator from "../BlockGenerator";


const blockShape=[[0,1],[1,1]];
export function Block3 (){
 
    const block=document.createElement('div');
    
    
    const onDragStart=(e)=>{
     
     
      const {diffX,diffY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
      statesSetter(diffX,diffY,block,fillBlock,overBlock);
      }
    BlockGenerator(block,blockShape);
  
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','-block--three block');

   
   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
 console.log(x,y);
 if(isOutOfRange(x,y,blockShape))return;
  console.log(boardState);
  for(let ox=0; ox<blockShape[0].length;ox++){
    for(let oy=0; oy<blockShape.length;oy++){
       if(boardState[y+oy][x+ox-1] && blockShape[oy][ox] ) return;
    }
 }
 for(let ox=0; ox<blockShape[0].length;ox++){
  for(let oy=0; oy<blockShape.length;oy++){
    if(!blockShape[oy][ox]) continue;
     boardState[y+oy][x+ox-1]=1;
     document.getElementById(`${x+ox-1}+${y+oy}`).classList.add('tile-filled');
     document.getElementById(`${x+ox-1}+${y+oy}`).classList.remove('tile-over');
  }
}

  
 
}

export const overBlock=(x:number,y:number)=>{
  if(isOutOfRange(x,y,blockShape))return;
    for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
        if(boardState[y+oy][x+ox-1] && blockShape[oy][ox] ) return;
      }
   }
   for(let ox=0; ox<blockShape[0].length;ox++){
    for(let oy=0; oy<blockShape.length;oy++){
      if(!blockShape[oy][ox]) continue;
       document.getElementById(`${x+ox-1}+${y+oy}`).classList.add('tile-over');
    }
  }
}