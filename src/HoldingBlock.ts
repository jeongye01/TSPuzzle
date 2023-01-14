import { isPlaceable } from './utils/isPlaceable';

// 싱글톤패턴
class HoldingBlock {
  private blockIsActive: boolean;
  private blockElement: HTMLDivElement;
  private blockShape: number[][];
  private blockColor: string;
  private blockTileCtn: number;
  static instance;
  constructor() {
    if (HoldingBlock.instance) return HoldingBlock.instance;
  }
  init(element: HTMLDivElement, shape: number[][]) {
    this.blockElement = element;
    this.blockShape = shape;
    this.blockColor = element.dataset.color;
    this.blockTileCtn = 0;
    this.blockShape.forEach((row) =>
      row.forEach((val) => {
        if (val) this.blockTileCtn += 1;
      })
    );
  }
  get element(): HTMLDivElement {
    return this.blockElement;
  }
  get shape(): number[][] {
    return this.blockShape;
  }
  get color(): string {
    return this.blockColor;
  }

  get tileCtn(): number {
    return this.blockTileCtn;
  }
  get isActive() {
    this.blockIsActive = isPlaceable(this.blockElement, this.blockShape);
    return this.blockIsActive;
  }
}
export const holdingBlock = new HoldingBlock();
