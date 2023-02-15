import { boardState, holdingBlock, prevPos } from '../..';
import { fillBlock } from '../../utils/fillBlock';
import { overBlock } from '../../utils/overBlock';
import BoardModel from './model';
import BoardView from './view';

export default class Board {
  private _target: HTMLDivElement;
  private _model: any; //TODO: any 없애기
  private _view: any; // TODO: any 없애기
  private _tileSize: number;

  constructor(target: HTMLDivElement) {
    this._target = target;
    this._model = new BoardModel();
    this._view = new BoardView('#board');
    this.render();
    this.addEvents();

    //this.initChildren();
  }
  calcOriginTileBoardIndex = (mouseX: number, mouseY: number) => {
    const originPosX = mouseX - holdingBlock.getBlock().position.x;
    const originPosY = mouseY - holdingBlock.getBlock().position.y;

    const x = Math.abs(Math.round(originPosX / 40)); // 보드 상에서의 x좌표
    const y = Math.abs(Math.round(originPosY / 40)); // 보드 상에셔의 y좌표
    /*console.log(
      '보드 상 좌표',
      x,
      y,
      mouseX,
      mouseY,
      holdingBlock.getBlock().position.x,
      holdingBlock.getBlock().position.y,
      originPosX / 40,
      originPosY / 40
    );*/

    // console.log(document.getElementById('0+0').clientWidth);
    return { x, y };
  };
  onDrop = (e) => {
    e.stopPropagation();
    /* console.log(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
    );*/
    //console.log(this._target);
    // 보드 상에서의 x,y좌표
    const { x, y } = this.calcOriginTileBoardIndex(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
    );
    fillBlock(x, y);
  };
  onDragOver = (e) => {
    e.preventDefault();
    // 보드 상에서의 x,y좌표

    const { x, y } = this.calcOriginTileBoardIndex(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
    );
    /*console.log(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
    );*/
    if (x === prevPos.x && y === prevPos.y) return;

    prevPos.setter(x, y);
    const allTileOver = document.querySelectorAll('.board__tile--over');
    Array.prototype.forEach.call(allTileOver, (targetTile) => {
      targetTile.style.backgroundColor = null;
      targetTile.classList.remove('board__tile--over');
    });

    overBlock(x, y);
  };

  render = () => {
    this._view.render();
  };

  // 이벤트 핸들러 부착
  addEvents = () => {
    this._target.addEventListener('drop', this.onDrop);
    this._target.addEventListener('dragover', this.onDragOver);
  };
}
