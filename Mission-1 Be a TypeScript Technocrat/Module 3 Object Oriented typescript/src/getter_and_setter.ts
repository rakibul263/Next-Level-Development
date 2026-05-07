class BankAccount {
  readonly userID: number;
  userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }
  // setter
  set setBalance(amountNumber: number) {
    this.userBalance += amountNumber;
  }

  // getter
  getBalance() {
    return this.userBalance;
  }
}

const account1 = new BankAccount(123, "Rakibul", 200);
account1.setBalance = 100;
console.log(account1);

console.log(account1.getBalance());
