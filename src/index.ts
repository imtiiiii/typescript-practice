type GenericType<T> = T;
type UserType = {
  name: string;
  address: string;
};
const myNumber: GenericType<number> = 2;
const imtiazInfo: GenericType<UserType> = {
  address: "123 Main St",
  name: "Imtiaz",
};
