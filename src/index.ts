
import { Block } from './components/Blocks/Block';


import  './styles/style.css';
import { fillBlock } from './utils/fillBlock';
import { overBlock } from './utils/overBlock';
export const root=document.getElementById('root')  as HTMLElement;

export const diff={
  x:0,
  y:0,
  setter:function(diffX:number,diffY:number){
    this.x=diffX;
    this.y=diffY;
  }
}
export const blockInfo={
   block:null,
   shape:null,
   setter:function(block:HTMLDivElement,shape:number[][]){
     this.block=block;
     this.shape=shape;
   }
}
export const boardState = Array.from(Array(10), () => Array(10).fill(0));
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();
   // main block 좌표
    const mainX= e.x-diff.x;
    const mainY=e.y-diff.y;
    const x=Math.trunc(mainX/40);
    const y=Math.trunc(mainY/40);
   fillBlock(x,y,blockInfo.shape);
 }
 const onDragOver=(e)=>{
 e.preventDefault();
 const allTileOver=document.querySelectorAll('.tile-over')
 allTileOver.forEach((tileOver)=>{
   tileOver.classList.remove('tile-over');
 });
 const mainX=e.x-diff.x;
 const mainY=e.y-diff.y;
 const x=Math.trunc(mainX/40);
 const y=Math.trunc(mainY/40);

// main block 좌표가 속해있는 board 좌표
 overBlock(x,y,blockInfo.shape);

 


}


 // 10*10 크기의 보드생성
 [1,1,1,1,1,1,1,1,1,1].forEach((_,row)=>{
   const rowContainer=document.createElement('div');
   rowContainer.setAttribute('class','row-container');
   [1,1,1,1,1,1,1,1,1,1].forEach((_,col)=>{
   
     const tile=document.createElement('div');
     tile.setAttribute('class','tile');
     if(boardState[col][row]){
      tile.classList.add('tile-filled')
     }
     tile.id=`${col}+${row}`;
     tile.dataset.x=col+'';
     tile.dataset.y=row+'';
     tile.addEventListener("dragover",onDragOver);
     tile.addEventListener("drop",onDrop);

     rowContainer.appendChild(tile);
 
   });
   board.appendChild(rowContainer);
   
 });

 root.appendChild(board);
}




function render(){
 
  Board();
  const blockContainer=document.createElement('div');
  
  
Block([[1],[1],[1]]);
 Block([[1,1,1]]);
Block([[0,1],[1,1]]);
  Block([[1,0],[1,1]]);
  Block([[1,1],[1,0]]);
Block([[1,1],[1,1]]);
 Block([[1],[1]]);
 Block([[1,1],[0,1],[0,1]]);
 Block([[1,1,1],[1,1,1],[1,1,1]]);
  Block([[0,0,1],[0,0,1],[1,1,1]]); 
   Block([[1]]); 
   Block([[1,1]]);
  Block([[1,1,1,1,1]]);
  Block([[1,1],[0,1]]);
  Block([[1,1,1,1]]);
  Block([[1],[1],[1],[1]]);
  Block([[1,1,1],[1,0,0],[1,0,0]]);
  const blocks=document.querySelectorAll('.block');

  blocks.forEach((b)=> blockContainer.appendChild(b));

  blockContainer.style.display="flex";
  blockContainer.style.width="full";
  blockContainer.style.marginTop="50px";
  blockContainer.style.gap="20px";


  root.appendChild(blockContainer);
  
}




render();





  