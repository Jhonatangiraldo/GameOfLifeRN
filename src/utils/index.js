export const fillArray = (size) => {
  const array = Array.from(new Array(size)).map(i => new Array(size));
  for (let i = 0; i < size; i += 1) {
    for (let x = 0; x < size; x += 1) {
      array[i][x] = false;
    }
  }
  return array;
};

export const setInitialLife = (grids) => {
  grids[0][0] = true;
  grids[0][1] = true;
  grids[1][0] = true;
  grids[1][3] = true;
  grids[2][1] = true;
  grids[2][2] = true;
  return grids;
};
