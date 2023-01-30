import { tileSize } from '../../..';

export const calcBlockOriginPos = (
  offsetX,
  offsetY,
  blockShape: number[][]
) => {
  const halfTileSize = tileSize.value / 2;
  const originX = offsetX - blockShape[0].length * halfTileSize;
  const originY = offsetY - blockShape.length * halfTileSize;
  return { originX, originY };
};
