const items1 = {
	id0: {
		weapon: "M4A1-S",
		name: "M4A1-S Black Lotus",
		skin: "Black Lotus",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/m4a1-s/black-lotus.jpg",
		price: 27.15,
		id: 0,
	},
	id1: {
		weapon: "AWP",
		name: "AWP Chrome Cannon",
		skin: "Chrome Cannon",
		color: "red",
		imgDist: "../dist/img/weapons/rifles/awp/chrome-cannon.jpg",
		price: 212.41,
		id: 1,
	},
	id2: {
		weapon: "Huntsman",
		name: "Huntsman Lore",
		skin: "Lore",
		color: "gold",
		imgDist: "../dist/img/weapons/knives/huntsman/lore.jpg",
		price: 307.24,
		id: 2,
	},
	id3: {
		weapon: "AK-47",
		name: "AK-47 Slate",
		skin: "Slate",
		color: "purple",
		imgDist: "../dist/img/weapons/rifles/ak-47/slate.jpg",
		price: 10.61,
		id: 3,
	},
	id4: {
		weapon: "M4A4",
		name: "M4A4 Global Offensive",
		skin: "Global Offensive",
		color: "blue",
		imgDist: "../dist/img/weapons/rifles/m4a4/global-offensive.jpg",
		price: 27.68,
		id: 4,
	},
	id5: {
		weapon: "AWP",
		name: "AWP Safari Mesh",
		skin: "Safari Mesh",
		color: "light-blue",
		imgDist: "../dist/img/weapons/rifles/awp/safari-mesh.jpg",
		price: 2.09,
		id: 5,
	},
	id6: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Blaze",
		skin: "Blaze",
		color: "purple",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/blaze.jpg",
		price: 553.19,
		id: 6,
	},
	id7: {
		weapon: "Desert Eagle",
		name: "Desert Eagle Mudder",
		skin: "Mudder",
		color: "light-blue",
		imgDist: "../dist/img/weapons/pistols/desert-eagle/mudder.jpg",
		price: 0.32,
		id: 7,
	},
	id8: {
		weapon: "AK-47",
		name: "AK-47 Redline",
		skin: "Redline",
		color: "pink",
		imgDist: "../dist/img/weapons/rifles/ak-47/redline.jpg",
		price: 113.74,
		id: 8,
	},
	id9: {
		weapon: "Classic Knife",
		name: "Classic Knife Safari Mesh",
		skin: "Mudder",
		color: "gold",
		imgDist: "../dist/img/weapons/knives/classic/safari-mesh.jpg",
		price: 175.0,
		id: 9,
	},
	id10: {
		weapon: "Talon",
		name: "Talon Tiger Tooth",
		skin: "Tiger Tooth",
		color: "gold",
		imgDist: "../dist/img/weapons/knives/talon/tiger-tooth.jpg",
		price: 611.78,
		id: 10,
	},
};
const itemUserOwnList = document.querySelector(".upgrader__list-playeritems");
const itemAllList = document.querySelector(".upgrader__list-allitems");
const selectUserItems = document.querySelector("#price-user");
const selectAllItems = document.querySelector("#price-all");
const countItemsAmount = Object.keys(items).length;

const addPlayerItems = () => {
	for (i = 0; i < countItemsAmount; i++) {
		const itemCount = parseInt(localStorage.getItem(`id${i}`)) || 0;
		for (j = 0; j < itemCount; j++) {
			const itemBox = document.createElement("div");
			const itemImg = document.createElement("img");
			const itemName = document.createElement("p");
			const itemSkin = document.createElement("p");
			const itemPrice = document.createElement("p");

			itemBox.classList.add("upgrader__item");
			itemBox.classList.add(items1[`id${i}`].color + "-drop");
			itemBox.classList.add("upgrader__item-useritems");
			itemImg.classList.add("upgrader__img");
			itemName.classList.add("upgrader__name");
			itemSkin.classList.add("upgrader__skin");
			itemSkin.classList.add(items1[`id${i}`].color + "-text");
			itemPrice.classList.add("upgrader__price");

			itemBox.id = items1[`id${i}`].id;
			itemImg.setAttribute("src", items1[`id${i}`].imgDist);
			itemImg.setAttribute("alt", items1[`id${i}`].name);
			itemName.textContent = items1[`id${i}`].weapon;
			itemSkin.textContent = items1[`id${i}`].skin;
			itemPrice.textContent = items1[`id${i}`].price + "$";

			itemBox.append(itemImg, itemName, itemSkin, itemPrice);
			itemUserOwnList.append(itemBox);
		}
	}
};

