import { generatedBlocks, $root } from '..';
import { Block } from '../components/Blocks/Block';
import { BLOCK_SHAPES } from '../constants/BlockShapes';
import BlockComponent from '../modules/block/component';
import BlockModel from '../modules/block/model';
import BlockView from '../modules/block/view';

const BLOCK_COLORS = [
  '#29CC7A', // 초록
  '#FF78B9', // 핑크
  '#2A39D4', // 파랑
  '#66BCFF', //하늘색
  '#FFE75C', //노랑
  '#FF8C19', //주황
  '#D11583', //보라
];
export const generateRandomBlocks = () => {
  const BLOCK_NUM = 3;

  const blockContainer = document.getElementById('blockContainer');
  for (let i = 0; i < BLOCK_NUM; i++) {
    const blockId = `block_${i}`;
    const blockShape = BLOCK_SHAPES[Math.trunc(Math.random() * 31)];
    const blockColor = BLOCK_COLORS[Math.trunc(Math.random() * 7)];
    const newBlock = document.createElement('div');
    newBlock.id = blockId;
    blockContainer.appendChild(newBlock);
    new BlockComponent(
      newBlock,
      new BlockModel(blockShape, blockColor),
      new BlockView(`#${blockId}`)
    );

    generatedBlocks.addOne(blockId);
    generatedBlocks.mapShape(blockId, blockShape);
  }
};
