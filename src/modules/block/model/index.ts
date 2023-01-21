export default class BlockModel {
  private _shape: number[][];
  private _color: string;
  private _isActive: boolean;

  constructor(shape: number[][], color: string) {
    this._shape = shape;
    this._color = color;
  }

  get shape(): number[][] {
    return this._shape;
  }
  get color(): string {
    return this._color;
  }
  set isActive(activeState: boolean) {
    this._isActive = activeState;
  }
  get isActive() {
    return this._isActive;
  }
  getTileCtn(): number {
    let result = 0;
    this._shape.forEach((row) =>
      row.forEach((val) => {
        if (val) result += 1;
      })
    );
    return result;
  }
}
