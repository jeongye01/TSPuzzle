import Block1, { fillBlock1, overBlock1 } from './components/Blocks/Block1';
import { Block2 } from './components/Blocks/Block2';
import BlockTile from './components/BlockTile';
import  './styles/style.css';
export const root=document.getElementById('root')  as HTMLElement;
export const diff={
  x:0,
  y:0,
  setter:function(diffX:number,diffY:number){
    console.log(diffX,diffY,"qwer");
    this.x=diffX;
    this.y=diffY;
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
   fillBlock1(x,y);
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

overBlock1(x,y);

 


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
  Block1(diff.setter);
  Block2(diff.setter);

  
}




render();





  