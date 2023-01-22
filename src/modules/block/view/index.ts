import { isPlaceable } from '../../../utils/isPlaceable';

export default class BlockView {
  private _target: () => HTMLDivElement;
  constructor(target: string) {
    this._target = () => document.querySelector(target);
  }

  render = (blockColor: string, blockShape: number[][]) => {
    const blockElement = this._target();
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
        isPlaceable(blockElement, blockShape);
      });
    });
  };
}
