const input = document.getElementById("input");
const depositSubmit = document.getElementById("depositBtn");
const withdrawSubmit = document.getElementById("withdrawBtn");
const withDrawBtn = document.getElementById("withdraw");
const depositBtn = document.getElementById("deposit");
const balance = document.getElementById("balance");
const output = document.querySelector(".output");

class Atm {
    constructor(money) {
        this.money = money;
        this.withdraw = function (withdrawAmount) {
            if (this.money > withdrawAmount) {
                this.money = this.money - withdrawAmount;
            }
            else {
                return;
            }
        }
        this.deposit = function (amount) {
            if (amount < 0) {
                alert("the amount must be greater than 0");
            }
            else {
                this.money = this.money + amount;
            }
        }
        this.balance = function () {
            return this.money;
        }
    }
}

const currentObj = new Atm(500);

withDrawBtn.addEventListener("click", (e) => {
    input.removeAttribute("disabled");
    input.value = "";
    input.setAttribute("placeholder", "enter the withdraw amount here");
    depositSubmit.style.display = "none";
    withdrawSubmit.style.display = "block";
});
withdrawSubmit.addEventListener("click", () => {
    const amount = input.value;
    currentObj.withdraw(Number(amount));
    const currBalance = currentObj.balance();
    output.textContent = `your current balance is ${currBalance}`;
})

depositBtn.addEventListener("click", (e) => {
    input.removeAttribute("disabled");
    input.value = "";
    input.setAttribute("placeholder", "enter the deposit amount here");
    withdrawSubmit.style.display = "none";
    depositSubmit.style.display = "block";
});
depositSubmit.addEventListener("click", () => {
    const amount = input.value;
    currentObj.deposit(Number(amount));
    const currBalance = currentObj.balance();
    output.textContent = `your current balance is ${currBalance}`;
})

balance.addEventListener("click", (e) => {
    e.preventDefault();
    output.textContent = `your current balance is ${currentObj.balance()}`;
});

