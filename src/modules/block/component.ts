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
    console.log(this._target, this._model, this._view, 'render');
    this._view.render(this._model.color, this._model.shape);
  };

  // component 렌더링 직전 처리할 비즈니스 로직
  init = () => {};

  onDragStart = (e) => {
    console.log('for hide1');
    const { originX, originY } = calcBlockOriginPos(
      e.offsetX,
      e.offsetY,
      this._model.shape
    );
    console.log('for hide2', this._model);
    this._model.setPosition(originX, originY);
    console.log(this._target, 'for hide');
    this._target.classList.add('hide');
    const bindHoldingBlockSetId = holdingBlock.setBlock.bind(holdingBlock);
    bindHoldingBlockSetId(this._target.id);
  };
  onDragEnd = (e) => {
    this._target.classList.remove('hide');
    const bindHoldingBlockSetId = holdingBlock.setBlock.bind(holdingBlock);
    bindHoldingBlockSetId(null); //TODO: bad pattern. init 함수 만들기
  };
  // 이벤트 핸들러 부착
  addEvents = () => {
    this._target.addEventListener('dragstart', this.onDragStart);
    this._target.addEventListener('dragend', this.onDragEnd);
  };

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
