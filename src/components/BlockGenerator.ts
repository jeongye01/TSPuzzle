import { boardState,block } from "..";

export default function BlockGenerator (blockElement:HTMLDivElement,blockShape:number[][]){


 // 들어갈 공간이 한 군데라도 있으면 true 
 const isPlaceable=()=>{
  let result=false;
  const boardSize=boardState.length;
  for(let x=0;x<boardSize-blockShape[0].length;x++){
    for(let y=0;y<boardSize-blockShape.length;y++){
      let tmp=true;
       for(let bx=0;bx<blockShape[0].length;bx++){
        for(let by=0;by<blockShape.length;by++){
           // 겹치는 공간이 있음. -> 배치할 수 없음. 
         if(boardState[y+by][x+bx] && blockShape[by][bx] )tmp=false;
        }
       }
      if(tmp){
        // 배치할 공간을 찾음 
        result=true;
        break;
      }
    }
  }
  block.setIsPlaceable(result);
  return result;
}

   blockShape.forEach((row)=>{
   
    const blockRow=document.createElement('div'); 
    row.forEach((b)=>
      { if(b){
        const tile=document.createElement('div');  
    tile.setAttribute('class',`${isPlaceable()?'':'block__tile--placeable'} board__tile`);
      blockRow.appendChild(tile)
      blockRow.style.display="flex"
      }
      
      blockElement.appendChild(blockRow);
    }
   )
   });
    
   
   
    
  
  }