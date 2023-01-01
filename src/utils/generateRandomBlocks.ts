import { generatedBlocks, root } from "..";
import { Block } from "../components/Blocks/Block";
import { BLOCK_SHAPES } from "../constants/BlockShapes";

export const generateRandomBlocks=()=>{
    const BLOCK_NUM=3;
    const blockContainer=document.getElementById("blockContainer");
    console.log(blockContainer);
    for(let i=0;i<BLOCK_NUM;i++){
        Block(BLOCK_SHAPES[Math.trunc(Math.random()*31)]); 
       }
       generatedBlocks.setter(BLOCK_NUM);
       console.log(generatedBlocks.leftCount);
       const blocks=document.querySelectorAll('.block');

    blocks.forEach((b)=> blockContainer.appendChild(b));
     
      
}