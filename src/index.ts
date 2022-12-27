import  './styles/style.css';
const root=document.getElementById('root')  as HTMLElement;

let diffX=0,diffY=0;
const boardState = Array.from(Array(10), () => Array(10).fill(0));
const board=document.createElement('div');
function Board (){
  const onDrop=(e)=>{
    e.stopPropagation();
   // main block 좌표
    const mainX=e.x-diffX;
    const mainY=e.y+diffY;
    const x=Math.trunc(mainX/40);
    const y=Math.trunc(mainY/40);
   // main block 좌표가 속해있는 board 좌표
   console.log(e.target.dataset);
    
    console.log(Math.trunc(mainX/40),Math.trunc(mainY/40));
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
 const onDragOver=(e)=>{
 e.preventDefault();
 
 e.target.classList.add('tile-over')
}
const onDragLeave=(e)=>{
  e.preventDefault();
  e.target.classList.remove('tile-over')
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
     tile.addEventListener("dragover",onDragOver);
     tile.addEventListener( "dragleave",onDragLeave);
     tile.addEventListener("drop",onDrop);

     rowContainer.appendChild(tile);
 
   });
   board.appendChild(rowContainer);
   
 });

 root.appendChild(board);
}
function BlockTile (block:HTMLDivElement,x:number,y:number){
 
  const tile=document.createElement('div');
 
  


   tile.setAttribute('class','tile');  
   if(x===0 && y===0){
    tile.setAttribute('id',`tile1-1`);
    
   }
   
   block.appendChild(tile);

}
function Block (){
 
 const block=document.createElement('div');

 
 const onDragStart=(e)=>{
  
  
  // main block 좌표와 마우스 좌표 차이 계산
  diffX=Math.abs(e.offsetX-20);
  diffY=Math.abs(e.offsetY-60);
  
  
  console.log("drag start");
}
const onDragEnd=(e)=>{
  console.log(e,"block");
  console.log(e.target.children[0].style.x)
}
 BlockTile(block,-1,0); 
 BlockTile(block,0,0);
 BlockTile(block,1,0);
 block.draggable=true;
 block.addEventListener("dragstart" ,onDragStart);
 block.addEventListener("dragend",onDragEnd);
// block.setAttribute('class','block')
root.appendChild(block);

}


function render(){
 
  Board();
  Block();

  
}




render();





  