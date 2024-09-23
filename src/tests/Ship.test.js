import Ship from '../modules/Ship.js';

describe('Ship class', () => {
	let ship;
	beforeEach(() => {
		ship = new Ship('genericType', 3);
	});

	it('class instance exists', () => {
		expect(ship).toBeDefined();
	});

	it('object is instance of class', () => {
		expect(ship).toBeInstanceOf(Ship);
	});

	describe('method hit', () => {
		it('exists', () => {
			expect(ship.hit).toBeDefined();
		});

		it('defines a function', () => {
			expect(typeof ship.hit).toBe('function');
		});

		it('returns 1 when the ship is hit once', () => {
			expect(ship.hit()).toBe(1);
			expect(ship.hitSuffered).toBe(1);
		});

		it('returns 2 when the ship is hit twice', () => {
			expect(ship.hit()).toBe(1);
			expect(ship.hit()).toBe(2);
			expect(ship.hitSuffered).toBe(2);
		});
	});

	describe('method isSunk()', () => {
		it('exists', () => {
			expect(ship.isSunk).toBeDefined();
		});

		it('defines a function', () => {
			expect(typeof ship.isSunk).toBe('function');
		});

		it('returns false if length is greater than hits', () => {
			expect(ship.isSunk()).toBeFalsy();
		});

		it('returns true if hits are equal or greater than length', () => {
			ship.hit();
			ship.hit();
			ship.hit();
			expect(ship.isSunk()).toBeTruthy();
		});
	});
});
