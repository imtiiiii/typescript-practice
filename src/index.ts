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
interface GenericInterface<T> {
  name: string;
  spouce: T;
}
const mySpouce: GenericInterface<string> = {
  name: "imtiaz",
  spouce: "sara",
};
const mySpouce2: GenericInterface<true> = {
  name: "sara",
  spouce: true,
};
