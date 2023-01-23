import { boardState, calcOriginTileBoardIndex, prevPos } from '../..';
import { fillBlock } from '../../utils/fillBlock';
import { overBlock } from '../../utils/overBlock';

export default class GameBoardComponent {
  private _target: HTMLDivElement;
  private _model: any; //TODO: any 없애기
  private _view: any; // TODO: any 없애기

  constructor(target: any, model: any, view: any) {
    this._target = target;
    this._model = model;
    this._view = view;

    this.init();
    this.render();
    this.addEvents();
    this.initChildren();
  }

  onDrop = (e) => {
    e.stopPropagation();
    const allTileOver = document.getElementsByClassName('board__tile--over');
    console.log('drop', allTileOver);

    // 보드 상에서의 x,y좌표
    const { x, y } = calcOriginTileBoardIndex(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
    );
    fillBlock(x, y);
  };
  onDragOver = (e) => {
    e.preventDefault();
    console.log('drag endter');
    // 보드 상에서의 x,y좌표
    const { x, y } = calcOriginTileBoardIndex(
      e.x - this._target.getBoundingClientRect().left,
      e.y - this._target.getBoundingClientRect().top
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

  /*setState = (newState) => {
    this._model.setState(newState);
    this.render(this._model.get());
  };*/

  render = () => {
    this._view.render();
  };

  // component 렌더링 직전 처리할 비즈니스 로직
  init = () => {};

  // 이벤트 핸들러 부착
  addEvents = () => {
    this._target.addEventListener('drop', this.onDrop);
    this._target.addEventListener('dragover', this.onDragOver);
  };

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
