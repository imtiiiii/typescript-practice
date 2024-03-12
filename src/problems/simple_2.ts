/*
You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.
*/
interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
}
type TCriterion<T> = keyof T;
type TValue<T> = T[keyof T];
function filterProducts<T>(
  products: T[],
  criterion: TCriterion<T>,
  value: TValue<T>
): T[] {
  const result: T[] = products.filter(
    (product) => product[criterion] === value
  );
  return result;
}
const products: IProduct[] = [
  { id: 1, name: "Cheese", price: 5, category: "Dairy" },
  { id: 2, name: "Milk", price: 3, category: "Dairy" },
  { id: 3, name: "Eggs", price: 2, category: "Produce" },
  { id: 4, name: "Bread", price: 4, category: "Bakery" },
];
console.log(filterProducts(products, "id", 3));

export {};
