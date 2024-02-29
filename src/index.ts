type GenericType<T> = T;

const myNumber: GenericType<number> = 2;
// type UserType = {
//   name: string;
//   address: string;
// };
const imtiazInfo: GenericType<{
  address: string;
  name: string;
}> = {
  address: "123 Main St",
  name: "Imtiaz",
};
//Generic interface
interface GenericInterface<T, U = never> {
  name: string;
  spouse: T;
  children?: U;
}
const mySpouse: GenericInterface<string> = {
  name: "imtiaz",
  spouse: "sara",
};
const mySpouse2: GenericInterface<true> = {
  name: "sara",
  spouse: true,
};
const mySpouse3: GenericInterface<string, number> = {
  name: "sara",
  spouse: "imtiaz",
  children: 2,
};
