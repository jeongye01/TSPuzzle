export default class View {
  _target;

  constructor(target) {
    this._target = () => document.querySelector(target);
  }

  template = (state) => {
    return `<div>${state.value}</div>`;
  };

  render = (state) => {
    this._target().innerHTML = this.template(state);
  };
}
