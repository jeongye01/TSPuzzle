
import { Block } from './components/Blocks/Block';


import  './styles/style.css';
import { fillBlock } from './utils/fillBlock';
import { overBlock } from './utils/overBlock';
export const root=document.getElementById('root')  as HTMLElement;

export const calcOriginTileBoardIndex=(mouseX:number,mouseY:number)=>{
  const originPosX=mouseX-distanceFromOrigin.x;
  const originPosY=mouseY-distanceFromOrigin.y;
  const x=Math.trunc(originPosX/40); // 보드 상에서의 x좌표
  const y=Math.trunc(originPosY/40); // 보드 상에셔의 y좌표
  return {x,y};
}

export const distanceFromOrigin={
  x:null,
  y:null,
  setter:function(x:number,y:number){
    this.x=x;
    this.y=y;
  }
}

export const block={
   element:null,
   shape:null,
   setter:function(element:HTMLDivElement,shape:number[][]){
     this.element=element;
     this.shape=shape;
   }
}
export const boardState = Array.from(Array(10), () => Array(10).fill(0));
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();
   // 보드 상에서의 x,y좌표
   const {x,y}=calcOriginTileBoardIndex(e.x,e.y);
   fillBlock(x,y);
 }
 const onDragOver=(e)=>{
 e.preventDefault();
 const allTileOver=document.querySelectorAll('.tile-over')
 allTileOver.forEach((tileOver)=>{
   tileOver.classList.remove('tile-over');
 });
 // 보드 상에서의 x,y좌표
 const {x,y}=calcOriginTileBoardIndex(e.x,e.y);

 overBlock(x,y);

 


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
 
// 1x1
Block([[1]]); 

// 1x2
Block([[1],[1]]);

// 1x3
Block([[1],[1],[1]]);

// 1x4
Block([[1],[1],[1],[1]]);

// 1x5
Block([[1],[1],[1],[1],[1]]);


// 2x1
Block([[1,1]]);

// 2x2
Block([[0,1],[1,1]]);
Block([[1,0],[1,1]]);
Block([[1,1],[1,0]]);
Block([[1,1],[0,1]]);
Block([[1,1],[1,1]]);

// 2x3
Block([[1,1],[1,0],[1,0]]);
Block([[1,0],[1,1],[1,0]]);
Block([[1,0],[1,0],[1,1]]);
Block([[1,1],[0,1],[0,1]]);
Block([[0,1],[1,1],[0,1]]);
Block([[0,1],[0,1],[1,1]]);

// 3x1
Block([[1,1,1]]);

// 3x2
Block([[1,1,1],[0,0,1]]);
Block([[1,0,0],[1,1,1]]);
Block([[1,1,1],[0,0,1]]);
Block([[1,0,0],[1,1,1]]);
Block([[0,0,1],[1,1,1]]);
Block([[1,1,1],[1,0,0]]);

// 3x3
Block([[1,1,1],[0,0,1],[0,0,1]]);
Block([[0,0,1],[0,0,1],[1,1,1]]);
Block([[1,0,0],[1,0,0],[1,1,1]]);
Block([[1,1,1],[1,0,0],[1,0,0]]);
Block([[1,1,1],[1,1,1],[1,1,1]]);



// 4x1
Block([[1,1,1,1]])

// 5x1

Block([[1,1,1,1,1]]);

  const blocks=document.querySelectorAll('.block');

  blocks.forEach((b)=> blockContainer.appendChild(b));

  blockContainer.style.display="flex";
  blockContainer.style.width="full";
  blockContainer.style.marginTop="50px";
  blockContainer.style.gap="20px";


  root.appendChild(blockContainer);
  
}




render();





  