const startBtn = document.querySelector("#flip");
const betInput = document.querySelector(".gamemode__input");
const coin = document.getElementById("coin");
let spinning = false;

const flipCoin = () => {
	if (
		spinning === false &&
		betInput.value > 0 &&
		betInput.value <= parseFloat(localStorage.getItem("Balance"))
	) {
		spinning = true;
		const result = Math.random() < 0.5 ? "heads" : "tails"; // get win (CT = heads, T = tails)
		console.log(result);

		coin.style.transition = "transform 8s ease-in-out"; // Dodanie płynnej animacji

		// Resetowanie klasy, aby umożliwić ponowny rzut
		coin.classList.remove("flip-heads", "flip-tails");

		// Dodanie odpowiedniej klasy w zależności od wyniku
		setTimeout(() => {
			coin.classList.add(result === "heads" ? "flip-heads" : "flip-tails");
		}, 100); // Małe opóźnienie dla lepszego efektu

		setTimeout(() => {
			resetCoin();
		}, 8500);
	}
};

const resetCoin = () => {
	spinning = false;
};

const addEventListeners = () => {
	startBtn.addEventListener("click", flipCoin);
};

addEventListeners();
