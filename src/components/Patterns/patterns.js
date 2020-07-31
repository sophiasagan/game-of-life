import { createGrid } from "../utils/utils";

// Returns a new golGrid with a pattern
export const setPattern = (patternMaker) => {
  let newGrid = createGrid();
  switch (patternMaker) {
    case "pulsar":
      return pulsar(newGrid);
    case "glider":
      return glider(newGrid);
    case "gliderLeft":
      return gliderLeft(newGrid);
    case "snark":
      return snark(newGrid);
    case "gliderGun":
      return gliderGun(newGrid);
    default:
      break;
  }
};

export const glider = (golGrid) => {
  golGrid[3][1] = 1;
  golGrid[3][2] = 1;
  golGrid[3][3] = 1;
  golGrid[2][3] = 1;
  golGrid[1][2] = 1;

  return golGrid;
};

export const gliderLeft = (golGrid) => {
  golGrid[20][40] = 1;
  golGrid[20][41] = 1;
  golGrid[20][42] = 1;
  golGrid[19][40] = 1;
  golGrid[18][41] = 1;

  return golGrid;
};

export const snark = (golGrid) => {
  golGrid[1][7] = 1;
  golGrid[1][8] = 1;
  golGrid[1][12] = 1;
  golGrid[1][13] = 1;

  golGrid[2][7] = 1;
  golGrid[2][8] = 1;
  golGrid[2][11] = 1;
  golGrid[2][13] = 1;
  golGrid[2][14] = 1;
  golGrid[2][15] = 1;

  golGrid[3][11] = 1;
  golGrid[3][16] = 1;

  golGrid[4][7] = 1;
  golGrid[4][8] = 1;
  golGrid[4][9] = 1;
  golGrid[4][10] = 1;
  golGrid[4][12] = 1;
  golGrid[4][13] = 1;
  golGrid[4][16] = 1;


  golGrid[5][7] = 1;
  golGrid[5][10] = 1;
  golGrid[5][12] = 1;
  golGrid[5][14] = 1;
  golGrid[5][16] = 1;
  golGrid[5][17] = 1;

  golGrid[6][10] = 1;
  golGrid[6][12] = 1;
  golGrid[6][14] = 1;
  golGrid[6][16] = 1;

  golGrid[7][11] = 1;
  golGrid[7][12] = 1;
  golGrid[7][14] = 1;
  golGrid[7][16] = 1;

  golGrid[8][15] = 1;

  golGrid[10][1] = 1;
  golGrid[10][2] = 1;

  golGrid[11][2] = 1;
  golGrid[11][10] = 1;
  golGrid[11][11] = 1;

  golGrid[12][2] = 1;
  golGrid[12][4] = 1;
  golGrid[12][10] = 1;
  golGrid[12][11] = 1;

  golGrid[13][3] = 1;
  golGrid[13][4] = 1;

  golGrid[20][13] = 1;
  golGrid[20][14] = 1;

  golGrid[21][4] = 1;
  golGrid[21][5] = 1;
  golGrid[21][13] = 1;

  golGrid[22][3] = 1;
  golGrid[22][5] = 1;
  golGrid[22][14] = 1;
  golGrid[22][15] = 1;
  golGrid[22][16] = 1;

  golGrid[23][5] = 1;
  golGrid[23][16] = 1;
  
  return golGrid;
};

export const pulsar = (golGrid) => {
  golGrid[2][34] = 1;
  golGrid[2][35] = 1;
  golGrid[2][36] = 1;
  golGrid[2][40] = 1;
  golGrid[2][41] = 1;
  golGrid[2][42] = 1;

  golGrid[4][32] = 1;
  golGrid[4][37] = 1;
  golGrid[4][39] = 1;
  golGrid[4][44] = 1;

  golGrid[5][32] = 1;
  golGrid[5][37] = 1;
  golGrid[5][39] = 1;
  golGrid[5][44] = 1;

  golGrid[6][32] = 1;
  golGrid[6][37] = 1;
  golGrid[6][39] = 1;
  golGrid[6][44] = 1;

  golGrid[7][34] = 1;
  golGrid[7][35] = 1;
  golGrid[7][36] = 1;
  golGrid[7][40] = 1;
  golGrid[7][41] = 1;
  golGrid[7][42] = 1;

  golGrid[9][34] = 1;
  golGrid[9][35] = 1;
  golGrid[9][36] = 1;
  golGrid[9][40] = 1;
  golGrid[9][41] = 1;
  golGrid[9][42] = 1;

  golGrid[10][32] = 1;
  golGrid[10][37] = 1;
  golGrid[10][39] = 1;
  golGrid[10][44] = 1;

  golGrid[11][32] = 1;
  golGrid[11][37] = 1;
  golGrid[11][39] = 1;
  golGrid[11][44] = 1;

  golGrid[12][32] = 1;
  golGrid[12][37] = 1;
  golGrid[12][39] = 1;
  golGrid[12][44] = 1;

  golGrid[14][34] = 1;
  golGrid[14][35] = 1;
  golGrid[14][36] = 1;
  golGrid[14][40] = 1;
  golGrid[14][41] = 1;
  golGrid[14][42] = 1;

  return golGrid;
};

