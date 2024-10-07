const items2 = {
	item0: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Blaze",
		skin: "Blaze",
		color: "purple",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/blaze.jpg",
		price: 553.19,
		id: 6,
		dropPercent: 1,
	},
	item1: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Hand Cannon",
		skin: "Hand Cannon",
		color: "purple",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/hand-cannon.jpg",
		price: 427.71,
		id: 44,
		dropPercent: 1,
	},
	item2: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Fennec Fox",
		skin: "Fennec Fox",
		color: "pink",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/fennec-fox.jpg",
		price: 353.77,
		id: 45,
		dropPercent: 2,
	},
	item3: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Printstream",
		skin: "Printstream",
		color: "red",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/printstream.jpg",
		price: 85.72,
		id: 11,
		dropPercent: 3,
	},
	item4: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Midnight Storm",
		skin: "Midnight Storm",
		color: "light-blue",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/midnight-storm.jpg",
		price: 25.03,
		id: 46,
		dropPercent: 8,
	},
	item5: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Naga",
		skin: "Naga",
		color: "purple",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/naga.jpg",
		price: 5.26,
		id: 47,
		dropPercent: 15,
	},
	item6: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Light Rail",
		skin: "Light Rail",
		color: "purple",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/light-rail.jpg",
		price: 3.23,
		id: 48,
		dropPercent: 20,
	},
	item7: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Mudder",
		skin: "Mudder",
		color: "light-blue",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/mudder.jpg",
		price: 0.32,
		id: 7,
		dropPercent: 50,
	},
};

const spinBtn = document.querySelector(".spin");
const caseItemsBox = document.querySelector(".case__items");
const countItemsAmount = Object.keys(items2).length;
const winPupup = document.querySelector(".win-popup");
const sellBtn = document.querySelector(".win-popup__btn--sell");
const takeBtn = document.querySelector(".win-popup__btn--take");
const winningItemImg = document.querySelector(".win-popup__img");
const winningItemName = document.querySelector(".win-popup__item-name");
const winningItemPrice = document.querySelector(".win-popup__item-price");
const balanceAmount = document.querySelector(".user__balance--amount");
const balanceAmountMobile = document.querySelector(
	".user-mobile__balance--amount"
);
const backBtn = document.querySelector(".case__btn--back");
const muteBtn = document.querySelector(".case__btn--mute");
const caseOpeningSound = new Audio("../dist/audio/open.mp3");
const casePrice = 25.0;
let currentWinningItem;

// const howMuchShouldChestCost = () => {
// 	let chestValue = 0;
// 	let totalPercent = 0;

// 	for (i = 0; i < countItemsAmount; i++) {
// 		const itemEV =
// 			items2[`item${i}`].price * (items2[`item${i}`].dropPercent / 100);
// 		chestValue = chestValue + itemEV;
// 	}
// 	console.log(chestValue);

// 	for (i = 0; i < countItemsAmount; i++) {
// 		totalPercent = totalPercent + items2[`item${i}`].dropPercent;
// 	}
// 	console.log(totalPercent);
// };
// howMuchShouldChestCost();

const createInfoAboutItemsInChest = () => {
	const dropBox = document.querySelector(".case__drop-box");

	for (i = 0; i < countItemsAmount; i++) {
		const dropItem = document.createElement("div");
		const dropItemPercent = document.createElement("p");
		const dropItemImg = document.createElement("img");
		const dropItemTextBox = document.createElement("div");
		const dropItemTextBoxLeft = document.createElement("div");
		const dropItemName = document.createElement("p");
		const dropItemSkin = document.createElement("p");
		const dropItemPrice = document.createElement("p");

		dropItem.classList.add("case__drop");
		dropItem.classList.add(items2[`item${i}`].color + "-drop");
		dropItem.style.order = "-" + items2[`item${i}`].price.toFixed(0);
		dropItemPercent.classList.add("case__drop-percent");
		dropItemImg.classList.add("case__drop-img");
		dropItemTextBox.classList.add("case__drop-textbox");
		dropItemTextBoxLeft.classList.add("case__drop-textbox-left");
		dropItemName.classList.add("case__drop-item");
		dropItemSkin.classList.add("case__drop-skin");
		dropItemSkin.classList.add(items2[`item${i}`].color + "-text");
		dropItemPrice.classList.add("case__drop-price");

		dropItemImg.setAttribute("src", items2[`item${i}`].imgDist);
		dropItemImg.setAttribute("alt", items2[`item${i}`].name);

		dropItemPercent.textContent = items2[`item${i}`].dropPercent + "%";
		dropItemName.textContent = items2[`item${i}`].weapon;
		dropItemSkin.textContent = items2[`item${i}`].skin;
		dropItemPrice.textContent = items2[`item${i}`].price + "$";

		dropItemTextBoxLeft.append(dropItemName, dropItemSkin);
		dropItemTextBox.append(dropItemTextBoxLeft, dropItemPrice);
		dropItem.append(dropItemPercent, dropItemImg, dropItemTextBox);
		dropBox.append(dropItem);
	}
};