const addAllItems = () => {
	for (i = 0; i < countItemsAmount; i++) {
		const itemBox = document.createElement("div");
		const itemImg = document.createElement("img");
		const itemName = document.createElement("p");
		const itemSkin = document.createElement("p");
		const itemPrice = document.createElement("p");

		itemBox.classList.add("upgrader__item");
		itemBox.classList.add(items1[`id${i}`].color + "-drop");
		itemBox.classList.add("upgrader__item-allitems");
		itemImg.classList.add("upgrader__img");
		itemName.classList.add("upgrader__name");
		itemSkin.classList.add("upgrader__skin");
		itemSkin.classList.add(items1[`id${i}`].color + "-text");
		itemPrice.classList.add("upgrader__price");

		itemBox.id = items1[`id${i}`].id;
		itemImg.setAttribute("src", items1[`id${i}`].imgDist);
		itemImg.setAttribute("alt", items1[`id${i}`].name);
		itemName.textContent = items1[`id${i}`].weapon;
		itemSkin.textContent = items1[`id${i}`].skin;
		itemPrice.textContent = items1[`id${i}`].price + "$";

		itemBox.append(itemImg, itemName, itemSkin, itemPrice);
		itemAllList.append(itemBox);
	}
};

const setUserItemsOrder = () => {
	const userItems = document.querySelectorAll(".upgrader__item-useritems");

	if (selectUserItems.value === "asc") {
		userItems.forEach((item) => {
			const itemPrice = parseFloat(item.lastElementChild.textContent).toFixed(
				0
			);
			item.style.order = itemPrice;
		});
	} else {
		userItems.forEach((item) => {
			const itemPrice = parseFloat(item.lastElementChild.textContent).toFixed(
				0
			);
			item.style.order = "-" + itemPrice;
		});
	}
};

const setAllItemsOrder = () => {
	const allItems = document.querySelectorAll(".upgrader__item-allitems");

	if (selectAllItems.value === "asc") {
		allItems.forEach((item) => {
			const itemPrice = parseFloat(item.lastElementChild.textContent).toFixed(
				0
			);
			item.style.order = itemPrice;
		});
	} else {
		allItems.forEach((item) => {
			const itemPrice = parseFloat(item.lastElementChild.textContent).toFixed(
				0
			);
			item.style.order = "-" + itemPrice;
		});
	}
};

function addToLeftSide() {
	const infoBox = document.querySelector(".upgrader__infobox-left");
	const topLeftBox = document.querySelector(".upgrader__top-left");

	infoBox.firstElementChild.textContent = this.lastElementChild.textContent;
	topLeftBox.lastElementChild.setAttribute(
		"src",
		this.firstElementChild.getAttribute("src")
	);
	topLeftBox.id = this.id;

	countPercent();
}

function addToRightSide() {
	const infoBox = document.querySelector(".upgrader__infobox-right");
	const topRightBox = document.querySelector(".upgrader__top-right");

	infoBox.firstElementChild.textContent = this.lastElementChild.textContent;
	topRightBox.lastElementChild.setAttribute(
		"src",
		this.firstElementChild.getAttribute("src")
	);
	topRightBox.id = this.id;

	countPercent();
}

const countPercent = () => {
	const infoBoxLeft = document.querySelector(".upgrader__infobox-left");
	const infoBoxRight = document.querySelector(".upgrader__infobox-right");
	const priceLeft = infoBoxLeft.firstElementChild.textContent;
	const priceRight = infoBoxRight.firstElementChild.textContent;

	const circle = document.querySelector(".upgrader__base");
	const percentageText = document.querySelector(".upgrader__percent");

	if (priceLeft !== "0.00$" && priceRight !== "0.00$") {
		const percentForWin =
			(parseFloat(priceLeft) / parseFloat(priceRight)) * 100;

		if (percentForWin >= 100) {
			percentageText.textContent = "100%";
			circle.style.background = `conic-gradient(#cfa0ff 0 100%, #292a2d 100% 100%)`;
		} else {
			percentageText.textContent = percentForWin.toFixed(2) + "%";
			circle.style.background = `conic-gradient(#cfa0ff 0 ${percentForWin}%, #292a2d ${percentForWin}% 100%)`;
		}
	}
};

addPlayerItems();
addAllItems();

setUserItemsOrder();
setAllItemsOrder();

selectAllItems.addEventListener("change", setAllItemsOrder);
selectUserItems.addEventListener("change", setUserItemsOrder);

const addListenersToItems = () => {
	const userItems = document.querySelectorAll(".upgrader__item-useritems");
	const allItems = document.querySelectorAll(".upgrader__item-allitems");

	userItems.forEach((item) => {
		item.addEventListener("click", addToLeftSide);
	});

	allItems.forEach((item) => {
		item.addEventListener("click", addToRightSide);
	});
};

addListenersToItems();
