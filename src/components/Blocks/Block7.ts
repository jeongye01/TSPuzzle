import { blockInfo, diff, root } from "../..";
import { boardState } from "../..";
import BlockGenerator from "../BlockGenerator";
import { statesSetter,calcBlockOriginPos } from "../blockDragStart";
import { isOutOfRange } from "../../utils/isOutOfRange";


const blockShape=[[1],[1]];
export default function Block7 (){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
       const {diffX,diffY} =calcBlockOriginPos(e.offsetX,e.offsetY,blockShape);
       statesSetter(diffX,diffY,block,fillBlock,overBlock);
    
   }
   
   BlockGenerator(block,blockShape);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','block');
   // block.setAttribute('class','block')
   root.appendChild(block);
   
}

export const fillBlock =(x:number,y:number)=>{
     // main block 좌표가 속해있는 board 좌표
  // console.log(e.target.dataset);
    
   // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));
   console.log(x,y);
   if(isOutOfRange(x,y,blockShape))return;
   console.log(boardState);
   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         if(boardState[y+oy][x+ox]) return;
      }
   }
   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         boardState[y+oy][x+ox] =1;
         const targetTile= document.getElementById(`${x+ox}+${y+oy}`);
         targetTile.classList.add('tile-filled');
         targetTile.classList.remove('tile-over');
      }
   }
  
}

export const overBlock=(x:number,y:number)=>{
   if(isOutOfRange(x,y,blockShape))return;
    for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         if(boardState[y+oy][x+ox]) return;
      }
   }

   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
       
         const targetTile= document.getElementById(`${x+ox}+${y+oy}`);
         targetTile.classList.add('tile-over');
      }
   }
}

