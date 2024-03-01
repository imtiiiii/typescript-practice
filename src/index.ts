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
// Generic function
// type AppendTypeGeneric<T, Y, V> = T & { V + '': Y };
type AppendTypeGeneric<T, Y, V extends string> = T & { [key in V]: Y };
const myInfo = {
  name: "imtiaz",
  age: 30,
  address: "123 Main St",
};
const fatherName = "shahariar";
const motherName = "shahida";
function fullInfo(
  partialInfo: GenericType<typeof myInfo>,
  infoToAppend: string,
  key: string
): AppendTypeGeneric<typeof myInfo, string, string> {
  return { ...(partialInfo as any), [key]: infoToAppend };
}
// console.log(fullInfo(myInfo, fatherName, "fatherName"));
// console.log(fullInfo(myInfo, motherName, "motherName"));

const config = {
  name: "mac",
  ram: "16gb",
  chip: "m1",
};
type AllowedKeyType = keyof typeof config;
function updateConfig<T extends AllowedKeyType, Y extends typeof config>(
  config: Y,
  key: T,
  value: (typeof config)[T]
) {
  return { ...config, [key]: value };
}
console.log(
  updateConfig({ chip: "m2", name: "new mac", ram: "16gb" }, "ram", "32gb")
);
function configGetter<T extends typeof config, k extends keyof typeof config>(
  item: T,
  key: k
) {
  return item[key];
}
console.log("getter",configGetter(config, "ram"));
