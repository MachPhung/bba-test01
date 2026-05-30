
let powerUp = null;
let effect = "";

if (powerUp === "mushroom") {
	effect = "Mario becomes Supper!";
} else if (powerUp === "flower") {
	effect = "Mario can shoot fireballs!";
} else if (powerUp === "star") {
	effect = "Mario is invincible!";
} else if (powerUp === null) {
	effect = "Mario is normal";
} else {
	effect = "Unknown power-up";
}


console.log(effect);
