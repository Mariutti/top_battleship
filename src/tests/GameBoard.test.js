import GameBoard from '../modules/GameBoard.js';
import Ship from '../modules/Ship.js';

describe('GameBoard class', () => {
	let gb3;
	let gb10;
	beforeEach(() => {
		gb3 = new GameBoard(3);
		gb10 = new GameBoard(10);
	});

	it('class instance exists', () => {
		expect(gb3).toBeDefined();
	});

	describe('function createBoard()', () => {
		it('is defined', () => {
			expect(gb3.createBoard).toBeDefined();
		});

		it('return the board 3x3', () => {
			expect(gb3.createBoard()).toStrictEqual([
				[0, 0],
				[0, 1],
				[0, 2],
				[1, 0],
				[1, 1],
				[1, 2],
				[2, 0],
				[2, 1],
				[2, 2],
			]);
		});

		it('returns the board array 10 x 10', () => {
			expect(gb10.createBoard()).toStrictEqual([
				[0, 0],
				[0, 1],
				[0, 2],
				[0, 3],
				[0, 4],
				[0, 5],
				[0, 6],
				[0, 7],
				[0, 8],
				[0, 9],
				[1, 0],
				[1, 1],
				[1, 2],
				[1, 3],
				[1, 4],
				[1, 5],
				[1, 6],
				[1, 7],
				[1, 8],
				[1, 9],
				[2, 0],
				[2, 1],
				[2, 2],
				[2, 3],
				[2, 4],
				[2, 5],
				[2, 6],
				[2, 7],
				[2, 8],
				[2, 9],
				[3, 0],
				[3, 1],
				[3, 2],
				[3, 3],
				[3, 4],
				[3, 5],
				[3, 6],
				[3, 7],
				[3, 8],
				[3, 9],
				[4, 0],
				[4, 1],
				[4, 2],
				[4, 3],
				[4, 4],
				[4, 5],
				[4, 6],
				[4, 7],
				[4, 8],
				[4, 9],
				[5, 0],
				[5, 1],
				[5, 2],
				[5, 3],
				[5, 4],
				[5, 5],
				[5, 6],
				[5, 7],
				[5, 8],
				[5, 9],
				[6, 0],
				[6, 1],
				[6, 2],
				[6, 3],
				[6, 4],
				[6, 5],
				[6, 6],
				[6, 7],
				[6, 8],
				[6, 9],
				[7, 0],
				[7, 1],
				[7, 2],
				[7, 3],
				[7, 4],
				[7, 5],
				[7, 6],
				[7, 7],
				[7, 8],
				[7, 9],
				[8, 0],
				[8, 1],
				[8, 2],
				[8, 3],
				[8, 4],
				[8, 5],
				[8, 6],
				[8, 7],
				[8, 8],
				[8, 9],
				[9, 0],
				[9, 1],
				[9, 2],
				[9, 3],
				[9, 4],
				[9, 5],
				[9, 6],
				[9, 7],
				[9, 8],
				[9, 9],
			]);
		});
	});

	describe('function placeShip', () => {
		it('is defined', () => {
			expect(gb3.placeShip).toBeDefined();
		});

		it('receive a ship and places at the board horizontally, returning fleet coordinates on its ship', () => {
			const destroyer = new Ship('destroyer', 5);
			expect(gb10.fleet).toBeDefined();
			expect(gb10.placeShip(destroyer, [1, 1], 0)).toStrictEqual(
				gb10.occupiedPositions
			);
			expect(gb10.occupiedPositions).toStrictEqual([
				[1, 1],
				[2, 1],
				[3, 1],
				[4, 1],
				[5, 1],
			]);
		});

		it('receive a ship and places at the board vertically, returning fleet coordinates on its ship', () => {
			const carrier = new Ship('carrier', 4);
			expect(gb10.placeShip(carrier, [3, 6], 1)).toStrictEqual(
				gb10.occupiedPositions
			);
			expect(gb10.occupiedPositions).toStrictEqual([
				[3, 6],
				[3, 7],
				[3, 8],
				[3, 9],
			]);
		});

		it("don't place a ship if there's another ship on its coordinate", () => {
			const destroyer = new Ship('destroyer', 5);
			const carrier = new Ship('carrier', 4);

			gb10.placeShip(destroyer, [1, 1], 0);
			expect(gb10.placeShip(carrier, [1, 1], 1)).toStrictEqual(
				gb10.occupiedPositions
			);
			expect(gb10.occupiedPositions).toStrictEqual([
				[1, 1],
				[2, 1],
				[3, 1],
				[4, 1],
				[5, 1],
			]);
		});
	});

	describe('Function receiveAttack', () => {
		beforeEach(() => {
			const destroyer = new Ship('destroyer', 5);
			const carrier = new Ship('carrier', 4);

			gb10.placeShip(destroyer, [1, 1], 0);
			gb10.placeShip(carrier, [4, 2], 1);
		});
		it('is defined', () => {
			expect(gb10.receiveAttack).toBeDefined();
		});

		it('returns true if the attack hit a ship', () => {
			expect(gb10.receiveAttack([4, 2])).toBeTruthy();
		});

		it('returns false if the attack miss a ship', () => {
			expect(gb10.receiveAttack([6, 8])).toBeFalsy();
		});

		it("don't allow attack a place/coordinate already attacked", () => {
			// dont' permit duplicated attacks
		});

		describe('missed attacks', () => {
			it('is defined', () => {
				expect(gb10.missedAttacks).toBeDefined();
			});

			it('record only missed attacks on the board', () => {
				gb10.receiveAttack([6, 8]);
				gb10.receiveAttack([1, 1]);
				expect(gb10.missedAttacks).toStrictEqual([[6, 8]]);
				gb10.receiveAttack([9, 9]);
				expect(gb10.missedAttacks).toStrictEqual([
					[6, 8],
					[9, 9],
				]);
			});
		});

		describe('hits a ship and send a hit to the correct ship', () => {
			it('change the hitSuffered propriety of the ship hit', () => {
				expect(gb10.receiveAttack([4, 2])).toBeTruthy();
				expect(gb10.fleet[1].ship.hitSuffered).toBe(1);
			});
		});
	});
});
