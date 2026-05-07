class BankAccount {
  readonly userID: number;
  userName: string;
  private userBalance: number;

  constructor(userID: number, userName: string, userBalance: number) {
    this.userID = userID;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance += balance;
    console.log(`${this.userName} account balance is ${this.userBalance}`);
  }
}

const account1 = new BankAccount(123, "Rakibul", 200);
account1.addBalance(50);
