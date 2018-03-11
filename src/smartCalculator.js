import {CardGroup, OddsCalculator} from 'poker-odds-calculator';

var smartCalculator = (input)=>{
    var data = localStorage.getItem("myData");
    data.indexOf(input)
}


const heroCards = ['As','Ac'].join();
const villainCards = ['5s','6s'].join()

const player1Cards = CardGroup.fromString(heroCards);
const player2Cards = CardGroup.fromString(villainCards);

const result = OddsCalculator.calculate([player1Cards, player2Cards]);