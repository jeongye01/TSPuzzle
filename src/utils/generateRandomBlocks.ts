import { generatedBlocks, root } from "..";
import { Block } from "../components/Blocks/Block";
import { BLOCK_SHAPES } from "../constants/BlockShapes";

export const generateRandomBlocks=()=>{
    const BLOCK_NUM=3;

    const blockContainer=document.getElementById("blockContainer");
    for(let i=0;i<BLOCK_NUM;i++){
        const blockId=`block_${i}`
        const blockShape=BLOCK_SHAPES[Math.trunc(Math.random()*31)];
       Block(blockShape,blockId); 
        generatedBlocks.addOne(blockId);
        generatedBlocks.mapShape(blockId,blockShape);
       }
     

       const blocks=document.querySelectorAll('.block');

    blocks.forEach((b)=> blockContainer.appendChild(b));
     
      
}