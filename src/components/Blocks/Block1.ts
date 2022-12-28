import { root } from "../..";
import BlockTile from "../BlockTile";
import { boardState } from "../..";

export default function Block1 (diffX:number,diffY:number){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
     
     
     // main block 좌표와 마우스 좌표 차이 계산
     diffX=Math.abs(e.offsetX-20);
     diffY=Math.abs(e.offsetY-60);
     
     
     // console.log("drag start");
   }
   
    BlockTile(block,-1,0); 
    BlockTile(block,0,0);
    BlockTile(block,1,0);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
   
   // block.setAttribute('class','block')
   root.appendChild(block);
   
}

export const fillBlock1 =(x:number,y:number)=>{
     // main block 좌표가 속해있는 board 좌표
  // console.log(e.target.dataset);
    
   // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));
   if(y-1<0 || y+1>9)return;
   if(boardState[x][y] || boardState[x][y-1] || boardState[x][y+1]) return;
 
   boardState[x][y]= boardState[x][y-1]=boardState[x][y+1]=1;
   document.getElementById(`${x}+${y}`).classList.add('tile-filled');
   document.getElementById(`${x}+${y-1}`).classList.add('tile-filled');
   document.getElementById(`${x}+${y+1}`).classList.add('tile-filled');
   document.getElementById(`${x}+${y}`).classList.remove('tile-over');
   document.getElementById(`${x}+${y-1}`).classList.remove('tile-over');
   document.getElementById(`${x}+${y+1}`).classList.remove('tile-over');
}

export const overBlock1=(x:number,y:number)=>{
    if(y-1<0 || y+1>9)return;
 if(boardState[x][y] || boardState[x][y-1] || boardState[x][y+1]) return;
 
 document.getElementById(`${x}+${y}`).classList.add('tile-over');
 document.getElementById(`${x}+${y-1}`).classList.add('tile-over');
 document.getElementById(`${x}+${y+1}`).classList.add('tile-over');
}