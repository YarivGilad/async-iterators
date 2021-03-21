// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }
//----------------------------------------------------
//  "generator function" creates "generator object"
//----------------------------------------------------
// let generator = generateSequence();
// // console.log(generator); // GeneratorFunctionPrototype
// // console.log(generator.toString()); // [object Generator]

//-------------------------
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

//-----------------------------
//   Generators are iterable
//-----------------------------
// for (let value of generator) {
//   console.log({value}); // 1, then 2
// }

//---------------------------------
// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3; // <-- yield
// }

// let generator = generateSequence();

// for (let value of generator) {
//   console.log({ value }); // 1, then 2, then 3
// }

// let sequence = [0, ...generateSequence()];

// console.log(sequence); // 0, 1, 2, 3
//
//---------------------------------
//             Iterables
//---------------------------------
/**
 *
 * `Symbol.iterator` is the protocol that makes native objects
 * like Array, String, Set, and Map `iterable`
 * by providing a hook into language features
 * like `for…of` loops and the `spread` operator.
 *
 * The `Symbol.iterator` protocol is very simple.
 * It includes:
 *  - `Iterable`: an object with a function whose key is `Symbol.iterator`
 *  - `Iterator`: the return value of the above function,
 *                used to obtain the values to be iterated.
 * An iterator is an object with a function named `next`
 * that returns an object like this one for example:
 *    ` {  value:123 ,  done:false  } `
 *    - `value` - any - the current item in the iteration;
 *    - `done` - boolean - true if the iteration has finished, false otherwise.
 *
 *  */
//---------------------------------
//       Built-in iterables
//---------------------------------

// function logIterable(input) {
//   if (!input[Symbol.iterator]) {
//     console.log(input, " is not an iterable object...");
//     return;
//   }

//   var iterator = itrbl[Symbol.iterator]();

//   for (let item of iterator) {
//     console.log(item);
//   }
// }
// // Array
// logIterable(["one", "two", "three"]);

// // string
// logIterable("abc");

// //number
// logIterable(123); // 123 " is not an iterable object..."

// //Set
// logIterable(new Set(['a','a','b','c','b','a','c','a']));

// Other built-in iterables are - Map, Generators, NodeList

//---------------------------------
//        Custom iterables
//---------------------------------
const range = (start = 0, stop, step = 1) => {
  if (stop === undefined) {
    [start, stop] = [0, start];
  }
  start -= step;
  return {
    [Symbol.iterator]: () => ({
      next: () => ({
        value: (start += step),
        done: start >= stop
      })
    })
  };
};
// for..of loop
for (let i of range(3, 10)) {
  console.log({ i });
}
// spread operator
console.log([...range(1, 10)]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([...range(10)]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8]
//---------------------------------------
//---------------------------------------
