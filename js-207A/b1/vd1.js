//Tim kieu cac kieu trong js
// var number = 10;
// let name = 'Van teo';
// //Kieu du lieu

// console.log(typeof number);
// console.log(typeof name);
// var number = 10;
// let name = 'Van teo';
// //Kieu du lieu
// let checking = true;
// let mtAge

// console.log(typeof number);
// console.log(typeof name);
// console.log(typeof checking);
// console.log(typeof mtAge);

//Tu khoa const : dinh nghia hang so
// const person = {name: 'hung', age: 20};
// person.email = 'hung@gmail.com';
// console.log(person);

// var myWorks = 'DEV';
// var myWorks = 'Hello';
// console.log(myWorks);

// let myAddress = 'Ha Noi';
// let myAddress = 'Nam Dinh';//Khong duoc phep ghi de

// console.log(a);
// var a = 'test';
// console.log(a);

//Tu khoa var: ton tai con tro this tro vao chinh bien do - tu khoa let thi ko

// let yourAge = 20;
// if(yourAge != 20) {
//   console.log('OK');
// }
// else {
//   console.log('CC');
// }

// for(let i = 1; ;i ++){
//   console.log(i);
// }

// let j = 10;
// while(j < 30) {
//   console.log(j);
//   j++;
// } // min-max : 0 - n
// do {
//   console.log(j);
//   j++;
// }while(j < 20);

// let i = 1;
// while(i <= 100){
//   if(i%2 == 0){
//     console.log(i);
//   }
//   i++;
// }

// for(let i = 1; i <= 100; i++)
// {
//   if(100 %i == 0) {
//     console.log('100 kp la so nguyen to');
//     return; 
//   }
// }


// let n = 1;
// let m = 2;
// let d = 0;
// for(let i = 1; i <= 8; i++) {
//   if(m <= 100) {
//     n = i;
//     m = i+1;
//     d = n+m;
//     console.log(n,m,d);
//   }
// }

function sumNumber(a,b) {
  return a+b;
}

let sum = sumNumber(1,2);
console.log(sum);