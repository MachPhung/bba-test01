let playerName = "Mario";
let currentLives = 3;
const coinLevel1 = 25;
const coinLevel2 = 30;
const coinLevel3 = 45;

function calculateTotalCoins(coinLevel1, coinLevel2, coinLevel3) {
	let totalCoins = coinLevel1 + coinLevel2 + coinLevel3;
	return totalCoins;
}

let averageCoins = calculateTotalCoins(coinLevel1, coinLevel2, coinLevel3) / 3;
console.log(calculateTotalCoins(coinLevel1, coinLevel2, coinLevel3) % 3);
