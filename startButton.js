//Start button initializing and set colors
const start = document.getElementById('start');
const resetButton = document.getElementById('reset');
const readyStart = document.getElementById('readyStart');

//Color selections
const colorSelection = ['yellow', 'orange', 'black', 'green', 'purple', 'blue'];

//get a random index <= maxNum
const getRandomNum = (maxNum) => {
  return Math.floor(Math.random() * maxNum);
};

//get an array with random color positions
const selectColor = () => {
  let colorArray = [];
  let colors = colorSelection.concat(colorSelection);
  let randomIndex;
  while (colors.length > 0) {
    randomIndex = getRandomNum(colors.length);
    colorArray.push(colors[randomIndex]);
    colors.splice(randomIndex, 1);
  }
  return colorArray;
};

//set color to a position
const setColor = (tdIndex, color) => {
  document.getElementById(tdIndex).style.backgroundColor = color;
};

const setRandomColors = () => {
  let ColorArray = selectColor();
  for (let i = 0; i < 12; i++) {
    setColor(i, ColorArray[i]);
  }
};

const delayCover = () => {
  let flipping = setTimeout(() => {
    for (let i = 0; i < 12; i++) {
      setColor(i, 'turquoise');
    }
  }, 10000);
  resetButton.addEventListener('click', () => {
    clearTimeout(flipping);
  });
};

const hideStartAfterclick = () => {
  start.style.display = 'none';
};

const readyStartScreen = (x) => {
  setTimeout(() => {
    readyStart.style.display = 'block';
  }, x);
  setTimeout(() => {
    readyStart.innerHTML = 'Start!';
  }, x + 1000);
  setTimeout(() => {
    readyStart.style.display = 'none';
  }, x + 2000);
};

function handleStart(callback) {
  hideStartAfterclick();
  setRandomColors();
  delayCover();
  readyStartScreen(10000);
}

export { setColor, selectColor, setRandomColors, handleStart };
