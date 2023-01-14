import { Block } from './components/Blocks/Block';
import { BLOCK_SHAPES } from './constants/BlockShapes';

import './styles/style.css';
import { fillBlock } from './utils/fillBlock';
import { generateRandomBlocks } from './utils/generateRandomBlocks';
import { overBlock } from './utils/overBlock';
export const $root = document.getElementById('root') as HTMLElement;

export const calcOriginTileBoardIndex = (mouseX: number, mouseY: number) => {
  const originPosX = mouseX - distanceFromOrigin.x;
  const originPosY = mouseY - distanceFromOrigin.y;
  const x = Math.trunc(originPosX / tileSize.value); // 보드 상에서의 x좌표
  const y = Math.trunc(originPosY / tileSize.value); // 보드 상에셔의 y좌표
  return { x, y };
};

export const distanceFromOrigin = {
  x: null,
  y: null,
  setter: function (x: number, y: number) {
    this.x = x;
    this.y = y;
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

export const boardState = Array.from(Array(10), () => Array(10).fill(0));

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
function Board() {
  const onDrop = (e) => {
    e.stopPropagation();
    const allTileOver = document.getElementsByClassName('board__tile--over');
    console.log('drop', allTileOver);

    // 보드 상에서의 x,y좌표
    const { x, y } = calcOriginTileBoardIndex(
      e.x - board.getBoundingClientRect().left,
      e.y - board.getBoundingClientRect().top
    );
    fillBlock(x, y);
  };
  const onDragOver = (e) => {
    e.preventDefault();
    console.log('drag endter');
    // 보드 상에서의 x,y좌표
    const { x, y } = calcOriginTileBoardIndex(
      e.x - board.getBoundingClientRect().left,
      e.y - board.getBoundingClientRect().top
    );
    if (x === prevPos.x && y === prevPos.y) return;
    console.log(x, prevPos.x, y, prevPos.y);
    prevPos.setter(x, y);
    const allTileOver = document.querySelectorAll('.board__tile--over');
    Array.prototype.forEach.call(allTileOver, (targetTile) => {
      targetTile.style.backgroundColor = null;
      targetTile.classList.remove('board__tile--over');
      console.log(targetTile.style.backgroundColor, 'bgcolor');
    });

    overBlock(x, y);
  };
  const onDragLeave = (e) => {
    e.preventDefault();

    const allTileOver = document.getElementsByClassName('board__tile--over');
    //  console.log('drag leave', allTileOver);
    Array.prototype.forEach.call(allTileOver, (targetTile) => {
      targetTile.style.backgroundColor = null;
      targetTile.classList.remove('board__tile--over');
    });
  };

  // 10*10 크기의 보드생성
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].forEach((_, row) => {
    const rowContainer = document.createElement('div');
    rowContainer.setAttribute('class', 'board__row');
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1].forEach((_, col) => {
      const tile = document.createElement('div');
      tile.setAttribute('class', 'tile board__tile');
      if (boardState[col][row]) {
        tile.classList.add('board__tile--filled');
      }
      tile.id = `${col}+${row}`;
      tile.dataset.x = col + '';
      tile.dataset.y = row + '';
      tile.addEventListener('drop', onDrop);
      tile.addEventListener('dragover', onDragOver);

      //    tile.addEventListener('dragleave', onDragLeave);

      rowContainer.appendChild(tile);
    });
    board.appendChild(rowContainer);
  });
  board.id = 'board';

  $root.appendChild(board);
}

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
  const blockContainer = document.createElement('div');
  Board();
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

//    box-shadow: rgba(0, 0, 0, 0.25) 0 -0.5rem 0.5rem 0.3rem inset;
