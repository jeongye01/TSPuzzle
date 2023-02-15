import { $root, boardState } from '../..';

export default class BoardView {
  private _target: () => HTMLDivElement;
  constructor(targetId: string) {
    this._target = () => document.querySelector(targetId);
  }

  render = () => {
    // 10*10 크기의 보드생성
    const boardElement = this._target();

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

        rowContainer.appendChild(tile);
      });
      boardElement.appendChild(rowContainer);
    });
  };
}
