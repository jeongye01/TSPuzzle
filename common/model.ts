export default class Model {
  _state;

  constructor(state) {
    this._state = state;
  }

  setState = (newState) => {
    this._state = { ...this._state, ...newState };
  };

  getState = (key) => this._state[key];

  get = () => this._state;
}
