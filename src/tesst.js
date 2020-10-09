// hardcoeded test data
const cards = [
	{
		name: "bulbasaur",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		matched: false,
		flipped: false,
		id: 1,
	},
	{
		name: "charmander",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		matched: false,
		flipped: false,
		id: 2,
	},
	{
		name: "squirtle",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		matched: false,
		flipped: false,
		id: 3,
	},
	{
		name: "caterpie",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
		matched: false,
		flipped: false,
		id: 4,
	},
	{
		name: "weedle",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
		matched: false,
		flipped: false,
		id: 5,
	},
	{
		name: "pidgey",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		matched: false,
		flipped: false,
		id: 6,
	},
	{
		name: "rattata",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
		matched: false,
		flipped: false,
		id: 7,
	},
	{
		name: "spearow",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
		matched: false,
		flipped: false,
		id: 8,
	},
	{
		name: "ekans",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
		matched: false,
		flipped: false,
		id: 9,
	},
	{
		name: "pikachu",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		matched: false,
		flipped: false,
		id: 10,
	},
	{
		name: "sandshrew",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
		matched: false,
		flipped: false,
		id: 11,
	},
	{
		name: "clefairy",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
		matched: false,
		flipped: false,
		id: 12,
	},
	{
		name: "vulpix",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
		matched: false,
		flipped: false,
		id: 13,
	},
	{
		name: "jigglypuff",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
		matched: false,
		flipped: false,
		id: 14,
	},
	{
		name: "zubat",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
		matched: false,
		flipped: false,
		id: 15,
	},
	{
		name: "oddish",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
		matched: false,
		flipped: false,
		id: 16,
	},
	{
		name: "paras",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
		matched: false,
		flipped: false,
		id: 17,
	},
	{
		name: "venonat",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
		matched: false,
		flipped: false,
		id: 18,
	},
	{
		name: "diglett",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
		matched: false,
		flipped: false,
		id: 19,
	},
	{
		name: "meowth",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
		matched: false,
		flipped: false,
		id: 20,
	},
	{
		name: "bulbasaur",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
		matched: false,
		flipped: false,
		id: 21,
	},
	{
		name: "charmander",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
		matched: false,
		flipped: false,
		id: 22,
	},
	{
		name: "squirtle",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
		matched: false,
		flipped: false,
		id: 23,
	},
	{
		name: "caterpie",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
		matched: false,
		flipped: false,
		id: 24,
	},
	{
		name: "weedle",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
		matched: false,
		flipped: false,
		id: 25,
	},
	{
		name: "pidgey",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
		matched: false,
		flipped: false,
		id: 26,
	},
	{
		name: "rattata",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
		matched: false,
		flipped: false,
		id: 27,
	},
	{
		name: "spearow",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
		matched: false,
		flipped: false,
		id: 28,
	},
	{
		name: "ekans",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
		matched: false,
		flipped: false,
		id: 29,
	},
	{
		name: "pikachu",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
		matched: false,
		flipped: false,
		id: 30,
	},
	{
		name: "sandshrew",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
		matched: false,
		flipped: false,
		id: 31,
	},
	{
		name: "clefairy",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
		matched: false,
		flipped: false,
		id: 32,
	},
	{
		name: "vulpix",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
		matched: false,
		flipped: false,
		id: 33,
	},
	{
		name: "jigglypuff",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
		matched: false,
		flipped: false,
		id: 34,
	},
	{
		name: "zubat",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
		matched: false,
		flipped: false,
		id: 35,
	},
	{
		name: "oddish",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
		matched: false,
		flipped: false,
		id: 36,
	},
	{
		name: "paras",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
		matched: false,
		flipped: false,
		id: 37,
	},
	{
		name: "venonat",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
		matched: false,
		flipped: false,
		id: 38,
	},
	{
		name: "diglett",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
		matched: false,
		flipped: false,
		id: 39,
	},
	{
		name: "meowth",
		sprite:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
		matched: false,
		flipped: false,
		id: 40,
	},
];

// This shuffles the cards every time.
export default cards.sort(() => Math.random() - 0.5);
