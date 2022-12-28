import { root } from "../..";
import BlockTile from "../BlockTile";

export function Block2 (diffSetter:(x:number,y:number)=>void){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
     
     
     // main block 좌표와 마우스 좌표 차이 계산
     const diffX=Math.abs(e.offsetX-20);
     const diffY=Math.abs(e.offsetY-60);
     diffSetter(diffX,diffY);
     
     // console.log("drag start");
   }
   
    BlockTile(block); 
    BlockTile(block);
    BlockTile(block);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
   
   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
  