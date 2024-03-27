// // function info(name, age){
// //   return `Hallo ich heiße ${name} und bin ` + age + ' Jahre';
// // }
// //
// //
// // console.log(info('Maxi', 25));
// // console.log(info('Patric', 30));
// // console.log(info('Moritz', 24));
//
//

function execute(a, b, operation) {
  const c = a/b;
  return operation(a, b, c)
}

function op(x, y, z) {
  console.log(`Values ${x} y=${y} z=${z}`);
}
setTimeout(done, 5000);

function done() {
  execute(1, 2, op);
}

// // const quadrat = (num) => num * num;
// //
// // console.log(quadrat(5));
//
// // function myFunc(a, b) {
// //     console.log(a + b);
// // }
// //
// // myFunc(12, 34);
// //

// // const arrFunc = (a, b) => {
// //     return a + b;
// // };

// // console.log(arrFunc(50, 16));
//
//info('Maxi', 27);

// function info(name, age){
//   return `Hallo ich heiße ${name} und bin ` + age + ' Jahre';
// }
//
//
// console.log(info('Maxi', 25));
// console.log(info('Patric', 30));
// console.log(info('Moritz', 24));
//
// const infoo =(name,age)=>{
//   const y = 5;
//   console.log(y);
//   return `Hallo ich heiße ${name}und bin `+ age +` Jahre`;
// }
// x
const print = console.log;
print('XYZ')
let logFunc;
if(server === true){
  logFunc = writeToServer;
} else {
  logFunc = console.log
}
logFunc('Hello world')
//
//
