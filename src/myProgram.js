import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import _ from 'lodash'
import {cards} from './data'
import chalk from 'chalk'
import {getResult} from './smartCalculator'
// console.log(cards)

const heroCards = ['9d','Td'];

const heroHand = heroCards.join('')
const deck = _.difference(cards,heroCards)

const hands = _.uniq(_.flatten(deck.map(card1=>deck.map(card2=>{
    if(card1!=card2){
        
        return [card1,card2].sort((a,b)=>a-b).join('')
    }
}))).filter(val=>val))

let database = []
let startTime = new Date().getTime()
// hands.forEach((hand,ind)=>{
for(let i = 0;i<hands.length;i++){
    if(new Date().getTime() - startTime > 1000 * 60 *5){
        break;
    } 

    

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
console.log(s1.slice(0,10))