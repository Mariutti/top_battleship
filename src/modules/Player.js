/**
 * 1- Create a Player class/factory.
 *
 *  There will be two types of players in the game, ‘real’ players and ‘computer’ players.
 *
 *  Each player object should contain its own gameboard.
 * */

import GameBoard from './GameBoard.js';

export default class Player {
	#gameBoard;
	#playerType;

	constructor() {
		this.#gameBoard = new GameBoard(10);
		this.playerType = undefined;
	}

	set playerType(type) {
		switch (type) {
			case 'computer':
				this.#playerType = 0;
				break;
			case 'real':
				this.#playerType = 1;
				break;

			default:
				break;
		}
	}

	get playerType() {
		return this.#playerType;
	}

	get gameBoard() {
		return this.#gameBoard;
	}
}
