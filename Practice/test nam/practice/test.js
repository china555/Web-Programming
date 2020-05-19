// var i =5
// for(var i =0;i<10;i++){
// }

// console.log(i)

// let number1;
// console.log(number1)
// number1 = 10
// console.log(number1)
// number1 += 10;
// console.log(number1)

// var wudhichart = {
//     firstName: "Wudhichart",
//     lastName: "sawangphol",
//     age: 30,
//     university: "Mahidol",
//     feesPaid: true
// };
// var aCandidate, aProperty;
// aCandidate = wudhichart;
// wudhichart.age = 40;
// console.log("Wudhichart is " + wudhichart.age + " years old.");
// console.log("Candidate is " + aCandidate.age + " years old.");
// wudhichart["feesPaid"] = false;
// console.log("Candidate up-to-date with fees: " + aCandidate["feesPaid"]);
// aCandidate["parking permit"] = "blue";
// console.log("Wudhichart's parking permit is " + wudhichart["parking permit"]);
// aProperty = "parking permit";
// console.log("Wudhichart's parking permit is " + wudhichart[aProperty]);
// aProperty = "age";
// console.log("Wudhichart is " + wudhichart[aProperty] + " years old.")

// var a = [1,2,3]

// var b = a;

// b.push(4);

// console.log(a)

// var n = 0;
// var x = 0;
// //While loop
// while (n < 10) {
//     n++;
//     x += n;
// }
// console.log("n = " + n +
//     ", x = " + x);


// function show(){
//     const arr = [1,2,3,4]
//     print(arr)
//     console.log(arr)
// }

// function print(arr){
//     arr[5] = 5;
//     console.log(arr)
// }

// show()

// async function first() {
//     // Simulate a code delay
//     let a = 1
//     setTimeout(function () {
//         a = 5
//         console.log(a)
//     }, 500)
//     return a;
// }

// // function second() {
// //     setTimeout(() => {
// //         console.log(2);
// //     }, 500)
// // }
// let a = first();
// // second();

// console.log(a)

// const timeoutId = setTimeout(function () {
//     console.log("Second");
//     clearTimeout(timeoutId);
// }, 0);
// setImmediate(() => {
//     console.log("Third");
// });

// let counter = 0;
// const intervalId = setInterval(() => {
//     if (counter === 10) {
//         clearInterval(intervalId);
//     }
//     console.log(`Counter: ${counter}`);
//     counter++;
// }, 100);
// console.log("First");


// function add(a,b){
//     return a+b
// }

// let a = add(5,6)
// let subtract = (a, b) => {
//     let result = a - b;
//     return result;
// };
// console.log(subtract)

const arr = [1,2,3.4]

arr[1] = arr[1]+2;

arr[1] = 2 +2