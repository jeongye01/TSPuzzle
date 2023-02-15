import { BLOCK_SHAPES } from '../constants/BlockShapes';
import Block from '../modules/block/component';

const BLOCK_COLORS = [
  '#29CC7A', // 초록
  '#FF78B9', // 핑크
  '#2A39D4', // 파랑
  '#66BCFF', //하늘색
  '#FFE75C', //노랑
  '#FF8C19', //주황
  '#D11583', //보라
];

export const generateRandomBlocks = ($app: HTMLElement) => {
  const blockContainer = document.getElementById('blockContainer');
  const BLOCK_NUM = 3;
  for (let i = 0; i < BLOCK_NUM; i++) {
    const id = `block_${i}`;
    const shape = BLOCK_SHAPES[Math.trunc(Math.random() * 31)];
    const color = BLOCK_COLORS[Math.trunc(Math.random() * 7)];
    const newBlock = document.createElement('div');
    blockContainer.appendChild(newBlock);
    new Block(newBlock, { shape, color, id });

    // $app.appendChild(newBlock);
    // generatedBlocks.addOne(blockId);

    // generatedBlocks.mapShape(blockId, blockShape);
  }
};
