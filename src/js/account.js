const loginBtn = document.querySelector("#login-btn");
const logoutBtn = document.querySelector("#logout-btn");
const loggedIn = document.querySelector(".user__logged-out");
const loggedOut = document.querySelector(".user__logged-in");
const loginBtnMobile = document.querySelector("#login-btn-mobile");
const logoutBtnMobile = document.querySelector("#logout-btn-mobile");
const loggedInMobile = document.querySelector(
	".user-mobile__logged-out-mobile"
);
const loggedOutMobile = document.querySelector(
	".user-mobile__logged-in-mobile"
);
const loginPopup = document.querySelector(".login-popup");
const loginPopupBackBtn = document.querySelector(".login-popup__icon");
const loginPopupImg = document.querySelector("#login-img");
const loginPopupNickname = document.querySelector("#login-nickname");
const loginPopupSubmitBtn = document.querySelector(".login-popup__btn");
const nickname = document.querySelector(".user__name");
const avatar = document.querySelector(".user__avatar");
const nicknameMobile = document.querySelector(".user-mobile__name");
const avatarMobile = document.querySelector(".user-mobile__avatar");
const profileMobile = document.querySelector(".user-mobile__top");

const addListeners = () => {
	loginBtn.addEventListener("click", loginToAccount);
	logoutBtn.addEventListener("click", logoutFromAccount);
	loginBtnMobile.addEventListener("click", loginToAccount);
	logoutBtnMobile.addEventListener("click", logoutFromAccount);
	loginPopupBackBtn.addEventListener("click", loginToAccount);
	loginPopupSubmitBtn.addEventListener("click", createAccount);
	profileMobile.addEventListener("click", changeSiteToProfile);
};

const checkIfUserCreatedAccount = () => {
	if (
		localStorage.getItem("createdAccount") === null ||
		localStorage.getItem("createdAccount") === NaN
	) {
		loggedIn.classList.remove("hidden");
		loggedOut.classList.add("hidden");
		loggedInMobile.classList.remove("hidden");
		loggedOutMobile.classList.add("hidden");
	} else {
		loggedIn.classList.add("hidden");
		loggedOut.classList.remove("hidden");
		loggedInMobile.classList.add("hidden");
		loggedOutMobile.classList.remove("hidden");
		avatar.setAttribute("src", localStorage.getItem("avatar"));
		nickname.textContent = localStorage.getItem("nickname");
		avatarMobile.setAttribute("src", localStorage.getItem("avatar"));
		nicknameMobile.textContent = localStorage.getItem("nickname");
	}
};

const loginToAccount = () => {
	if (localStorage.getItem("createdAccount") === "1") {
		loginPopup.classList.add("hidden");
		logoutFromAccount();
	} else {
		if (!loginPopup.classList.contains("hidden")) {
			loginPopup.classList.add("hide-login");
			setTimeout(() => {
				loginPopup.classList.remove("hide-login");
				loginPopup.classList.toggle("hidden");
			}, 500);
		} else {
			loginPopup.classList.toggle("hidden");
			loginPopup.classList.remove("hide-login");
		}
	}
};

const logoutFromAccount = () => {
	loggedIn.classList.toggle("hidden");
	loggedOut.classList.toggle("hidden");
	loggedInMobile.classList.toggle("hidden");
	loggedOutMobile.classList.toggle("hidden");
};

const createAccount = () => {
	if (loginPopupImg.value !== "" && loginPopupNickname.value !== "") {
		localStorage.setItem("createdAccount", 1);
		localStorage.setItem("avatar", `${loginPopupImg.value}`);
		localStorage.setItem("nickname", `${loginPopupNickname.value}`);
		loginToAccount();
		checkIfUserCreatedAccount();
	}
};

const changeSiteToProfile = () => {
	if (document.body.id === "index") {
		open("./diff/profile.html", "_self");
	} else {
		open("../diff/profile.html", "_self");
	}
};

addListeners();
checkIfUserCreatedAccount();
