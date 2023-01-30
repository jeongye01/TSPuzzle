import { $root } from '../..';
import { isPlaceable } from '../../utils/isPlaceable';

export default class BlockView {
  private _targetById: () => HTMLDivElement;
  constructor(target: string) {
    this._targetById = () => document.getElementById(target) as HTMLDivElement;
  }

  getBlockAlignItemState = (blockShape: number[][]) => {
    let alignItemState = 'start';
    for (let i = 0; i < blockShape.length; i++) {
      if (blockShape[i][0] === 0) {
        alignItemState = 'end';
        if (blockShape[i][blockShape[0].length - 1] === 0) {
          alignItemState = 'center';
          break;
        }
      }
    }
    return alignItemState;
  };

  render = (blockColor: string, blockShape: number[][]) => {
    const blockElement = this._targetById();
    blockElement.draggable = true;
    blockShape.forEach((row) => {
      const blockRow = document.createElement('div');
      row.forEach((b) => {
        if (b) {
          const tile = document.createElement('div');
          tile.setAttribute('class', 'tile block__tile');
          tile.style.backgroundColor = blockColor;
          blockRow.appendChild(tile);
        }
      });
      blockElement.appendChild(blockRow);
      blockRow.style.display = 'flex';
    });
    isPlaceable(blockElement, blockShape, blockColor);

    blockElement.style.alignItems = this.getBlockAlignItemState(blockShape);
    blockElement.setAttribute('class', 'block');

    // $root.appendChild(blockElement);
  };
}
