const depositInput = document.querySelector("#deposit-amount");
const emailInput = document.querySelector("#email-input");
const clearBtns = document.querySelectorAll(".deposit__clear-btn");
const valueButtons = document.querySelectorAll(".deposit__btn");
const submitBtn = document.querySelector(".deposit__submit-btn");

function setValueOfDepositBasedOnBtnValue() {
	depositInput.value = this.id;
}

function clearInputOnBtn() {
	this.previousElementSibling.value = "";
}

const addDolarAfterNumber = () => {
	const currentValue = depositInput.value;
	depositInput.value = currentValue + "$";
};

const addValueToBalance = () => {
	// console.log("Funkcja addValueToBalance wywołana");
	if (depositInput.value !== "" && emailInput.value !== "") {
		const currentBalanceOfAcount = parseFloat(
			localStorage.getItem("Balance").slice(0, -1)
		);
		// console.log(currentBalanceOfAcount);
		const amountToAddToBalance = (parseFloat(depositInput.value) + currentBalanceOfAcount);
		// console.log(amountToAddToBalance);
		// console.log(localStorage.getItem("Balance"));
        localStorage.setItem("Balance", amountToAddToBalance + "$")
        setBalance();
		// console.log(localStorage.getItem("Balance"));
	}
};

const addListeners = () => {
	valueButtons.forEach((btn) => {
		btn.addEventListener("click", setValueOfDepositBasedOnBtnValue);
	});

	clearBtns.forEach((btn) => {
		btn.addEventListener("click", clearInputOnBtn);
	});

	// depositInput.addEventListener("change", addDolarAfterNumber);
	submitBtn.addEventListener("click", addValueToBalance);
};

addListeners();
