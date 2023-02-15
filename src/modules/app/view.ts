import { $root, boardState } from '../..';
import { generateRandomBlocks } from '../../utils/generateRandomBlocks';
import { isPlaceable } from '../../utils/isPlaceable';
import Board from '../board/component';

export default class AppView {
  private _target: () => HTMLDivElement;
  constructor(targetId: string) {
    this._target = () => document.querySelector(targetId);
  }

  render = () => {
    const $root = this._target();
    const $board = document.createElement('div');
    $board.id = 'board';
    $root.appendChild($board);
    new Board($board);
    const blockContainer = document.createElement('div');
    blockContainer.id = 'blockContainer';

    $root.appendChild(blockContainer);
    generateRandomBlocks($root);
  };
}
