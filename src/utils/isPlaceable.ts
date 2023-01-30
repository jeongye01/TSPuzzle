import { boardState } from '..';

// 들어갈 공간이 한 군데라도 있으면 true
export const isPlaceable = (
  blockElement: HTMLElement,
  blockShape: number[][],
  blockColor: string
) => {
  const boardSize = boardState.length;
  const tiles = blockElement.getElementsByClassName('block__tile');
  for (let x = 0; x <= boardSize - blockShape[0].length; x++) {
    for (let y = 0; y <= boardSize - blockShape.length; y++) {
      let tmp = true;
      for (let bx = 0; bx < blockShape[0].length; bx++) {
        for (let by = 0; by < blockShape.length; by++) {
          // 겹치는 공간이 있음. -> 배치할 수 없음.
          if (boardState[y + by][x + bx] && blockShape[by][bx]) {
            // console.log(boardState, '보드상태');
            /* console.log(
              boardState[y + by][x + bx],
              blockShape[by][bx],
              y + by,
              x + by,
              x,
              y,
              '못채움'
            );*/
            tmp = false;
          }
        }
      }
      if (tmp) {
        // 배치할 공간을 찾음
        console.log(x, y, 'break', blockColor);
        Array.prototype.forEach.call(tiles, (tile) => {
          //  console.log(result);
          tile.style.backgroundColor = `${blockColor}`;
        });
        return true;
      }
    }
  }

  // console.log(tiles);

  Array.prototype.forEach.call(tiles, (tile) => {
    //  console.log(result);
    tile.style.backgroundColor = 'gray';
  });
  // console.log(blockElement.classList);
  // blockElement.setIsPlaceable(result);

  console.log(
    boardState,
    boardSize - blockShape[0].length,
    blockShape[0].length,
    boardSize - blockShape.length,
    blockShape.length
  );
  for (let x = 0; x <= boardSize - blockShape[0].length; x++) {
    for (let y = 0; y <= boardSize - blockShape.length; y++) {
      let tmp = true;
      for (let bx = 0; bx < blockShape[0].length; bx++) {
        for (let by = 0; by < blockShape.length; by++) {
          // 겹치는 공간이 있음. -> 배치할 수 없음.
          console.log(y + by, x + bx, x, y);
          if (boardState[y + by][x + bx] && blockShape[by][bx]) {
            // console.log(boardState, '보드상태');
            // console.log(y + by, x + bx, x, y, '못채움');
            tmp = false;
          }
        }
      }
      if (tmp) {
        // 배치할 공간을 찾음
        console.log(x, y, 'break');
        return true;
      }
    }
  }

  return false;
};
