import { Value, Suit, Card } from "./types";

export function RandomCardGenerator() {
	const suit = Math.floor(Math.random() * 4);
	const value = Math.floor(Math.random() * 13);

	const [suitName] =
		Object.entries(Suit).find(([key, val]) => val === suit) ?? [];
	const [valueName] =
		Object.entries(Value).find(([key, val]) => val === value) ?? [];

	const randomCard: Card = { suit: suit, value: value };

	console.log(`Your card is ${valueName} of ${suitName}!`);
	console.log(randomCard);

	return randomCard;
}

RandomCardGenerator();
