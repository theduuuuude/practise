import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import _ from 'lodash'
import {cards} from './data'
import chalk from 'chalk'
import {getResult} from './smartCalculator'
// console.log(cards)
import print from './print'
// const heroCards = ['9d','Td'];
const heroCards = ['Ad','Kd'];

const heroHand = heroCards.join('')
const deck = _.difference(cards,heroCards)
var sort = (a,b)=>{if(a>b)return 1;if(b>a)return -1;return 0}

const hands = _.uniq(_.flatten(deck.map(card1=>deck.map(card2=>{
    if(card1!=card2){
        
        return [card1,card2].sort(sort).join('')
    }
}))).filter(val=>val))

let database = []
let startTime = new Date().getTime()
// hands.forEach((hand,ind)=>{
for(let i = 0;i<hands.length;i++){
    if(new Date().getTime() - startTime > 1000 * 60 * 2){
        break;
    } 

    console.log(`Hand ${chalk.magentaBright(i)} out of ${chalk.greenBright(hands.length)}`)
    

    let hand = hands[i]
    let result = getResult(heroHand,hand)

    let essential = result.equityVillain + result.tie/2
    
    database.push({
        equity:essential,
        hand:hand
    })
    let s = database.sort((a,b)=>b.equity-a.equity)
    // database.length > 2 ? console.log(`Best hands so far: ${s[0].hand} with ${s[0].equity}% equity,${s[1].hand} with ${s[1].equity}% equity`) : null
}
let s1 = database.sort((a,b)=>b.equity-a.equity)
s1 = s1.slice(0,30)

// console.log(print('AhKd'))
console.log(`
Best hands against ${chalk.bold(print(heroHand))}:`)
s1.forEach(value=>{
    console.log(`${chalk.bold(print(value.hand))} with ${chalk.bold(value.equity)}% equity.`)
})