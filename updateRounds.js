let rounds = 0;
let scores = 0;

const resetAllStatus = () => {
  rounds = 0;
  scores = 0;
};

const updateRounds = () => {
  rounds++;
};

const updateScores = () => {
  scores++;
};

export { resetAllStatus, updateRounds, updateScores };
