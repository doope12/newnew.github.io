const items2 = {
	item0: {
		weapon: "AK-47",
		name: "AK-47 Gold Arabesque",
		skin: "Gold Arabesque",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/ak-47/gold-arabesque.jpg",
		price: 2780.22,
		id: 50,
		dropPercent: 1,
	},
	item1: {
		weapon: "M4A4",
		name: "M4A4 Mainframe",
		skin: "Mainframe",
		color: "light-blue",
		imgDist: "../dist/img/weapons/rifles/m4a4/mainframe.jpg",
		price: 0.07,
		id: 80,
		dropPercent: 99,
	},
};

const spinBtn = document.querySelector(".spin");
const caseItemsBox = document.querySelectorAll(".case__items");
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
const caseAmountBtns = document.querySelectorAll(".case__button-amount");
const backBtn = document.querySelector(".case__btn--back");
const muteBtn = document.querySelector(".case__btn--mute");
const allCases = document.querySelector(".case__allcases");
const casePrice = 30.0;
let currentWinningItem;
let casesAmount = 1;
let intervalId;
let winningItems = [];

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
	const caseItemsBox = document.querySelectorAll(".case__items");

	caseItemsBox.forEach((box) => {
		for (i = 0; i < 100; i++) {
			const randomNumber = Math.floor(Math.random() * 10000);
			let randomItem;

			if (randomNumber <= 99) {
				randomItem = 0;
			} else {
				randomItem = 1;
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

			item.id = `item${randomItem}`;
			item.append(itemImg, itemItemName, itemSkinName);
			box.append(item);
		}
	});
};

const setBtnText = () => {
	if (parseFloat(localStorage.getItem("Balance").slice(0, -1)) >= casePrice) {
		spinBtn.textContent = `open ${casePrice * casesAmount}.00$`;
	} else {
		spinBtn.textContent = "add balance";
	}
};

const spinCase = () => {
	const caseItemsBox = document.querySelectorAll(".case__items");

	if (
		parseFloat(localStorage.getItem("Balance").slice(0, -1)) >= casePrice &&
		spinBtn.textContent !== "spining"
	) {
		const caseOpeningSound = new Audio("../dist/audio/open.mp3");
		if (muteBtn.classList.contains("not-muted")) {
			caseOpeningSound.play();
		}
		caseItemsBox.forEach((box) => {
			// Losowe przesunięcie między -2000 a -7000 px
			const howStrongSpin = Math.floor(Math.random() * 5000 - 10000);

			spinBtn.textContent = "spining";


			const casesOpenedToAdd =
				parseInt(localStorage.getItem("casesOpened")) + 1;
			localStorage.setItem("casesOpened", casesOpenedToAdd);

			const balanceAfterOpening = (
				parseFloat(localStorage.getItem("Balance").slice(0, -1)) - casePrice
			).toFixed(2);
			localStorage.setItem("Balance", balanceAfterOpening + "$");
			setBalance();

			// Ustawienie przesunięcia elementów z animacją
			box.style.left = howStrongSpin + "px";
			box.style.transition = "left 5s ease";

			if (casesAmount === 1) {
				// Dynamiczne skalowanie najbliższego elementu w trakcie animacji
				intervalId = setInterval(() => {
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
			}

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
					winningItems.push(winningItem);
					winningItemBox.classList.value = "";
					winningItemBox.classList.add(
						"win-popup__container",
						`${items2[`${winningItem.id}`].color + "-win"}`
					);
					winningItemImg.setAttribute(
						"src",
						items2[`${winningItem.id}`].imgDist
					);
					winningItemImg.setAttribute("alt", items2[`${winningItem.id}`].name);
					winningItemName.textContent = items2[`${winningItem.id}`].name;
					winningItemPrice.textContent =
						items2[`${winningItem.id}`].price + "$";
					hideWinPopup();
				}
			}, 5000); // Uruchom po zakończeniu animacji
		});
	} else if (spinBtn.textContent !== "spining") {
		window.open("../diff/deposit.html", "_self");
	}
};

const hideWinPopup = () => {
	if (casesAmount === 1) {
		winPupup.classList.toggle("hidden");
	} else {
		takeWinningItem();
	}
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
	for (i = 0; i < winningItems.length; i++) {
		if (
			localStorage.getItem("id" + items2[`${winningItems[i].id}`].id) ===
				null ||
			localStorage.getItem("id" + items2[`${winningItems[i].id}`].id) === NaN
		) {
			localStorage.setItem("id" + items2[`${winningItems[i].id}`].id, 1);
		} else {
			localStorage.setItem(
				"id" + items2[`${winningItems[i].id}`].id,
				parseInt(
					localStorage.getItem("id" + items2[`${winningItems[i].id}`].id)
				) + 1
			);
		}
	}

	if (casesAmount === 1) {
		hideWinPopup();
	}
	resetBoxAnimation();
};

const refreshBalance = () => {
	balanceAmount.textContent = localStorage.getItem("Balance");
	balanceAmountMobile.textContent = localStorage.getItem("Balance");
};

const resetBoxAnimation = () => {
	const caseItemsBox = document.querySelectorAll(".case__items");
	caseItemsBox.forEach((box) => {
		box.innerHTML = "";
		box.style.transition = "0.01s";
		box.style.left = "0";
	});

	winningItems = [];
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

const createBoxes = () => {
	const caseItem = document.createElement("div");
	const casePoint = document.createElement("div");
	const caseTriangle = document.createElement("div");
	const caseTriangleBtm = document.createElement("div");
	const caseItems = document.createElement("div");

	caseItem.classList.add("case__container");
	casePoint.classList.add("case__middle-point");
	caseTriangle.classList.add("case__middle-triangle");
	caseTriangleBtm.classList.add(
		"case__middle-triangle",
		"case__middle-triangle--bottom"
	);
	caseItems.classList.add("case__items");

	caseItem.append(casePoint, caseTriangle, caseTriangleBtm, caseItems);
	allCases.append(caseItem);
	createItemsInChest();
};

function setCasesAmount() {
	if (spinBtn.textContent !== "spining") {
		allCases.innerHTML = "";

		switch (this.id) {
			case "1Case":
				casesAmount = 1;
				createBoxes();
				break;
			case "2Case":
				casesAmount = 2;
				createBoxes();
				createBoxes();
				break;
			case "3Case":
				casesAmount = 3;
				createBoxes();
				createBoxes();
				createBoxes();
				break;
			case "4Case":
				casesAmount = 4;
				createBoxes();
				createBoxes();
				createBoxes();
				createBoxes();
				break;
			case "5Case":
				casesAmount = 5;
				createBoxes();
				createBoxes();
				createBoxes();
				createBoxes();
				createBoxes();
				break;
		}

		setBtnText();
	}
}

spinBtn.addEventListener("click", spinCase);
takeBtn.addEventListener("click", takeWinningItem);
sellBtn.addEventListener("click", sellWinningItem);
backBtn.addEventListener("click", goBackToMainSite);
muteBtn.addEventListener("click", muteSound);

caseAmountBtns.forEach((btn) => {
	btn.addEventListener("click", setCasesAmount);
});

createItemsInChest();
setBtnText();
createInfoAboutItemsInChest();
