import {CardGroup, OddsCalculator} from 'poker-odds-calculator';
import fs from 'fs'
import Storage from 'node-storage'
var store = new Storage('data.json');

var sort = (a,b)=>{if(a>b)return 1;if(b>a)return -1;return 0}

var getKey = (hand1, hand2)=>{
    let h1 = hand1.match(/.{1,2}/g).sort(sort).join('') 
    let h2 = hand2.match(/.{1,2}/g).sort(sort).join('')
    // console.log(h1+h2)
    return (
        h1 + 
        h2
    )
}
var calculateResult = (hand1, hand2) =>{
    const player1Cards = CardGroup.fromString(hand1);
    const player2Cards = CardGroup.fromString(hand2);
    const result = OddsCalculator.calculate([player1Cards, player2Cards]);
    let equityHero = result.equities[0].getEquity()
    let equityVillain = result.equities[1].getEquity()
    let tie = result.equities[1].getTiePercentage()
    return {
        equityHero,
        equityVillain,
        tie
    }
}
const getResult = (hand1, hand2)=>{
    let key = getKey(hand1,hand2)
    let result = store.get(key)
    if(result){
        return result
    } else {
        // try reverse key
        let reverseKey = getKey(hand2,hand1)
        result = store.get(reverseKey)
        if(result){
            return {
                equityHero: result.equityVillain,
                equityVillain: result.equityHero,
                tie
            }
        } else {
            result = calculateResult(hand1,hand2)
            store.put(key,result)
            return result
        }



        
    }
}

export {
    getResult
}