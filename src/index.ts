//* SCHEMA BUILDING
//* TAKE 2 SEPARATE INTERFACES AND MERGE THEM INTO ONE
//* ONE SCHEMA WILL BE PROPERTIES OF THE CLASS AND THE OTHER WILL BE METHODS OF THE CLASS
interface IUser {
  firstName: string;
  lastName: string;
}
interface IMethods {
  getFullName(): string;
}
interface IUserSchema<TData, TMethods> {
  data: TData;
  methods: TMethods;
}
type Model = IUserSchema<IUser, IMethods>;
class User implements Model {
  data: IUser;
  methods: IMethods;
  constructor(data: IUser) {
    this.data = data;
    this.methods = {
      getFullName() {
        return `${data.firstName} ${data.lastName}`;
      },
    };
  }
}
const userModel = new User({ firstName: "John", lastName: "Doe" });
