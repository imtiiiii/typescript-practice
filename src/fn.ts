function sum(a: number, b: number) {
  return a + b;
}
const summed = sum(1, 2);
// console.log(summed);
const arrowSum = (a: number, b: number): string => "" + a + b;
const arrowSummed = arrowSum(1, 98);
// console.log(arrowSummed);
interface Person {
  name: string;
  balance: number;
  getBalance: () => number;
  addBalance: (amount: number) => void;
}
const newPerson: Person = {
  name: "Imtiaz",
  balance: 1000,
  getBalance() {
    return this.balance;
  },
  addBalance(amount) {
    this.balance += amount;
  },
};
newPerson.addBalance(1);
// console.log(newPerson.getBalance());

