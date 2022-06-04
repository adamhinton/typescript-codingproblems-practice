"use strict";
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]
// take in two ints
// a, b   --- a < b
// const solution = nummber[];
// for loop from a to b
// for each, add i to solution
// return solution;
// ret array of all ints bw parameters exclusive
// const between = (a: number, b: number): number[] => {
//   const solution: number[] = [];
//   for (let i = a; i <= b; i++) {
//     solution.push(i);
//   }
//   return solution;
// };
// *************************************************************************************
// Terminal game move function
// In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
// Example:
// move(3, 6) should equal 15
// take in initial position and die roll
// mult die rol * 2 and add that to position
// return total
// const move = (pos: number, roll: number): number => pos + roll * 2;
// *************************************************************************************
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
// For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
// All inputs will be integers. Please return an integer. Round down.
// PLAN:
// return integer (round down)
// find savingsPerBottle (normPrice * (discount / 100))
// return hol / savingsPerBottle (I think)
// const dutyFree = (normPrice: number, discount: number, hol: number): number => {
//   const savingsPerBottle = (normPrice * discount) / 100;
//   return Math.floor(hol / savingsPerBottle);
// };
// *************************************************************************************
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example(Input => Output):
// 348597 => [7,9,5,8,4,3]
// 0 => [0]
// PLAN:
// take in non-neg num
// const solution = []
// loop over its digits backwards (convert to string)
// for each, push digit to solution
//return solution
// const digitize = (n: number): number[] => {
//   const solution: number[] = [];
//   const numberString = String(n);
//   for (let i = numberString.length - 1; i >= 0; i--) {
//     const currentDigit = Number(numberString[i]);
//     solution.push(currentDigit);
//   }
//   return solution;
// };
// *************************************************************************************
// Your task is to find the first element of an array that is not consecutive.
// By not consecutive we mean not exactly 1 larger than the previous element of the array.
// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null2.
// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// take in array
// loop over array starting at index 1
// for each: if arr[i] - 1 !== arr [i-1] return arr[i]
const firstNonConsecutive = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - 1 !== arr[i - 1]) {
            return arr[i];
        }
    }
    return null;
};
