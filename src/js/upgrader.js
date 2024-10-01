const items1 = {
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
const itemUserOwnList = document.querySelector(".upgrader__list");
const countItemsAmount = Object.keys(items).length;

const addAllItems = () => {
	for (i = 0; i < countItemsAmount; i++) {
		const itemCount = parseInt(localStorage.getItem(`id${i}`)) || 0;
			for (j = 0; j < itemCount; j++) {
				const itemBox = document.createElement("div");
				const itemImg = document.createElement("img");
				const itemName = document.createElement("p");
				const itemPrice = document.createElement("p");

				itemBox.classList.add("upgrader__item");
				itemImg.classList.add("upgrader__img");
				itemName.classList.add("upgrader__name");
				itemPrice.classList.add("upgrader__price");

				itemImg.setAttribute("src", items1[`id${i}`].imgDist);
				itemImg.setAttribute("alt", items1[`id${i}`].name);
				itemName.textContent = items1[`id${i}`].name;
				itemPrice.textContent = items1[`id${i}`].price + "$";

				itemBox.append(itemImg, itemName, itemPrice);
				itemUserOwnList.append(itemBox);
			
		}
	}
};

addAllItems();
