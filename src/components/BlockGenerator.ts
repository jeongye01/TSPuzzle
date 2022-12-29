export default function BlockGenerator (block:HTMLDivElement,blockShape:number[][]){

   blockShape.forEach((row)=>{
   
    const blockRow=document.createElement('div'); 
    row.forEach((b)=>
      { if(b){
        const tile=document.createElement('div');  
    tile.setAttribute('class','tile');
      blockRow.appendChild(tile)
      blockRow.style.display="flex"
      }
      
      block.appendChild(blockRow);
    }
   )
   });
   
    
  
  }