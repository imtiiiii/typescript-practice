/*
Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/
interface ISaveNumbers {
  [key: number]: boolean;
}
interface ILongShortArr {
  [key: string]: number[];
}
//* The following function is not needed
// function getLongShortArr(arr1: number[], arr2: number[]): ILongShortArr {
//   let shortArr: number[] = [];
//   let longArr: number[] = [];
//   if (arr1.length === arr2.length) {
//     shortArr = arr1;
//     longArr = arr2;
//   } else if (arr1.length > arr2.length) {
//     shortArr = arr2;
//     longArr = arr1;
//   } else {
//     shortArr = arr1;
//     longArr = arr2;
//   }
//   return { shortArr, longArr };
// }
function compareArrays(arr1: number[], arr2: number[]): number[] {
  const saveNumbers: ISaveNumbers = {};
  const result: number[] = [];
  // const { shortArr, longArr } = getLongShortArr(arr1, arr2);
  //? Save the numbers of the shorter array
  for (let i = 0; i < arr2.length; i++) {
    saveNumbers[arr2[i]] = true;
  }
  //? Compare the numbers of the longer array with the shorter array
  for (let i = 0; i < arr1.length; i++) {
    if (saveNumbers[arr1[i]]) {
      result.push(arr1[i]);
    }
  }
  return result;
}
const arr1: number[] = [8, 3, 5, 2, 6];
const arr2: number[] = [5, 3, 6, 8, 2];
console.log(compareArrays(arr1, arr2)); // [2, 4]
