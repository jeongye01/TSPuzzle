import { holdingBlock } from '../..';
import { calcBlockOriginPos } from './utils';

export default class Block {
  private _target: HTMLDivElement;
  private _model: any; // TODO: any 빼기
  private _view: any; // TODO: any 빼기

  constructor(target, model, view) {
    this._target = target;
    this._model = model;
    this._view = view;

    this.init();
    this.render();
    this.addEvents();
    this.initChildren();
  }
  /*
  setState = (newState) => {
    this._model.setState(newState);
    this.render(this._model.get());
  };
*/
  render = () => {
    this._view.render(this._model.color, this._model.shape);
  };

  // component 렌더링 직전 처리할 비즈니스 로직
  init = () => {};

  onDragStart = (e) => {
    const { originX, originY } = calcBlockOriginPos(
      e.offsetX,
      e.offsetY,
      this._model.shape
    );

    this._model.setPosition(originX, originY);

    this._target.classList.add('hide');
    const bindHoldingBlock = holdingBlock.setBlock.bind(holdingBlock);
    bindHoldingBlock(this._model);
    console.log(holdingBlock.getBlock().id);
  };
  onDragEnd = (e) => {
    this._target.classList.remove('hide');
    const bindHoldingBlock = holdingBlock.setBlock.bind(holdingBlock);
    bindHoldingBlock(null); //TODO: bad pattern. init 함수 만들기
  };
  // 이벤트 핸들러 부착
  addEvents = () => {
    this._target.addEventListener('dragstart', this.onDragStart);
    this._target.addEventListener('dragend', this.onDragEnd);
  };

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
// TODO: 블록 오버부터 색꼬이는 문제 해결하기
