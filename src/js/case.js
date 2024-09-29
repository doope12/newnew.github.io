const items = {
	id0: {
		weapon: "M4A1-S",
		name: "M4A1-S Black Lotus",
		skin: "Black Lotus",
		color: "pink",
		imgDist: "../dist/img/m4a1s-black-lotus.jpg",
		price: 27.15,
	},
	id1: {
		weapon: "AWP",
		name: "AWP Chrome Cannon",
		skin: "Chrome Cannon",
		color: "red",
		imgDist: "../dist/img/awp-chrome-cannon.jpg",
		price: 212.41,
	},
	id2: {
		weapon: "Huntsman",
		name: "Huntsman Lore",
		skin: "Lore",
		color: "gold",
		imgDist: "../dist/img/huntsman-lore.jpg",
		price: 307.24,
	},
	id3: {
		weapon: "AK-47",
		name: "AK-47 Slate",
		skin: "Slate",
		color: "purple",
		imgDist: "../dist/img/ak-slate.jpg",
		price: 10.61,
	},
	id4: {
		weapon: "M4A4",
		name: "M4A4 Global Offensive",
		skin: "Global Offensive",
		color: "blue",
		imgDist: "../dist/img/m4a4-global-offensive.jpg",
		price: 27.68,
	},
	id5: {
		weapon: "AWP",
		name: "AWP Safari Mesh",
		skin: "Safari Mesh",
		color: "light-blue",
		imgDist: "../dist/img/awp-safari-mesh.jpg",
		price: 2.09,
	},
};
const spinBtn = document.querySelector(".spin");
const caseItemsBox = document.querySelector(".case__items");
const countItemsAmount = Object.keys(items).length;
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
let currentWinningItem;

const createItemsInChest = () => {
	for (i = 0; i < 30; i++) {
		const item = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemItemName = document.createElement("p");
		const itemSkinName = document.createElement("p");
		item.classList.add("case__item");
		itemImg.classList.add("case__img");
		itemItemName.classList.add("case__item-name");
		itemSkinName.classList.add("case__skin-name");

		const randomItem = Math.floor(Math.random() * countItemsAmount);

		itemImg.setAttribute("src", items[`id${randomItem}`].imgDist);
		itemImg.setAttribute("alt", items[`id${randomItem}`].name);
		itemItemName.textContent = items[`id${randomItem}`].weapon;
		itemSkinName.textContent = items[`id${randomItem}`].skin;

		item.id = `id${randomItem}`;
		item.append(itemImg, itemItemName, itemSkinName);
		caseItemsBox.append(item);
	}
};

// Funkcja odpowiedzialna za losowe przesunięcie
const spinCase = () => {
	// Losowe przesunięcie między -2000 a -1000 px
	const howStrongSpin = Math.floor(Math.random() * 1000 - 2000);

	// Ustawienie przesunięcia elementów z animacją
	caseItemsBox.style.left = howStrongSpin + "px";
  caseItemsBox.style.transition= "left 5s ease";

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
			winningItemImg.setAttribute("src", items[`${winningItem.id}`].imgDist);
			winningItemImg.setAttribute("alt", items[`${winningItem.id}`].name);
			winningItemName.textContent = items[`${winningItem.id}`].name;
			winningItemPrice.textContent = items[`${winningItem.id}`].price;
			hideWinPopup();
		}
	}, 5000); // Uruchom po zakończeniu animacji
};

const hideWinPopup = () => {
	winPupup.classList.toggle("hidden");
  resetBoxAnimation();
};

const sellWinningItem = () => {
	const currentBalance = parseFloat(
		localStorage.getItem("Balance").slice(0, -1)
	);
	const itemPrice = parseFloat(winningItemPrice.textContent);
	const howMuchToAddToBalance = currentBalance + itemPrice;
	localStorage.setItem("Balance", howMuchToAddToBalance + "$");
	hideWinPopup();
	refreshBalance();
};

const takeWinningItem = () => {
	if (
		localStorage.getItem(currentWinningItem.id) === null ||
		localStorage.getItem(currentWinningItem.id) === NaN
	) {
		localStorage.setItem(currentWinningItem.id, 1);
	} else {
		localStorage.setItem(
			currentWinningItem.id,
			parseInt(localStorage.getItem(currentWinningItem.id)) + 1
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
  caseItemsBox.style.transition= "0.01s";
  caseItemsBox.style.left =  "-3950px";
  createItemsInChest();
}

spinBtn.addEventListener("click", spinCase);
takeBtn.addEventListener("click", takeWinningItem);
sellBtn.addEventListener("click", sellWinningItem);

createItemsInChest();
