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
	#fleet;
	constructor(size) {
		this.#size = size;
		this.#board = this.createBoard();
		this.#fleet = [];
	}

	get size() {
		return this.#size;
	}

	get board() {
		return this.#board;
	}

	get fleet() {
		return this.#fleet;
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
		const coordinatesToInclude = [];
		const [xInit, yInit] = initPosition;
		if (direction === 0) {
			for (let i = xInit; i < xInit + ship.length; i++) {
				let arr = [i, yInit];
				this.compareArr(arr);
				coordinatesToInclude.push(arr);
			}
		} else if (direction === 1) {
			for (let i = yInit; i < yInit + ship.length; i++) {
				let arr = [xInit, i];
				this.compareArr(arr);
				coordinatesToInclude.push(arr);
			}
		}

		this.#fleet.push({ ship, coordinates: coordinatesToInclude });
		return this.fleet;
	}

	compareArr(array1) {
		this.fleet.forEach((ship) => {
			ship.coordinates.forEach((coordArr) => {
				if (
					array1.length === coordArr.length &&
					array1.every(function (value, index) {
						return value === coordArr[index];
					})
				) {
					throw new Error("Can't place a ship over another one");
				}
			});
		});
	}
}
