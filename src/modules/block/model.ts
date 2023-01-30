type Position = {
  x: number;
  y: number;
};
export default class BlockModel {
  private _shape: number[][];
  private _color: string;
  private _id: string;
  private _position: Position = { x: 0, y: 0 };
  private _isActive: boolean;

  constructor(shape: number[][], color: string, id: string) {
    this._shape = shape;
    this._color = color;
    this._id = id;
  }

  get shape(): number[][] {
    return this._shape;
  }
  get color(): string {
    return this._color;
  }
  get id(): string {
    return this._id;
  }
  set isActive(activeState: boolean) {
    this._isActive = activeState;
  }
  setPosition(originX: number, originY: number) {
    this._position.x = originX;
    this._position.y = originY;
  }
  get position() {
    return this._position;
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
