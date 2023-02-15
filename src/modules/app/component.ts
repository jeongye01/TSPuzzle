import { boardState } from '../..';
import Board from '../board/component';
import BoardModel from '../board/model';
import BoardView from '../board/view';
import AppView from './view';

export default class App {
  private _model: any; // TODO: any 빼기
  private _view: any; // TODO: any 빼기

  constructor(target: HTMLElement) {
    // this._target = target;
    //this._model = model;
    this._view = new AppView('#root');

    this.init();
    this.render();

    this.initChildren();
  }

  render = () => {
    this._view.render();
  };

  // component 렌더링 직전 처리할 비즈니스 로직
  init = () => {};

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
