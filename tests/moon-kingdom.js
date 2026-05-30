// Bai 1
function createCharacter(name, level, health) {
	return {
		name: name,
		level: level,
		health: health,
	};
}

const characters = [
	createCharacter("Luna", 5, 500),
	createCharacter("Sol", 3, 1000),
	createCharacter("Stella", 4, 200),
];

const updateCharacters = characters.map((character) => ({
	name: character.name.toUpperCase(),
	level: character.level * 2,
	health: character.health * 3,
}));

console.log(updateCharacters);

let possibleWinners = updateCharacters.filter((character) => character.health > 1000);
console.log(possibleWinners);

// Bai 2

function printLeaderboard(name, score) {
  return {
    name: name,
    score: score,
  };
}

const players = [
  { name: "Mario", score: 1000 },
  { name: "Luigi", score: 900 },
  { name: "Peach", score: 850 },
  { name: "Yoshi", score: 800 },
  { name: "Phong", score: 500 }
];

const rankedPlayers = players.sort((a, b) => b.score - a.score);

console.log(rankedPlayers);


const medals = ["🥇", "🥈", "🥉"];
rankedPlayers.forEach((user, index) => {
  const rank = index + 1;
  const medal = medals[index] || "  ";
  console.log(`${medal} ${rank}. ${user.name} - ${user.score} pts`);
});





