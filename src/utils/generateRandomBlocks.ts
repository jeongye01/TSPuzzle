import { Block } from "../components/Blocks/Block";
import { BLOCK_SHAPES } from "../constants/BlockShapes";

export const generateRandomBlocks=()=>{
    for(let i=0;i<3;i++){
        Block(BLOCK_SHAPES[Math.trunc(Math.random()*31)]); 
       }
      
}