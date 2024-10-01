const items = {
	id0: {
		name: "M4A1-S Black Lotus",
		skin: "Black Lotus",
		color: "pink",
		imgDist: "./dist/img/m4a1s-black-lotus.jpg",
	},
	id1: {
		name: "AWP Chrome Cannon",
		skin: "Chrome Cannon",
		color: "red",
		imgDist: "./dist/img/awp-chrome-cannon.jpg",
	},
	id2: {
		name: "Huntsman Lore",
		skin: "Lore",
		color: "gold",
		imgDist: "./dist/img/huntsman-lore.jpg",
	},
	id3: {
		name: "AK-47 Slate",
		skin: "Slate",
		color: "purple",
		imgDist: "./dist/img/ak-slate.jpg",
	},
	id4: {
		name: "M4A4 Global Offensive",
		skin: "Global Offensive",
		color: "blue",
		imgDist: "./dist/img/m4a4-global-offensive.jpg",
	},
	id5: {
		name: "AWP Safari Mesh",
		skin: "Safari Mesh",
		color: "light-blue",
		imgDist: "./dist/img/awp-safari-mesh.jpg",
	},
};
const countItemsAmount = Object.keys(items).length;
const lastDropList = document.querySelector(".drop__list");
const dropBox = document.querySelector(".drop__box");
let dropListOrder = 0;

const setDropBoxHeight = () => {
	dropBox.style.height = lastDropList.offsetHeight + "px";
};

const createDropOnStart = () => {
	for (i = 0; i < 24; i++) {
		dropListOrder++;
		const item = document.createElement("li");
		const itemBg = document.createElement("div");
		const itemImg = document.createElement("img");
		item.classList.add("drop__item");
		itemBg.classList.add("drop__item-bg");
		itemImg.classList.add("drop__img");

		const randomItem = Math.floor(Math.random() * countItemsAmount);

		item.classList.add(items[`id${randomItem}`].color + "-drop");

		if (document.body.id === "index") {
			itemImg.setAttribute("src", items[`id${randomItem}`].imgDist);
		} else {
			itemImg.setAttribute("src", "." + items[`id${randomItem}`].imgDist);
		}

		itemImg.setAttribute("alt", items[`id${randomItem}`].name);

		item.style.order = `-${dropListOrder}`;
		item.append(itemImg, itemBg);
		lastDropList.append(item);
	}
};

const createDrop = () => {
	dropListOrder++;
	const lastDropListFirstChild = lastDropList.firstElementChild;
	const item = document.createElement("li");
	const itemBg = document.createElement("div");
	const itemImg = document.createElement("img");
	item.classList.add("drop__item");
	itemBg.classList.add("drop__item-bg");
	itemImg.classList.add("drop__img");

	const randomItem = Math.floor(Math.random() * countItemsAmount);

	item.classList.add(items[`id${randomItem}`].color + "-drop");

	if (document.body.id === "index") {
		itemImg.setAttribute("src", items[`id${randomItem}`].imgDist);
	} else {
		itemImg.setAttribute("src", "." + items[`id${randomItem}`].imgDist);
	}

	itemImg.setAttribute("alt", items[`id${randomItem}`].name);

	item.style.order = `-${dropListOrder}`;
	item.append(itemImg, itemBg);
	lastDropList.append(item);

	if (lastDropList.childElementCount > 25) {
		lastDropListFirstChild.remove();
	}
};

setInterval(() => {
	createDrop();
}, 4000);

createDropOnStart();
createDrop();
setDropBoxHeight();
