import { gameMenu, handleReadyButton } from './readyButton.js';
import { handleStart } from './startButton.js';
import { handleReset } from './resetButton.js';
import { resultKey, flipCover } from './gameRun.js';

//Global DOM Variables
gameMenu.style.display = 'none';
const readyButton = document.getElementById('ready');
const start = document.getElementById('start');
const resetButton = document.getElementById('reset');

//game status tracking
let rounds = 0;
let scores = 0;

//Button Actions
readyButton.onclick = handleReadyButton;
start.addEventListener('click', handleStart);
resetButton.onclick = handleReset;

document.getElementById('1').onclick = flipCover(1);
