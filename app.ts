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

const move = (pos: number, roll: number): number => {
  return pos + roll * 2;
};
