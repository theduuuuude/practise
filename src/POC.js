

import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import _ from 'lodash'
import chalk from 'chalk'
let startTime = new Date().getTime()
const heroCards = ['As','Ac'].join();
const villainCards = ['5s','6s'].join()

const player1Cards = CardGroup.fromString(heroCards);
const player2Cards = CardGroup.fromString(villainCards);
const board = CardGroup.fromString('KsKcKdQdQc')
const result = OddsCalculator.calculate([player1Cards, player2Cards]);
console.log(result)
console.log(`${new Date().getTime() - startTime} milliseconds elapsed.`)

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

${new Date().getTime() - startTime} milliseconds elapsed.
`)