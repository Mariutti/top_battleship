/**
 * Create a `Gameboard` class/factory.
 *
 * 1. Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on `console.log` or DOM methods to make sure your code is doing what you expect it to.
 *
 * 2. Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
 *
 * 3. Gameboards should have a `receiveAttack` function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
 *
 * 4. Gameboards should keep track of missed attacks so they can display them properly.
 *
 * 5. Gameboards should be able to report whether or not all of their ships have been sunk.
 * */
export default class GameBoard {
	#size;
	#board;
	constructor(size) {
		this.#size = size;
		this.#board = this.createBoard();
	}

	get size() {
		return this.#size;
	}

	get board() {
		return this.#board;
	}

	createBoard() {
		let board = [];
		for (let i = 0; i < this.size; i++) {
			for (let j = 0; j < this.size; j++) {
				board.push([i, j]);
			}
		}
		return board;
	}

	placeShip(ship, initPosition, direction) {
		const [x, y] = initPosition;
		// 0 = horizontal
		// 1 = vertical
		if (direction === 0) {
			const shipStart = x;
			const shipEnd = x + ship.length;
			const yShip = y;
		}
	}
}
