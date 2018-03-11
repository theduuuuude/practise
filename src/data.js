import _ from 'lodash'

const ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']
const suits = ['h','d','s','c']

const cards = _.flatten(ranks.map(rank=>suits.map(suit=>`${rank}${suit}`)))

export {cards}