const createItemsInChest = () => {
	for (i = 0; i < 30; i++) {
		const randomNumber = Math.floor(Math.random() * 10000);
		let randomItem;

		if (randomNumber <= 99) {
			randomItem = 0;
		} else if (randomNumber <= 199) {
			randomItem = 1;
		} else if (randomNumber <= 399) {
			randomItem = 2;
		} else if (randomNumber <= 699) {
			randomItem = 3;
		} else if (randomNumber <= 1499) {
			randomItem = 4;
		} else if (randomNumber <= 2999) {
			randomItem = 5;
		} else if (randomNumber <= 4999) {
			randomItem = 6;
		} else {
			randomItem = 7;
		}

		const item = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemItemName = document.createElement("p");
		const itemSkinName = document.createElement("p");
		item.classList.add("case__item");
		item.classList.add(items2[`item${randomItem}`].color + "-drop");
		item.style.border = "none";
		itemImg.classList.add("case__img");
		itemItemName.classList.add("case__item-name");
		itemSkinName.classList.add("case__skin-name");
		itemSkinName.classList.add(items2[`item${randomItem}`].color + "-text");

		itemImg.setAttribute("src", items2[`item${randomItem}`].imgDist);
		itemImg.setAttribute("alt", items2[`item${randomItem}`].name);
		itemItemName.textContent = items2[`item${randomItem}`].weapon;
		itemSkinName.textContent = items2[`item${randomItem}`].skin;

		// item.id = `id${items2[`item${randomItem}`].id}`;
		item.id = `item${randomItem}`;
		item.append(itemImg, itemItemName, itemSkinName);
		caseItemsBox.append(item);
	}
};

const setBtnText = () => {
	if (parseFloat(localStorage.getItem("Balance").slice(0, -1)) >= casePrice) {
		spinBtn.textContent = `open ${casePrice}.00$`;
	} else {
		spinBtn.textContent = "add balance";
	}
};

// Funkcja odpowiedzialna za losowe przesunięcie
const spinCase = () => {
	if (
		parseFloat(localStorage.getItem("Balance").slice(0, -1)) >= casePrice &&
		spinBtn.textContent !== "spining"
	) {
		// Losowe przesunięcie między -2000 a -1000 px
		const howStrongSpin = Math.floor(Math.random() * 1000 - 2000);

		spinBtn.textContent = "spining";

		if (muteBtn.classList.contains("not-muted")) {
			caseOpeningSound.play();
		}

		const balanceAfterOpening = (
			parseFloat(localStorage.getItem("Balance").slice(0, -1)) - casePrice
		).toFixed(2);
		localStorage.setItem("Balance", balanceAfterOpening + "$");
		setBalance();

		// Ustawienie przesunięcia elementów z animacją
		caseItemsBox.style.left = howStrongSpin + "px";
		caseItemsBox.style.transition = "left 5s ease";

		// Po zakończeniu animacji po 5 sekundach, znajdź zwycięski element
		setTimeout(() => {
			const redLineX = document
				.querySelector(".case__middle-point")
				.getBoundingClientRect().x;

			function getWinningItem() {
				const items = document.querySelectorAll(".case__item");
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

			// Znajdź wygrywający element i zmień jego kolor
			const winningItem = getWinningItem();
			if (winningItem) {
				currentWinningItem = winningItem;
				winningItemImg.setAttribute("src", items2[`${winningItem.id}`].imgDist);
				winningItemImg.setAttribute("alt", items2[`${winningItem.id}`].name);
				winningItemName.textContent = items2[`${winningItem.id}`].name;
				winningItemPrice.textContent = items2[`${winningItem.id}`].price + "$";
				hideWinPopup();
			}
		}, 5000); // Uruchom po zakończeniu animacji
	} else if (spinBtn.textContent !== "spining") {
		window.open("../diff/deposit.html", "_self");
	}
};

const hideWinPopup = () => {
	winPupup.classList.toggle("hidden");
	setBtnText();
	resetBoxAnimation();
};

const sellWinningItem = () => {
	const currentBalance = parseFloat(
		localStorage.getItem("Balance").slice(0, -1)
	);
	const itemPrice = parseFloat(winningItemPrice.textContent);
	const howMuchToAddToBalance = (currentBalance + itemPrice).toFixed(2);
	localStorage.setItem("Balance", howMuchToAddToBalance + "$");
	hideWinPopup();
	refreshBalance();
};

const takeWinningItem = () => {
	const idNumber = "id" + items2[`${currentWinningItem.id}`].id;
	if (
		localStorage.getItem(idNumber) === null ||
		localStorage.getItem(idNumber) === NaN
	) {
		localStorage.setItem(idNumber, 1);
	} else {
		localStorage.setItem(
			idNumber,
			parseInt(localStorage.getItem(idNumber)) + 1
		);
	}
	hideWinPopup();
};

const refreshBalance = () => {
	balanceAmount.textContent = localStorage.getItem("Balance");
	balanceAmountMobile.textContent = localStorage.getItem("Balance");
};

const resetBoxAnimation = () => {
	caseItemsBox.innerHTML = "";
	caseItemsBox.style.transition = "0.01s";
	caseItemsBox.style.left = "-3950px";
	createItemsInChest();
};

const goBackToMainSite = () => {
	window.open("../index.html", "_self");
};

const muteSound = () => {
	muteBtn.classList.toggle("not-muted");

	if (muteBtn.classList.contains("not-muted")) {
		muteBtn.lastElementChild.style.display = "none";
		muteBtn.firstElementChild.style.display = "block";
	} else {
		muteBtn.lastElementChild.style.display = "block";
		muteBtn.firstElementChild.style.display = "none";
	}
};

spinBtn.addEventListener("click", spinCase);
takeBtn.addEventListener("click", takeWinningItem);
sellBtn.addEventListener("click", sellWinningItem);
backBtn.addEventListener("click", goBackToMainSite);
muteBtn.addEventListener("click", muteSound);

createItemsInChest();
setBtnText();
createInfoAboutItemsInChest();