export const gliderGun = (golGrid) => {
  golGrid[15][5] = 1;
  golGrid[15][6] = 1;
  golGrid[16][5] = 1;
  golGrid[16][6] = 1;

  golGrid[15][14] = 1;
  golGrid[15][15] = 1;
  golGrid[16][15] = 1;
  golGrid[16][13] = 1;
  golGrid[17][13] = 1;
  golGrid[17][14] = 1;

  golGrid[17][21] = 1;
  golGrid[17][22] = 1;
  golGrid[18][21] = 1;
  golGrid[18][23] = 1;
  golGrid[19][21] = 1;

  golGrid[13][28] = 1;
  golGrid[13][29] = 1;
  golGrid[14][29] = 1;
  golGrid[14][27] = 1;
  golGrid[15][27] = 1;
  golGrid[15][28] = 1;

  golGrid[13][39] = 1;
  golGrid[13][40] = 1;
  golGrid[14][39] = 1;
  golGrid[14][40] = 1;

  golGrid[20][40] = 1;
  golGrid[20][41] = 1;
  golGrid[21][40] = 1;
  golGrid[21][42] = 1;
  golGrid[22][40] = 1;

  golGrid[25][29] = 1;
  golGrid[25][30] = 1;
  golGrid[25][31] = 1;
  golGrid[26][29] = 1;
  golGrid[27][30] = 1;

  return golGrid;
};

export const house = (golGrid) => {
  golGrid[44][10] = 1;
  golGrid[43][10] = 1;
  golGrid[42][10] = 1;
  golGrid[41][10] = 1;
  golGrid[40][10] = 1;
  golGrid[39][10] = 1;
  golGrid[38][10] = 1;
  golGrid[37][10] = 1;

  golGrid[44][18] = 1;
  golGrid[43][18] = 1;
  golGrid[42][18] = 1;
  golGrid[41][18] = 1;
  golGrid[40][18] = 1;
  golGrid[39][18] = 1;
  golGrid[38][18] = 1;
  golGrid[37][18] = 1;

  golGrid[44][16] = 1;
  golGrid[43][16] = 1;
  golGrid[42][16] = 1;
  golGrid[42][15] = 1;
  golGrid[42][14] = 1;
  golGrid[43][14] = 1;
  golGrid[44][14] = 1;

  golGrid[36][10] = 1;
  golGrid[36][9] = 1;
  golGrid[36][11] = 1;
  golGrid[36][12] = 1;
  golGrid[36][13] = 1;
  golGrid[36][14] = 1;
  golGrid[36][15] = 1;
  golGrid[36][16] = 1;
  golGrid[36][17] = 1;
  golGrid[36][18] = 1;
  golGrid[36][19] = 1;
  golGrid[35][18] = 1;
  golGrid[34][17] = 1;
  golGrid[33][16] = 1;
  golGrid[32][15] = 1;
  golGrid[31][14] = 1;
  golGrid[32][13] = 1;
  golGrid[33][12] = 1;
  golGrid[34][11] = 1;
  golGrid[35][10] = 1;

  golGrid[38][15] = 1;
  golGrid[38][16] = 1;
  golGrid[39][16] = 1;
  golGrid[39][15] = 1;

  golGrid[38][12] = 1;
  golGrid[38][13] = 1;
  golGrid[39][13] = 1;
  golGrid[39][12] = 1;

  return golGrid;
};
