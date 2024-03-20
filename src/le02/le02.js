//Scoping
// let a = 1; // Global Scope
// function test() {
//     let b = 2; // Local Scope
//     console.log(a); // 1
//     console.log(b); // 2
// }
// test();
// console.log(a); // 1
// console.log(b); // ReferenceError: b is not defined


// Hoisting
// test();
// function test() {
//     console.log('Hello World');
// }
//
// test2(); // ReferenceError: test2 is not defined
// const test2 = () => {
//     console.log('Hello World');
// }

// Conditional Statements
// const a = 1;
// if (a === 1) {
//     console.log('a ist 1');
// } else if (a === 2) {
//     console.log('a ist 2');
// } else {
//     console.log('a ist weder 1 noch 2');
// }
// switch (a) {
//     case 1:
//         console.log('a ist 1');
//         break;
//     case 2:
//         console.log('a ist 2');
//         break;
//     default:
//         console.log('a ist weder 1 noch 2');
// }



// And Or
// const a = 1;
// const b = 2;
// if (a === 1 && b === 2) {
//     console.log('a ist 1 und b ist 2');
// }
// if (a === 1 || b === 3) {
//     console.log('a ist 1 oder b ist 3');
// }
// const c = a === 1 && b === 2;
// console.log(c);


// Ternary Operator
// const a = 1;
// const b = a === 1 ? 'a ist 1' : 'a ist nicht 1';
// const age = 25;
// const max = {
//     name: 'Max',
//     age,
//     isAdult: age >= 18 ? true : false
// }
