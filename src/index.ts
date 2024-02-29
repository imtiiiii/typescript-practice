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
