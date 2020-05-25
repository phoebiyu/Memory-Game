//Ready Button on click hides game rules and shows game menu

const gameMenu = document.getElementById('gameMenu');
const gameRules = document.getElementById('gameRules');

const handleReadyButton = () => {
  gameRules.style.display = 'none';
  gameMenu.style.display = 'flex';
};

export { gameMenu, handleReadyButton };
