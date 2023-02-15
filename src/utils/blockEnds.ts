export const getUpEnd = (y, rowLength) =>
  y - Math.trunc(rowLength / 2) + (rowLength % 2 === 0 ? 1 : 0);
export const getDownEnd = (y, rowLength) => y + rowLength - 1;
export const getLeftEnd = (x, colLength) => x - Math.trunc(colLength / 2);
export const getRightEnd = (x, colLength) => x + colLength - 1;
