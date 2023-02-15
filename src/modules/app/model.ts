export default class AppModel {
  private _generatedBlocks: string[];
  private _isGameOver: boolean;
  private _point: number;
  private _prevPoint: number;

  constructor() {
    this._generatedBlocks = [];
    this._isGameOver = false;
    this._point = 0;
    this._prevPoint = +(localStorage.getItem('PREV_POINT') ?? 0);
  }
  get isGameOver() {
    return this._isGameOver;
  }
  get point() {
    return this._point;
  }
  get prevPoint() {
    return this._prevPoint;
  }
  get generatedBlocks() {
    return this._generatedBlocks;
  }
  set point(newPoint: number) {
    this._point += newPoint;
  }
  addOneBlock(generatedBlockId: string) {
    this._generatedBlocks.push(generatedBlockId);
  }
  removeOneBlock(targetId: string) {
    const targetIdx = this._generatedBlocks.indexOf(targetId);
    if (targetIdx !== -1) {
      this._generatedBlocks.splice(targetIdx, 1);
    }
  }
}
