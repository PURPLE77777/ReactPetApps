export interface Film {
	id: number;
	name: string;
	img: string;
	date: number;
	quote: string;
	country: string[];
	director: string;
	genre: string[];
	quality: string;
	translaters: string[];
	age: number;
	duration: number;
	description: string;
	actors: string[];
}

export interface Episode {
	id: number;
	name: string;
	date: number;
	season: number;
	episode: number;
	quote: string;
	translater: string;
	duration: number;
}
