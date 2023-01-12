import { distanceFromOrigin, tileSize, holdingBlock } from '..';

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

export const blockStateSetter = (
  distanceFromOriginX,
  distanceFromOriginY,
  blockElement,
  blockShape
) => {
  const bindDiffSetter = distanceFromOrigin.setter.bind(distanceFromOrigin);
  bindDiffSetter(distanceFromOriginX, distanceFromOriginY);
  holdingBlock.init(blockElement, blockShape);
};
