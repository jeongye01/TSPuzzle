export default class Component {
  _target;
  _model;
  _view;

  constructor(target, model, view) {
    this._target = target;
    this._model = model;
    this._view = view;

    this.init();
    this.addEvents();
    this.initChildren();
  }

  setState = (newState) => {
    this._model.setState(newState);
    this.render(this._model.get());
  };

  render = (state) => {
    this._view.render(state);
  };

  // component 렌더링 직전 처리할 비즈니스 로직
  init = () => {};

  // 이벤트 핸들러 부착
  addEvents = () => {};

  // 자식 컴포넌트 생성
  initChildren = () => {};
}
