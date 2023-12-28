type userObject = {
  name: string;
  age: number;
} & ({ married: true; wife: string } | { married: false; wife?: never });
//* The above is a union type of two objects, one with a wife property and one without.
//* if married user must give wife property, if not married wife property is not allowed.
const user: userObject = {
  name: "John",
  age: 30,
  married: true,
  wife: "Jane",
};
const user2: userObject = {
  name: "Jane",
  age: 30,
  married: false,
};
console.log(user);
console.log(user2);
