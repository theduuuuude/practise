

import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import _ from 'lodash'
import chalk from 'chalk'

const heroCards = ['As','Ac'].join();
const villainCards = ['5s','6s'].join()

const player1Cards = CardGroup.fromString(heroCards);
const player2Cards = CardGroup.fromString(villainCards);

const result = OddsCalculator.calculate([player1Cards, player2Cards]);
const equityHero = result.equities[0].getEquity()
const equityVillain = result.equities[1].getEquity()
const tie = result.equities[1].getTiePercentage()
let essential = equityHero + tie/2
console.log(`
${chalk.bold('Poker odds')}
Equity hero: ${chalk.green(equityHero)}
Equity villain: ${chalk.redBright(equityVillain)}
Tie: ${chalk.yellow(tie)}
Essentially: ${chalk.magenta(essential)}
`)