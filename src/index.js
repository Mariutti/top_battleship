import GameBoard from './modules/GameBoard.js';
import Ship from './modules/Ship.js';
import './css/style.css';

const h3 = document.createElement('h3');
const destroyer = new Ship('Destroyer', 5);

h3.innerText = 'h3 gerado por js Teste';
h3.innerText = destroyer.shipType;

h3.style.color = 'blue';

document.body.append(h3);

const myBoard = new GameBoard(10);

const gameArea = document.createElement('div');
gameArea.className = 'gameArea';

const boardDiv = document.createElement('div');
boardDiv.className = 'boardDiv';

for (let i = 0; i < myBoard.size; i++) {
	const horizontalLine = document.createElement('div');
	horizontalLine.className = 'horizontalLine';
	for (let i = 0; i < myBoard.size; i++) {
		const boardTile = document.createElement('div');
		boardTile.className = 'boardTile';
		horizontalLine.append(boardTile);
	}
	boardDiv.append(horizontalLine);
}

gameArea.append(boardDiv);
document.body.append(gameArea);
