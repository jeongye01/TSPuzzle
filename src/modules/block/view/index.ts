export default class BlockView {
  private _target: () => Element;
  constructor(target: string) {
    this._target = () => document.querySelector(target);
  }

  template = (state) => {
    return `<div>${state.value}</div>`;
  };

  render = (state) => {
    this._target().innerHTML = this.template(state);
  };
}
