const rouletteBox = document.querySelector(".roulette__items");
const lastDropsBox = document.querySelector(".roulette__lastdrops-box");
const timerLine = document.querySelector(".roulette__timerbox-line");
const timerText = document.querySelector(".roulette__timerbox-time");
const timeForStart = 15000;
const timeForRestart = 14950;
let dropOrder = -1;
let timer = 15000;

const startTimer = () => {
	let seconds = Math.floor(timer / 1000);
	let milliseconds = (timer % 1000) / 10;
	milliseconds = milliseconds.toString().padStart(2, "0");

	timerText.textContent = `${seconds}:${milliseconds}s`;

	if (timer > 0) {
		timer -= 10;
	} else {
		clearInterval(timerInterval);
		timerText.textContent = "0:00s"; // Wyzerowanie licznika po zakończeniu
		return;
	}
};

const timerInterval = setInterval(startTimer, 10);

const addLineAnim = () => {
	timerLine.classList.add("roulette-timer");
};

const startRoulette = () => {
	const howStrongSpin = Math.floor(Math.random() * 7400 - 14800);
	rouletteBox.style.transition = "left 5s cubic-bezier(0,0,0,.99)";
	rouletteBox.style.left = `${howStrongSpin}px`;
	timerLine.classList.remove("roulette-timer");

	const intervalId = setInterval(() => {
		const redLineX = document
			.querySelector(".roulette__middle-point")
			.getBoundingClientRect().x;

		function updateClosestItemScale() {
			const items = document.querySelectorAll(".roulette__item");
			let closestItem = null;
			let closestDistance = Infinity;

			items.forEach((item) => {
				item.style.fontSize = "2rem";
			});

			items.forEach((item) => {
				const itemCenterX =
					item.getBoundingClientRect().x + item.offsetWidth / 2;
				const distance = Math.abs(itemCenterX - redLineX);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestItem = item;
				}
			});

			if (closestItem) {
				closestItem.style.fontSize = "2.4rem";
			}
		}

		updateClosestItemScale();
	}, 100);

	setTimeout(() => {
		clearInterval(intervalId); // Zatrzymaj dynamiczne skalowanie po zakończeniu animacji

		const redLineX = document
			.querySelector(".roulette__middle-point")
			.getBoundingClientRect().x;

		function getWinningItem() {
			const items = document.querySelectorAll(".roulette__item");
			let closestItem = null;
			let closestDistance = Infinity;

			items.forEach((item) => {
				const itemCenterX =
					item.getBoundingClientRect().x + item.offsetWidth / 2;
				const distance = Math.abs(itemCenterX - redLineX);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestItem = item;
				}
			});

			return closestItem;
		}

		const winningItem = getWinningItem();
		if (winningItem) {
			if (winningItem.classList.contains("roulette__item--green")) {
				console.log("Green Drop");
			} else if (winningItem.classList.contains("roulette__item--red")) {
				console.log("Red Drop");
			} else if (winningItem.classList.contains("roulette__item--black")) {
				console.log("Black Drop");
			}
			createItemToLastDrops(winningItem);
			startCountingToNewStart();
			addLineAnim();
			timer = 15000;
			const timerInterval = setInterval(startTimer, 10);
		}
	}, 5000);
};

const startCountingToNewStart = () => {
	setTimeout(() => {
		resetAnimation();
	}, timeForRestart);

	setTimeout(() => {
		startRoulette();
	}, timeForStart);
};

const resetAnimation = () => {
	rouletteBox.style.transition = "0.1s";
	rouletteBox.style.left = "0px";
};

const createItemToLastDrops = (winningItem) => {
	const dropItem = document.createElement("p");
	dropItem.classList.add("roulette__lastdrops-item");

	if (winningItem.classList.contains("roulette__item--green")) {
		dropItem.classList.add("roulette__lastdrops-item--green");
	} else if (winningItem.classList.contains("roulette__item--red")) {
		dropItem.classList.add("roulette__lastdrops-item--red");
	} else if (winningItem.classList.contains("roulette__item--black")) {
		dropItem.classList.add("roulette__lastdrops-item--black");
	}

	dropItem.textContent = winningItem.textContent;
	dropItem.style.order = dropOrder;
	dropOrder--;
	lastDropsBox.append(dropItem);
};

setTimeout(() => {
	startRoulette();
}, timeForStart);

addLineAnim();
