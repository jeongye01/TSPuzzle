import { distanceFromOrigin, tileSize } from '..';
import { holdingBlock } from '../HoldingBlock';

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
