import { isPlaceable } from './utils/isPlaceable';

// 싱글톤패턴
class HoldingBlock {
  private blockIsActive: boolean;
  private blockElement: HTMLDivElement;
  private blockShape: number[][];
  static instance;
  constructor() {
    if (HoldingBlock.instance) return HoldingBlock.instance;
  }
  init(element: HTMLDivElement, shape: number[][]) {
    this.blockElement = element;
    this.blockShape = shape;
  }
  get element(): HTMLDivElement {
    return this.blockElement;
  }
  get shape(): number[][] {
    return this.blockShape;
  }
  getColor(): string {
    return this.element.dataset.color;
  }

  getTileCtn(): number {
    let result = 0;
    this.blockShape.forEach((row) =>
      row.forEach((val) => {
        if (val) result += 1;
      })
    );
    return result;
  }
  get isActive() {
    this.blockIsActive = isPlaceable(this.blockElement, this.blockShape);
    return this.blockIsActive;
  }
}
export const holdingBlock = new HoldingBlock();
