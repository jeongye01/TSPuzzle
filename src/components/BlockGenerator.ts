import { boardState,block } from "..";
import { isPlaceable } from "../utils/isPlaceable";




export default function BlockGenerator (blockElement:HTMLDivElement,blockShape:number[][]){




   blockShape.forEach((row)=>{
   
    const blockRow=document.createElement('div'); 
    row.forEach((b)=>
      { if(b){
        const tile=document.createElement('div');  
         tile.setAttribute('class','tile block__tile');
         blockRow.appendChild(tile)
         blockRow.style.display="flex"
      }
      
      blockElement.appendChild(blockRow);
    }
   )
   });
   isPlaceable(blockElement,blockShape);
    
   
   
    
  
  }