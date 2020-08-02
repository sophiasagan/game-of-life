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
    case "dieHard":
      return dieHard(newGrid);
    case "thunderBird":
      return thunderBird(newGrid);
    case "queenBee":
      return queenBee(newGrid);
    case "rabbits":
      return rabbits(newGrid);
    case "glasses":
      return glasses(newGrid);
    case "castle":
      return castle(newGrid);
    case "bob":
      return bob(newGrid);
    case "gliderGun":
      return gliderGun(newGrid);
    default:
      break;
  }
};

// https://conwaylife.com/wiki/Glider
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

// https://conwaylife.com/wiki/Die_hard
export const dieHard = (golGrid) => {
  golGrid[10][17] = 1;
  golGrid[11][11] = 1;
  golGrid[11][12] = 1;
  golGrid[12][12] = 1;
  golGrid[12][16] = 1;
  golGrid[12][17] = 1;
  golGrid[12][18] = 1;

  return golGrid;
};

// https://conwaylife.com/wiki/Queen_bee
export const queenBee = (golGrid) => {
  golGrid[20][24] = 1;
  golGrid[21][23] = 1;
  golGrid[21][25] = 1;
  golGrid[22][22] = 1;
  golGrid[22][26] = 1;
  golGrid[23][23] = 1;
  golGrid[23][24] = 1;
  golGrid[23][25] = 1;
  golGrid[24][21] = 1;
  golGrid[24][22] = 1;
  golGrid[24][26] = 1;
  golGrid[24][27] = 1;

  return golGrid;
};

// https://conwaylife.com/wiki/Rabbits
export const rabbits = (golGrid) => {
  golGrid[42][31] = 1;
  golGrid[42][35] = 1;
  golGrid[42][36] = 1;
  golGrid[42][37] = 1;
  golGrid[43][31] = 1;
  golGrid[43][32] = 1;
  golGrid[43][33] = 1;
  golGrid[43][36] = 1;
  golGrid[44][32] = 1;

  return golGrid;
};

// https://conwaylife.com/wiki/Thunderbird
export const thunderBird = (golGrid) => {
  golGrid[15][14] = 1;
  golGrid[15][15] = 1;
  golGrid[15][16] = 1;
  golGrid[17][15] = 1;
  golGrid[18][15] = 1;
  golGrid[19][15] = 1;

  return golGrid;
};

// https://conwaylife.com/wiki/Snark
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

// https://conwaylife.com/wiki/Pulsar
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

// https://conwaylife.com/wiki/Gosper_glider_gun
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

// random idea
export const bob = (golGrid) => {
  golGrid[30][25] = 1;
  golGrid[30][26] = 1;
  golGrid[30][27] = 1;

  golGrid[31][25] = 1;
  golGrid[31][27] = 1;

  golGrid[32][25] = 1;
  golGrid[32][27] = 1;

  golGrid[33][26] = 1;

  golGrid[34][23] = 1;
  golGrid[34][25] = 1;
  golGrid[34][26] = 1;
  golGrid[34][27] = 1;

  golGrid[35][24] = 1;
  golGrid[35][26] = 1;
  golGrid[35][28] = 1;

  golGrid[36][26] = 1;
  golGrid[36][29] = 1;

  golGrid[37][25] = 1;
  golGrid[37][27] = 1;
  golGrid[38][25] = 1;
  golGrid[38][27] = 1;

  return golGrid;
};

// https://conwaylife.com/wiki/Glasses
export const glasses = (golGrid) => {
  golGrid[20][25] = 1;
  golGrid[20][34] = 1;

  golGrid[21][23] = 1;
  golGrid[21][24] = 1;
  golGrid[21][25] = 1;
  golGrid[21][34] = 1;
  golGrid[21][35] = 1;
  golGrid[21][36] = 1;

  golGrid[22][22] = 1;
  golGrid[22][37] = 1;

  golGrid[23][22] = 1;
  golGrid[23][25] = 1;
  golGrid[23][26] = 1;
  golGrid[23][27] = 1;
  golGrid[23][32] = 1;
  golGrid[23][33] = 1;
  golGrid[23][34] = 1;
  golGrid[23][37] = 1;

  golGrid[24][21] = 1;
  golGrid[24][22] = 1;
  golGrid[24][24] = 1;
  golGrid[24][28] = 1;
  golGrid[24][31] = 1;
  golGrid[24][35] = 1;
  golGrid[24][37] = 1;
  golGrid[24][38] = 1;

  golGrid[25][24] = 1;
  golGrid[25][28] = 1;
  golGrid[25][29] = 1;
  golGrid[25][30] = 1;
  golGrid[25][31] = 1;
  golGrid[25][35] = 1;

  golGrid[26][24] = 1;
  golGrid[26][28] = 1;
  golGrid[26][31] = 1;
  golGrid[26][35] = 1;

  golGrid[27][25] = 1;
  golGrid[27][26] = 1;
  golGrid[27][27] = 1;
  golGrid[27][32] = 1;
  golGrid[27][33] = 1;
  golGrid[27][34] = 1;

  golGrid[29][25] = 1;
  golGrid[29][26] = 1;
  golGrid[29][28] = 1;
  golGrid[29][31] = 1;
  golGrid[29][33] = 1;
  golGrid[29][34] = 1;

  golGrid[30][25] = 1;
  golGrid[30][27] = 1;
  golGrid[30][28] = 1;
  golGrid[30][31] = 1;
  golGrid[30][32] = 1;
  golGrid[30][34] = 1;

  return golGrid;
};

