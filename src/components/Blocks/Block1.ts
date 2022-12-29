import { blockInfo, diff, root } from "../..";
import BlockTile from "../BlockTile";
import { boardState } from "../..";
import BlockGenerator from "../BlockGenerator";
const blockShape=[[1],[1],[1]];
export default function Block1 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
     
     
     // main block 좌표와 마우스 좌표 차이 계산
     console.log(e.offsetX,e.offsetY)
     const diffX=e.offsetX-20;
     const diffY=e.offsetY-60;
     const bindDiffSetter=diffSetter.bind(diff);
     bindDiffSetter(diffX,diffY)
     const bindBlockSetter=blockSetter.bind(blockInfo);
     bindBlockSetter(block,fillBlock1,overBlock1)
     // console.log("drag start");
   }
   
   BlockGenerator(block,blockShape);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class','block');
   // block.setAttribute('class','block')
   root.appendChild(block);
   
}

export const fillBlock1 =(x:number,y:number)=>{
     // main block 좌표가 속해있는 board 좌표
  // console.log(e.target.dataset);
    
   // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));
   if(y-1<0 || y+1>9)return;
   console.log(boardState);
   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         if(boardState[y+oy-1][x+ox]) return;
      }
   }
   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         boardState[y+oy-1][x+ox] =1;
         const targetTile= document.getElementById(`${x+ox}+${y+oy-1}`);
         targetTile.classList.add('tile-filled');
         targetTile.classList.remove('tile-over');
      }
   }
  
}

export const overBlock1=(x:number,y:number)=>{
    if(y-1<0 || y+1>9)return;
    for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
         if(boardState[y+oy-1][x+ox]) return;
      }
   }

   for(let ox=0; ox<blockShape[0].length;ox++){
      for(let oy=0; oy<blockShape.length;oy++){
       
         const targetTile= document.getElementById(`${x+ox}+${y+oy-1}`);
         targetTile.classList.add('tile-over');
      }
   }
}