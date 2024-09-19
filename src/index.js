import Ship from './modules/Ship.js';

const h3 = document.createElement('h3');
const destroyer = new Ship('Destroyer', 5);

h3.innerText = 'h3 gerado por js Teste';
h3.innerText = destroyer.shipType;

h3.style.color = 'blue';

document.body.append(h3);
