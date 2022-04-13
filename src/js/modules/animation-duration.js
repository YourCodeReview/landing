const msDur = {
  1: 150,
  2: 300,
  3: 500,
  4: 1000
};
const sDur = {};

for (let value in msDur) {
  sDur[value] = msDur[value] / 1000;
}

export { sDur, msDur };