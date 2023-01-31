import BlockModel from './modules/block/model';
import GameBoardComponent from './modules/gameBoard/component';
import GameBoardModel from './modules/gameBoard/model';
import GameBoardView from './modules/gameBoard/view';
import './styles/style.css';
import { generateRandomBlocks } from './utils/generateRandomBlocks';

export const $root = document.getElementById('root') as HTMLElement;
export const boardState = Array.from(Array(10), () => Array(10).fill(0));
export const calcOriginTileBoardIndex = (mouseX: number, mouseY: number) => {
  const originPosX = mouseX - holdingBlock.getBlock().position.x;
  const originPosY = mouseY - holdingBlock.getBlock().position.y;
  const x = Math.trunc(originPosX / tileSize.value); // 보드 상에서의 x좌표
  const y = Math.trunc(originPosY / tileSize.value); // 보드 상에셔의 y좌표
  //console.log('보드 상 좌표', x, y);
  return { x, y };
};

export const holdingBlock = {
  _block: null,
  setBlock(block: BlockModel) {
    console.log('블록셋', block);
    this._block = block;
  },
  getBlock() {
    return this._block;
  },
};

export const prevPos = {
  x: null,
  y: null,
  setter: function (x: number, y: number) {
    this.x = x;
    this.y = y;
  },
};
export const tileSize = {
  value: null,

  setter: function (value: number) {
    this.value = value;
  },
};
export const point = {
  value: 0,
  element: null,
  setter: function (newPoint: number) {
    this.value += newPoint;
    this.element.innerText = this.value;
  },
};

export const generatedBlocks = {
  leftBlockIds: [],
  mapShapeNId: new Map(),
  mapShape: function (
    generatedBlockId: string,
    generatedBlockShape: number[][]
  ) {
    this.mapShapeNId.set(generatedBlockId, generatedBlockShape);
  },
  addOne: function (generatedBlockId: string) {
    this.leftBlockIds.push(generatedBlockId);
  },
  removeOne: function (targetId: string) {
    const targetIdx = this.leftBlockIds.indexOf(targetId);
    if (targetIdx !== -1) {
      this.leftBlockIds.splice(targetIdx, 1);
    }
  },
};
const board = document.createElement('div');
board.id = 'board';

function render() {
  const scoreBoard = document.createElement('div');
  scoreBoard.setAttribute('class', 'score');
  const scoreBestText = document.createElement('span');
  const scoreCurText = document.createElement('span');
  const trophy = document.createElement('img');
  scoreBestText.innerText = point.value + '';
  scoreBestText.setAttribute('class', 'score__text--best');
  scoreCurText.innerText = point.value + '';
  scoreCurText.setAttribute('class', 'score__text--current');
  trophy.src = '/images/trophy4.svg';
  trophy.setAttribute('class', 'score__trophy');
  scoreBoard.appendChild(scoreCurText);
  scoreBoard.appendChild(trophy);
  scoreBoard.appendChild(scoreBestText);
  $root.appendChild(scoreBoard);
  $root.appendChild(board);

  const blockContainer = document.createElement('div');

  new GameBoardComponent(
    board,
    new GameBoardModel(),
    new GameBoardView('#board')
  );
  const originTile = document.getElementById('0+0').clientWidth;
  tileSize.setter(originTile);

  blockContainer.style.display = 'flex';
  blockContainer.style.width = 'full';
  blockContainer.style.marginTop = '50px';
  blockContainer.style.gap = '20px';
  blockContainer.id = 'blockContainer';
  point.element = scoreCurText;
  $root.appendChild(blockContainer);
  generateRandomBlocks();
}

render();
