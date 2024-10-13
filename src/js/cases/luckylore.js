const items2 = {
	item0: {
		weapon: "M4A1-S",
		name: "M4A1-S Black Lotus",
		skin: "Black Lotus",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/m4a1-s/black-lotus.jpg",
		price: 27.15,
		id: 0,
		dropPercent: 50,
	},
	item1: {
		weapon: "Huntsman",
		name: "Huntsman Lore",
		skin: "Lore",
		color: "gold",
		imgDist: "../dist/img/weapons/knives/huntsman/lore.jpg",
		price: 307.24,
		id: 2,
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
const winningItemBox = document.querySelector(".win-popup__container");
const balanceAmount = document.querySelector(".user__balance--amount");
const balanceAmountMobile = document.querySelector(
	".user-mobile__balance--amount"
);
const backBtn = document.querySelector(".case__btn--back");
const muteBtn = document.querySelector(".case__btn--mute");
const casePrice = 200.0;
let currentWinningItem;

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
		dropItem.style.order = "-" + (items2[`item${i}`].price).toFixed(0);
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
		const randomItem = Math.random() < 0.5 ? 0 : 1;

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

const spinCase = () => {
	if (
		parseFloat(localStorage.getItem("Balance").slice(0, -1)) >= casePrice &&
		spinBtn.textContent !== "spining"
	) {
		const caseOpeningSound = new Audio("../dist/audio/open.mp3");
		// Losowe przesunięcie między -2000 a -7000 px
		const howStrongSpin = Math.floor(Math.random() * 5000 - 10000);

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

		// Dynamiczne skalowanie najbliższego elementu w trakcie animacji
		const intervalId = setInterval(() => {
			const redLineX = document
				.querySelector(".case__middle-point")
				.getBoundingClientRect().x;

			function updateClosestItemScale() {
				const items = document.querySelectorAll(".case__item");
				let closestItem = null;
				let closestDistance = Infinity;

				// Resetuj skalowanie dla wszystkich elementów
				items.forEach((item) => {
					item.firstElementChild.style.scale = "1";
				});

				// Znajdź najbliższy element do linii środkowej
				items.forEach((item) => {
					const itemCenterX =
						item.getBoundingClientRect().x + item.offsetWidth / 2;
					const distance = Math.abs(itemCenterX - redLineX);

					if (distance < closestDistance) {
						closestDistance = distance;
						closestItem = item;
					}
				});

				// Zmniejsz skalę najbliższego elementu
				if (closestItem) {
					closestItem.firstElementChild.style.scale = "0.9";
				}
			}

			updateClosestItemScale();
		}, 100); // Aktualizuj co 100ms

		// Po zakończeniu animacji po 5 sekundach, znajdź zwycięski element i zatrzymaj skalowanie
		setTimeout(() => {
			clearInterval(intervalId); // Zatrzymaj dynamiczne skalowanie po zakończeniu animacji

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
				winningItemBox.classList.value = "";
				winningItemBox.classList.add(
					"win-popup__container",
					`${items2[`${winningItem.id}`].color + "-win"}`
				);
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
	caseItemsBox.style.left = "0";
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
