import { blockInfo, diff, root } from "../..";
import BlockTile from "../BlockTile";
import { boardState } from "../..";

export default function Block7 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
     
     
     // main block 좌표와 마우스 좌표 차이 계산
     console.log(e.offsetX,e.offsetY)
     const diffX=e.offsetX-20;
     const diffY=e.offsetY-60;
     const bindDiffSetter=diffSetter.bind(diff);
     bindDiffSetter(diffX,diffY)
     const bindBlockSetter=blockSetter.bind(blockInfo);
     bindBlockSetter(block,fillBlock,overBlock)
     // console.log("drag start");
   }
   
    BlockTile(block); 
    BlockTile(block);
  
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
   if(y-1<0 )return;
   if(boardState[x][y] || boardState[x][y-1] || boardState[x][y+1]) return;
 
   boardState[x][y]= boardState[x][y-1]=boardState[x][y+1]=1;
   document.getElementById(`${x}+${y}`).classList.add('tile-filled');
   document.getElementById(`${x}+${y-1}`).classList.add('tile-filled');
 
   document.getElementById(`${x}+${y}`).classList.remove('tile-over');
   document.getElementById(`${x}+${y-1}`).classList.remove('tile-over');
}

export const overBlock=(x:number,y:number)=>{
    if(y-1<0 )return;
 if(boardState[x][y] || boardState[x][y-1] || boardState[x][y+1]) return;
 
 document.getElementById(`${x}+${y}`).classList.add('tile-over');
 document.getElementById(`${x}+${y-1}`).classList.add('tile-over');
 
}