// random idea
export const castle = (golGrid) => {
  golGrid[21][11] = 1;
  golGrid[21][14] = 1;
  golGrid[21][17] = 1;
  golGrid[21][20] = 1;

  golGrid[22][11] = 1;
  golGrid[22][12] = 1;
  golGrid[22][13] = 1;
  golGrid[22][14] = 1;
  golGrid[22][15] = 1;
  golGrid[22][16] = 1;
  golGrid[22][17] = 1;
  golGrid[22][18] = 1;
  golGrid[22][19] = 1;
  golGrid[22][20] = 1;

  golGrid[24][11] = 1;
  golGrid[24][12] = 1;
  golGrid[24][15] = 1;
  golGrid[24][16] = 1;
  golGrid[24][19] = 1;
  golGrid[24][20] = 1;

  golGrid[25][11] = 1;
  golGrid[25][12] = 1;
  golGrid[25][15] = 1;
  golGrid[25][16] = 1;
  golGrid[25][19] = 1;
  golGrid[25][20] = 1;

  golGrid[27][11] = 1;
  golGrid[27][12] = 1;
  golGrid[27][13] = 1;
  golGrid[27][14] = 1;
  golGrid[27][15] = 1;
  golGrid[27][16] = 1;
  golGrid[27][17] = 1;
  golGrid[27][18] = 1;
  golGrid[27][19] = 1;
  golGrid[27][20] = 1;

  golGrid[28][11] = 1;
  golGrid[28][20] = 1;

  golGrid[29][13] = 1;
  golGrid[29][15] = 1;
  golGrid[29][16] = 1;
  golGrid[29][18] = 1;

  golGrid[30][12] = 1;
  golGrid[30][13] = 1;
  golGrid[30][15] = 1;
  golGrid[30][16] = 1;
  golGrid[30][18] = 1;
  golGrid[30][19] = 1;

  golGrid[32][12] = 1;
  golGrid[32][13] = 1;
  golGrid[32][15] = 1;
  golGrid[32][16] = 1;
  golGrid[32][18] = 1;
  golGrid[32][19] = 1;

  golGrid[33][12] = 1;
  golGrid[33][16] = 1;
  golGrid[33][18] = 1;

  golGrid[34][13] = 1;
  golGrid[34][15] = 1;
  golGrid[34][19] = 1;

  golGrid[35][12] = 1;
  golGrid[35][13] = 1;
  golGrid[35][15] = 1;
  golGrid[35][16] = 1;
  golGrid[35][18] = 1;
  golGrid[35][19] = 1;

  golGrid[36][13] = 1;
  golGrid[36][15] = 1;
  golGrid[36][19] = 1;

  golGrid[37][12] = 1;
  golGrid[37][13] = 1;
  golGrid[37][15] = 1;
  golGrid[37][16] = 1;
  golGrid[37][18] = 1;
  golGrid[37][19] = 1;

  golGrid[39][12] = 1;
  golGrid[39][13] = 1;
  golGrid[39][15] = 1;
  golGrid[39][16] = 1;
  golGrid[39][18] = 1;
  golGrid[39][19] = 1;

  golGrid[40][10] = 1;
  golGrid[40][13] = 1;
  golGrid[40][15] = 1;
  golGrid[40][16] = 1;
  golGrid[40][18] = 1;
  golGrid[40][21] = 1;

  golGrid[41][10] = 1;
  golGrid[41][11] = 1;
  golGrid[41][12] = 1;
  golGrid[41][19] = 1;
  golGrid[41][20] = 1;
  golGrid[41][21] = 1;

  golGrid[42][13] = 1;
  golGrid[42][14] = 1;
  golGrid[42][15] = 1;
  golGrid[42][16] = 1;
  golGrid[42][17] = 1;
  golGrid[42][18] = 1;

  golGrid[43][10] = 1;
  golGrid[43][11] = 1;
  golGrid[43][12] = 1;
  golGrid[43][19] = 1;
  golGrid[43][20] = 1;
  golGrid[43][21] = 1;

  golGrid[44][9] = 1;
  golGrid[44][13] = 1;
  golGrid[44][15] = 1;
  golGrid[44][16] = 1;
  golGrid[44][18] = 1;
  golGrid[44][22] = 1;
  golGrid[45][9] = 1;
  golGrid[45][10] = 1;
  golGrid[45][12] = 1;
  golGrid[45][13] = 1;
  golGrid[45][15] = 1;

  golGrid[45][16] = 1;
  golGrid[45][18] = 1;
  golGrid[45][19] = 1;
  golGrid[45][21] = 1;
  golGrid[45][22] = 1;

  return golGrid;
};
