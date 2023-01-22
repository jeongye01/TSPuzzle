import { $root } from '../../..';
import { calcBlockOriginPos } from '../../../components/blockDragStart';
import { isPlaceable } from '../../../utils/isPlaceable';

export default class BlockView {
  private _target: () => HTMLDivElement;
  constructor(target: string) {
    this._target = () => document.querySelector(target);
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
      });
    });
    isPlaceable(blockElement, blockShape);
    blockElement.draggable = true;
    blockElement.style.alignItems = this.getBlockAlignItemState(blockShape);
    blockElement.setAttribute('class', 'block');

    //  $root.appendChild(blockElement);
  };
}
