import GameBoard from '../modules/GameBoard.js';
import Player from '../modules/Player.js';

describe('Player class', () => {
	let p1;
	beforeEach(() => {
		p1 = new Player();
	});

	it('class instance exists', () => {
		expect(p1).toBeDefined();
	});

	it('object is instance of class Player', () => {
		expect(p1).toBeInstanceOf(Player);
	});

	it('real player - choose the right type when instanced', () => {
		p1.playerType = 'real';
		expect(p1.playerType).toBe(1);
	});

	it('computer player - choose the right type when instanced', () => {
		p1.playerType = 'computer';
		expect(p1.playerType).toBe(0);
	});

	it('instances a game board for each player', () => {
		expect(p1.gameBoard).toBeDefined();
		expect(p1.gameBoard).toBeInstanceOf(GameBoard);
		expect(p1.gameBoard.size).toBe(10);
	});
});
