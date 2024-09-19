// 1. Your ‘ships’ will be objects that include their length, the number of times they’ve been hit and whether or not they’ve been sunk.

// 2. **REMEMBER** you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.

// 3. Ships should have a `hit()` function that increases the number of ‘hits’ in your ship.

// 4. `isSunk()` should be a function that calculates whether a ship is considered sunk based on its length and the number of hits it has received.
export default class Ship {
	#shipType;
	#length;
	#hitSuffered = 0;
	#sunk;

	constructor(shipType, length) {
		this.#shipType = shipType;
		this.#length = length;
		// this.hitSuffered = 0;
		this.#sunk = this.isSunk();
	}

	get length() {
		return this.#length;
	}

	get hitSuffered() {
		return this.#hitSuffered;
	}

	hit() {
		this.#hitSuffered++;
		return this.hitSuffered;
	}

	isSunk() {
		return this.length <= this.hitSuffered;
	}
}
