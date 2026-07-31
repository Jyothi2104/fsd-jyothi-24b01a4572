class BankAccount {
    accNo: number;
    name: string;
    bal: number;
    constructor(accNo: number, name: string, bal: number) {
        this.accNo = accNo;
        this.name = name;
        this.bal = bal;
    }
    deposit(amt: number) {
        this.bal += amt;
        console.log("Deposited:", amt);
    }
    withdraw(amt: number) {
        if (amt <= this.bal) {
            this.bal -= amt;
            console.log("Withdrawn:", amt);
        } else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance() {
        console.log("Balance:", this.bal);
    }
}
let acc = new BankAccount(1, "Jyothi", 500000);
acc.deposit(2000);
acc.withdraw(1500);
acc.displayBalance();