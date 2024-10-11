const items2 = {
	item0: {
		weapon: "AWP",
		name: "AWP Gungnir",
		skin: "Gungnir",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/gungnir.jpg",
		price: 11709.26,
		id: 27,
		dropPercent: 0.1,
	},
	item1: {
		weapon: "AWP",
		name: "AWP Dragon Lore",
		skin: "Dragon Lore",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/dragon-lore.jpg",
		price: 11025.82,
		id: 28,
		dropPercent: 0.1,
	},
	item2: {
		weapon: "AWP",
		name: "AWP Medusa",
		skin: "Medusa",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/medusa.jpg",
		price: 4328.88,
		id: 29,
		dropPercent: 0.5,
	},
	item3: {
		weapon: "AWP",
		name: "AWP The Prince",
		skin: "The Prince",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/the-prince.jpg",
		price: 3207.63,
		id: 30,
		dropPercent: 0.7,
	},
	item4: {
		weapon: "AWP",
		name: "AWP Desert Hydra",
		skin: "Desert Hydra",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/desert-hydra.jpg",
		price: 2327.58,
		id: 26,
		dropPercent: 1,
	},
	item5: {
		weapon: "AWP",
		name: "AWP Fade",
		skin: "Fade",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/fade.jpg",
		price: 922.32,
		id: 81,
		dropPercent: 2,
	},
	item6: {
		weapon: "AWP",
		name: "AWP Lightning Strike",
		skin: "Lightning Strike",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/lightning-strike.jpg",
		price: 495.95,
		id: 82,
		dropPercent: 3,
	},
	item7: {
		weapon: "AWP",
		name: "AWP Oni Taiji",
		skin: "Oni Taiji",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/oni-taiji.jpg",
		price: 403.88,
		id: 83,
		dropPercent: 3,
	},
	item8: {
		weapon: "AWP",
		name: "AWP Containment Breach",
		skin: "Containment Breach",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/containment-breach.jpg",
		price: 298.01,
		id: 84,
		dropPercent: 3,
	},
	item9: {
		weapon: "AWP",
		name: "AWP BOOM",
		skin: "BOOM",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/awp/boom.jpg",
		price: 278.02,
		id: 85,
		dropPercent: 4,
	},
	item10: {
		weapon: "AWP",
		name: "AWP Asiimov",
		skin: "Asiimov",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/asiimov.jpg",
		price: 121.47,
		id: 86,
		dropPercent: 10,
	},
	item11: {
		weapon: "AWP",
		name: "AWP Sun in Leo",
		skin: "Sun in Leo",
		color: "light-blue",
		imgDist: "../dist/img/weapons/rifles/awp/sun-in-leo.jpg",
		price: 31.71,
		id: 66,
		dropPercent: 15,
	},
	item12: {
		weapon: "AWP",
		name: "AWP Neo-Noir",
		skin: "Neo-Noir",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/neo-noir.jpg",
		price: 28.92,
		id: 14,
		dropPercent: 20,
	},
	item13: {
		weapon: "AWP",
		name: "AWP Atheris",
		skin: "Atheris",
		color: "purple",
		imgDist: "../dist/img/weapons/rifles/awp/atheris.jpg",
		price: 10.9,
		id: 87,
		dropPercent: 25,
	},
	item14: {
		weapon: "AWP",
		name: "AWP Safari Mesh",
		skin: "Safari Mesh",
		color: "light-blue",
		imgDist: "../dist/img/weapons/rifles/awp/safari-mesh.jpg",
		price: 2.09,
		id: 5,
		dropPercent: 12.6,
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
const casePrice = 200.0;
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
		dropItem.classList.add(items2[`item${i}`].color + "-drop2");
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
	for (i = 0; i < 100; i++) {
		const randomNumber = Math.floor(Math.random() * 10000);
		let randomItem;

		if (randomNumber <= 9) {
			randomItem = 0;
		} else if (randomNumber <= 19) {
			randomItem = 1;
		} else if (randomNumber <= 69) {
			randomItem = 2;
		}else if (randomNumber <= 139) {
			randomItem = 3;
		}else if (randomNumber <= 239) {
			randomItem = 4;
		}else if (randomNumber <= 439) {
			randomItem = 5;
		}else if (randomNumber <= 739) {
			randomItem = 6;
		}else if (randomNumber <= 1039) {
			randomItem = 7;
		}else if (randomNumber <= 1339) {
			randomItem = 8;
		}else if (randomNumber <= 1739) {
			randomItem = 9;
		}else if (randomNumber <= 2739) {
			randomItem = 10;
		}else if (randomNumber <= 4239) {
			randomItem = 11;
		}else if (randomNumber <= 6239) {
			randomItem = 12;
		}else if (randomNumber <= 8739) {
			randomItem = 13;
		} else {
            randomItem = 14;
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
		const caseOpeningSound = new Audio("../dist/audio/open.mp3");
		// Losowe przesunięcie między -2000 a -1000 px
		const howStrongSpin = Math.floor(Math.random() * 5000 - 7000);

		spinBtn.textContent = "spining";

		if (muteBtn.classList.contains("not-muted")) {
			caseOpeningSound.play();
		}

		const casesOpenedToAdd = parseInt(localStorage.getItem("casesOpened")) + 1;
		localStorage.setItem("casesOpened", casesOpenedToAdd);

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
	resetBoxAnimation();
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
	resetBoxAnimation();
};

const refreshBalance = () => {
	balanceAmount.textContent = localStorage.getItem("Balance");
	balanceAmountMobile.textContent = localStorage.getItem("Balance");
};

const resetBoxAnimation = () => {
	caseItemsBox.innerHTML = "";
	caseItemsBox.style.transition = "0.01s";
	caseItemsBox.style.left = "-10000px";
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
