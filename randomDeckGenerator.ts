import { Card, organisedDeck } from "./types";

export function RandomDeckGenerator(deck: Array<Card>) {
	var randomDeck = deck;
	var i = randomDeck.length,
		j: number,
		temp: Card;

	while (--i > 0) {
		j = Math.floor(Math.random() * (i + 1));
		temp = randomDeck[i];
		randomDeck[i] = randomDeck[j];
		randomDeck[j] = temp;
	}

	console.log(randomDeck);
	return randomDeck;
}
RandomDeckGenerator(organisedDeck);
