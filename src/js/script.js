const navItem = document.querySelectorAll(".nav__item");
const mobileNavBtn = document.querySelector(".nav__hamb");
const mobileNav = document.querySelector(".nav-mobile");
const loginPopup = document.querySelector(".login-popup");
const navMenu = document.querySelector(".nav__menu");
const navMenuBtn = document.querySelector(".nav__item--menu");

const setActiveSite = () => {
	// skrypt dodaje style do itemu nawigacji w zaleznosci od strony na ktorej jestesmy
	if (document.body.id === "upgrader") {
		// sprawdzamy jaka jest nazwa pliku z ktorego wczytujemy strone
		navItem.forEach((item) => {
			item.classList.remove("active-site"); // usuwa stan active site
			item.firstElementChild.classList.add("hidden"); // ukrywa gradientowe tło itemu

			if (item.id.includes("upgrader")) {
				item.classList.add("active-site"); // dodaje stan active site po sprawdzeniu id
				item.firstElementChild.classList.remove("hidden"); // odkrywa gradientowe tło itemu
			}
		});
	} else if (document.body.id === "battles") {
		navItem.forEach((item) => {
			item.classList.remove("active-site");
			item.firstElementChild.classList.add("hidden");

			if (item.id.includes("battles")) {
				item.classList.add("active-site");
				item.firstElementChild.classList.remove("hidden");
			}
		});
	} else if (document.body.id === "roulette") {
		navItem.forEach((item) => {
			item.classList.remove("active-site");
			item.firstElementChild.classList.add("hidden");

			if (item.id.includes("roulette")) {
				item.classList.add("active-site");
				item.firstElementChild.classList.remove("hidden");
			}
		});
	} else if (document.body.id === "crash") {
		navItem.forEach((item) => {
			item.classList.remove("active-site");
			item.firstElementChild.classList.add("hidden");

			if (item.id.includes("crash")) {
				item.classList.add("active-site");
				item.firstElementChild.classList.remove("hidden");
			}
		});
	} else {
		navItem.forEach((item) => {
			item.classList.remove("active-site");
			item.firstElementChild.classList.add("hidden");

			if (item.id.includes("cases")) {
				item.classList.add("active-site");
				item.firstElementChild.classList.remove("hidden");
			}
		});
	}
};

const addListeners = () => {
	mobileNavBtn.addEventListener("click", toggleMobileNav);
	navMenuBtn.addEventListener("click", toggleNavMenu);
};

const toggleMobileNav = () => {
	if (!mobileNav.classList.contains("hidden")) {
		mobileNav.classList.add("hide-nav");
		mobileNavBtn.classList.toggle("is-active");
		document.body.classList.toggle("body-scroll");
		setTimeout(() => {
			mobileNav.classList.remove("hide-nav");
			mobileNav.classList.toggle("hidden");
		}, 500);
	} else {
		mobileNavBtn.classList.toggle("is-active");
		mobileNav.classList.toggle("hidden");
		document.body.classList.toggle("body-scroll");
		mobileNav.classList.remove("hide-nav");
	}
};

const toggleNavMenu = () => {
	if (!navMenu.classList.contains("hidden")) {
		navMenu.classList.add("hide-nav-menu");
		setTimeout(() => {
			navMenu.classList.remove("hide-nav-menu");
			navMenu.classList.toggle("hidden");
		}, 500);
	} else {
		navMenu.classList.toggle("hidden");
		navMenu.classList.add("show-nav-menu");
	}
};

addListeners();

setActiveSite();
