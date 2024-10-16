const items2 = {
	item0: {
		weapon: "M4A4",
		name: "M4A4 Poseidon",
		skin: "Poseidon",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/m4a4/poseidon.jpg",
		price: 1066.26,
		id: 60,
		dropPercent: 1,
	},
	item1: {
		weapon: "M4A1-S",
		name: "M4A1-S Icarus Fell",
		skin: "Icarus Fell",
		color: "purple",
		imgDist: "../dist/img/weapons/rifles/m4a1-s/icarus-fell.jpg",
		price: 460.01,
		id: 61,
		dropPercent: 2,
	},
	item2: {
		weapon: "SSG-08",
		name: "SSG-08 Death Strike",
		skin: "Death Strike",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/ssg-08/death-strike.jpg",
		price: 365.46,
		id: 63,
		dropPercent: 2,
	},
	item3: {
		weapon: "FAMAS",
		name: "FAMAS Waters of Nephthys",
		skin: "Waters of Nephthys",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/famas/waters-of-nephthys.jpg",
		price: 73.54,
		id: 64,
		dropPercent: 3,
	},
	item4: {
		weapon: "SSG-08",
		name: "SSG-08 Blood in the Water",
		skin: "Blood in the Water",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/ssg-08/blood-in-the-water.jpg",
		price: 56.57,
		id: 65,
		dropPercent: 4,
	},
	item5: {
		weapon: "AWP",
		name: "AWP Sun in Leo",
		skin: "Sun in Leo",
		color: "light-blue",
		imgDist: "../dist/img/weapons/rifles/awp/sun-in-leo.jpg",
		price: 31.71,
		id: 66,
		dropPercent: 5,
	},
	item6: {
		weapon: "G3SG1",
		name: "G3SG1 Flux",
		skin: "Flux",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/g3sg1/flux.jpg",
		price: 17.79,
		id: 67,
		dropPercent: 20,
	},
	item7: {
		weapon: "FAMAS",
		name: "FAMAS Commemoration",
		skin: "Commemoration",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/famas/commemoration.jpg",
		price: 12.05,
		id: 68,
		dropPercent: 25,
	},
	item8: {
		weapon: "MAC-10",
		name: "MAC-10 Light Box",
		skin: "Light Box",
		color: "blue",
		imgDist: "../dist/img/weapons/smgs/mac-10/light-box.jpg",
		price: 0.59,
		id: 62,
		dropPercent: 20,
	},
	item9: {
		weapon: "MAC-10",
		name: "MAC-10 Candy Apple",
		skin: "Candy Apple",
		color: "light-blue",
		imgDist: "../dist/img/weapons/smgs/mac-10/candy-apple.jpg",
		price: 0.13,
		id: 69,
		dropPercent: 18,
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
			} else if (randomNumber <= 299) {
				randomItem = 1;
			} else if (randomNumber <= 499) {
				randomItem = 2;
			} else if (randomNumber <= 799) {
				randomItem = 3;
			} else if (randomNumber <= 1119) {
				randomItem = 4;
			} else if (randomNumber <= 1699) {
				randomItem = 5;
			} else if (randomNumber <= 3699) {
				randomItem = 6;
			} else if (randomNumber <= 6199) {
				randomItem = 7;
			} else if (randomNumber <= 8199) {
				randomItem = 8;
			} else {
				randomItem = 9;
			}

			const item = document.createElement("div");
			const itemImg = document.createElement("img");
			const itemItemName = document.createElement("p");
			const itemSkinName = document.createElement("p");
			item.classList.add("case__item", `case__item${box.id}`);
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

	// Zbierz pozycję redLineX raz na początku
	const redLineX = document.querySelector(".case__middle-point").getBoundingClientRect().x;

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

			const casesOpenedToAdd = parseInt(localStorage.getItem("casesOpened")) + 1;
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
							const itemCenterX = item.getBoundingClientRect().x + item.offsetWidth / 2;
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

				function getWinningItem() {
					const items = box.querySelectorAll(".case__item");
					let closestItem = null;
					let closestDistance = Infinity;

					items.forEach((item) => {
						const itemCenterX = item.getBoundingClientRect().x + item.offsetWidth / 2;
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
		setTimeout(() => {
			takeWinningItem();
			setBtnText();
		}, 250);
	}
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
	for (i = 0; i < casesAmount; i++) {
		const caseItem = document.createElement("div");
		const casePoint = document.createElement("div");
		const caseTriangle = document.createElement("div");
		const caseTriangleBtm = document.createElement("div");
		const caseItems = document.createElement("div");

		caseItem.classList.add("case__container");
		caseItem.id = `caseBox${i}`;
		casePoint.classList.add("case__middle-point");
		caseTriangle.classList.add("case__middle-triangle");
		caseTriangleBtm.classList.add(
			"case__middle-triangle",
			"case__middle-triangle--bottom"
		);
		caseItems.classList.add("case__items");
		caseItems.classList.add("case__items" + [i]);
		caseItems.id = i;

		caseItem.append(casePoint, caseTriangle, caseTriangleBtm, caseItems);
		allCases.append(caseItem);
	}
	createItemsInChest();
};

function setCasesAmount() {
	if (spinBtn.textContent !== "spining") {
		allCases.innerHTML = "";

		switch (this.id) {
			case "1Case":
				casesAmount = 1;
				break;
			case "2Case":
				casesAmount = 2;
				break;
			case "3Case":
				casesAmount = 3;
				break;
			case "4Case":
				casesAmount = 4;
				break;
			case "5Case":
				casesAmount = 5;
				break;
		}

		createBoxes();
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
