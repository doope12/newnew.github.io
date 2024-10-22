const startBtn = document.querySelectorAll(".coinflip__btn");
const betInput = document.querySelector(".gamemode__input");
const coin = document.getElementById("coin");
let spinning = false;
let bet;
let betAmount = 0;

const flipCoin = () => {
	spinning = true;
	const result = Math.random() < 0.5 ? "heads" : "tails"; // get win (CT = heads, T = tails)

	coin.style.transition = "transform 6s ease-in-out"; // add animation

	// add correct class based on result
	setTimeout(() => {
		coin.classList.add(result === "heads" ? "flip-heads" : "flip-tails");
	}, 100);

	setTimeout(() => {
		checkIfPlayerWon();
	}, 6000);

	setTimeout(() => {
		spinning = false;
	}, 6500);

	takeFromBalance(result);
};

function resetCoin() {
	if (
		spinning === false &&
		betInput.value > 0 &&
		betInput.value <= parseFloat(localStorage.getItem("Balance"))
	) {
		bet = "";
		coin.style.transition = "none";
		coin.classList.remove("flip-heads", "flip-tails");

		betAmount = betInput.value;

		switch (this.id) {
			case "ct":
				bet = ct;
				break;
			case "t":
				bet = t;
				break;
		}

		setTimeout(() => {
			flipCoin();
		}, 10);
	}
}

const takeFromBalance = () => {
	const balanceAfterBet =
		parseFloat(localStorage.getItem("Balance")) - betAmount;

	localStorage.setItem("Balance", balanceAfterBet.toFixed(2) + "$");

	setBalance();
};

const checkIfPlayerWon = (winCoin) => {
	if (winCoin === "heads" && bet === ct) {
		console.log("Player won ct");
	} else if (winCoin === "tails" && bet === t) {
		console.log("Player won t");
	}
};

const addEventListeners = () => {
	startBtn.forEach((btn) => {
		btn.addEventListener("click", resetCoin);
	});
};

addEventListeners();
