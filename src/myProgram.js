import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import _ from 'lodash'
import {cards} from './data'
import chalk from 'chalk'
// console.log(cards)

const heroCards = ['As','Ac'];
const heroHand = heroCards.join()
const deck = _.difference(cards,heroCards)

const hands = _.flatten(deck.map(card1=>deck.map(card2=>{
    if(card1!=card2){
        return `${card1}${card2}`
    }
}))).filter(val=>val)

let database = []

hands.map((hand,ind)=>{
    let player1Cards = CardGroup.fromString(heroHand);
    let player2Cards = CardGroup.fromString(hand);
    let result = OddsCalculator.calculate([player1Cards, player2Cards]);

    let equityHero = result.equities[0].getEquity()
    let equityVillain = result.equities[1].getEquity()
    let tie = result.equities[1].getTiePercentage()
    let essential = equityVillain + tie/2
//     console.log(`Hand ${hand} ${chalk.greenBright('processed')}. Index is ${ind}
// this length is ${database.length}`)
    let s = database.sort((a,b)=>parseFloat(a.equity)<parseFloat(b.equity))
    database.length > 2 ? console.log(`Best hands so far: ${s[0].hand} with ${s[0].equity}% equity,${s[1].hand} with ${s[1].equity}% equity`) : null
    console.log(database)
    database.push({
        equity:essential,
        hand:hand
    })

})