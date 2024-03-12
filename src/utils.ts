interface IAllInfo {
  name: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  age: number;
}
type Name = Pick<IAllInfo, "name">;
type NameAndAge = Pick<IAllInfo, "name" | "age">;
type FullName = Omit<IAllInfo, "name" | "age">;
type Age = Omit<IAllInfo, "name" | "firstName" | "lastName" | "middleName">;
type NameWithMiddleName = Required<IAllInfo>;
type NameWithMiddleNameAndAge = Required<
  Pick<IAllInfo, "name" | "middleName" | "age">
>;
//------------------------------------------------

interface Task {
  name: string;
}
const newTask: Readonly<Task> = {
  name: "Clean the house",
};
// newTask.name = "Buy milk"; //! Cannot assign to 'name' because it is a read-only property.
//------------------------------------------------
interface IRecords {
  a: number;
  b: number;
  c: number;
}
//? you can use the Record utility type to create a new type with a set of properties that all have the same type.
type ThreeNumbers = Record<"a" | "b" | "c", number>;
