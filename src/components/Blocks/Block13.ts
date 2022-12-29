import { blockInfo, boardState, diff, root } from "../..";
import BlockGenerator from "../BlockGenerator";

const blockShape=[[1,1,1,1,1]];
export function Block13 (diffSetter:(x:number,y:number)=>void,blockSetter:(block:HTMLDivElement,fillFunc:(x:number,y:number)=>void,overFunc:(x:number,y:number)=>void)=>void){
 
    const block=document.createElement('div');
   
    
    const onDragStart=(e)=>{
     
     
        // main block 좌표와 마우스 좌표 차이 계산
        console.log(e.offsetX,e.offsetY)
        const diffX=e.offsetX-20;
        const diffY=e.offsetY-20;
        const bindDiffSetter=diffSetter.bind(diff);
        bindDiffSetter(diffX,diffY)
        const bindBlockSetter=blockSetter.bind(blockInfo);
        bindBlockSetter(block,fillBlock,overBlock)
        // console.log("drag start");
      }
   
    BlockGenerator(block,blockShape);
    block.draggable=true;
    block.addEventListener("dragstart" ,onDragStart);
    block.setAttribute('class',' block');

   // block.setAttribute('class','block')
   root.appendChild(block);
   
   }
export const fillBlock =(x:number,y:number)=>{
    // main block 좌표가 속해있는 board 좌표
 // console.log(e.target.dataset);
   
  // console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));


  
  
 for(let i=0; i<5;i++){
    if(  boardState[x+i][y])return;
 }
  
    
 for(let i=0; i<5;i++){
    boardState[x+i][y]=1;
 }
 for(let i=0; i<5;i++){
    document.getElementById(`${x+i}+${y}`).classList.add('tile-filled');
       
       
        document.getElementById(`${x+i}+${y}`).classList.remove('tile-over');
 }
    
  
      
   
}

export const overBlock=(x:number,y:number)=>{
  

    for(let i=0; i<5;i++){
        if(  boardState[x+i][y])return;
     }
      
  
     for(let i=0; i<5;i++){
       
           
           
            document.getElementById(`${x+i}+${y}`).classList.add('tile-over');
     }
        
      
   
}
  