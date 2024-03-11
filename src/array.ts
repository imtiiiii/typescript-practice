const arr: number[] = [1, 2, 3];
type tupleArray = [number, number, number];
const arr2: tupleArray = [1, 2, 5];
// arr2[2]= 'a';
//! Type 'string' is not assignable to type 'number'.
// arr2[12]= 1;
// Tuple type '[number, number, number]' of length '3' has no element at index '12'.
export {};