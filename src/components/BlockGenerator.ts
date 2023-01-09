import { isPlaceable } from '../utils/isPlaceable';

const BLOCK_COLORS = [
  '#29CC7A', // 초록
  '#FF78B9', // 핑크
  '#2A39D4', // 파랑
  '#66BCFF', //하늘색
  '#FFE75C', //노랑
  '#FF8C19', //주황
  '#D11583', //보라
];
export default function BlockGenerator(
  blockElement: HTMLDivElement,
  blockShape: number[][]
) {
  const blockColor =
    BLOCK_COLORS[Math.trunc(Math.random() * BLOCK_COLORS.length)];
  blockShape.forEach((row) => {
    const blockRow = document.createElement('div');
    row.forEach((b) => {
      if (b) {
        const tile = document.createElement('div');
        tile.setAttribute('class', 'tile block__tile');
        tile.style.backgroundColor = blockColor;
        blockRow.appendChild(tile);
        blockRow.style.display = 'flex';
      }

      blockElement.appendChild(blockRow);
    });
  });
  blockElement.dataset.color = blockColor;
  isPlaceable(blockElement, blockShape);
}
