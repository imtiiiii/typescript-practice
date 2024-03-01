type Car = {
  brand: string;
  year: number;
};

// Make properties of Car type readonly
type ReadonlyCar = {
  readonly [Key in keyof Car]: Car[Key];
};

// Usage
const readonlyCar: ReadonlyCar = {
  brand: 'Toyota',
  year: 2022,
};

// This will give a compilation error
// readonlyCar.brand = 'Honda'; // Cannot assign to 'brand' because it is a read-only property.
const writableCar: Car = readonlyCar;
writableCar.brand = 'Honda'; // No error
