const navLink = document.querySelector("#nav-link");
const navLinkAfter = document.querySelector(".active-site");
const nav = document.querySelector(".nav__container");
const navList = document.querySelector(".nav__list");
const mobileNavBtn = document.querySelector(".nav__hamb");
const mobileNav = document.querySelector(".nav-mobile");


const addListeners = () => {
	mobileNavBtn.addEventListener("click", toggleMobileNav);
};

const getHeightForLinkLine = () => {
	const navHeight = nav.offsetHeight;
	const navLinkHeight = navLink.offsetHeight;
	const navListHeight = navList.offsetHeight;
	const heightOfLinkLine =
		(navHeight - navListHeight) / 2 + (navListHeight - navLinkHeight) / 2 + 0.5;

	setHeightToAfter(heightOfLinkLine);
};

const setHeightToAfter = (height) => {
	navLinkAfter.style.setProperty("--after-bottom", `-${height}px`);
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

getHeightForLinkLine();

addListeners();

