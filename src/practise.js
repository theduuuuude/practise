// poker

// philosophy: aces are best
// then one combo is gonna be best against aces
// then one hand is gonna be best against that hand
// pairs show up in different amounts from suited cards

// just calculate preflop first..?
// and all possible combinations?

import {CardGroup, OddsCalculator} from 'poker-odds-calculator';

const player1Cards = CardGroup.fromString('JhJs');
const player2Cards = CardGroup.fromString('JdQd');
const board = CardGroup.fromString('7d9dTs');

// const result = OddsCalculator.calculate([player1Cards, player2Cards], board);
const result = OddsCalculator.calculate([player1Cards, player2Cards]);

console.log(`Player #1 - ${player1Cards} - ${result.equities[0].getEquity()}%`);
console.log(`Player #2 - ${player2Cards} - ${result.equities[1].getEquity()}%`);