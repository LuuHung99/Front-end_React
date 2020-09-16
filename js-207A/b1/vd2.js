// Ham trong js

// function sumNumber(n1,n2) {
//   // check n1 phai la so chan - n2 phai la so le
//   // phai thoa man moi tinh tong - khong thoa man tra ve null
//   // if(kiemTraChanLe(n1) && !(kiemTraChanLe(n2))) {
//   //   return n1 + n2;
//   // }
//   //Sai vi kiemTraChanLe là function expression : phai dươc dinh nghia truoc khi goi ra su dung
//   return null;
// }
// let result = sumNumber(4,5);
// console.log(result);

// //function expression

// let kiemTraChanLe = function kiemTraChanLe(number) {
//   if(number %2 == 0) {
//     return true;
//   }
//   return false;
// }

// let number = 99;
// if(kiemTraChanLe(number)) {
//   console.log(`${number} la so chan`);
// }
// else {
//   console.log(`${number} la so le`);
// }

// //nested function
// function tinhDienTichHinhThanh(a,b,h) {
//   //Tinh tong hai day
//   function tongHaiDay() {
//     return a + b;
//   }
//   //Tinh tich 
//   function nhanVoiChieuCao() {
//     return tongHaiDay()*h;
//   }
//   function chiaDoiKetQua() {
//     return nhanVoiChieuCao()/2;
//   }
//   return chiaDoiKetQua();
// }
// let dt = tinhDienTichHinhThanh(2,3,4);
// console.log(dt);

//Arrow function
// let functionName = (var1, var2) => {
//   //Noi dung function
// }

// let totalNumber = (a,b) => a + b;
// console.log(totalNumber(10,20));

//Tinh tong so chinh phuong tu 1 - 100
// let kiemTraSoChinhPhuong = (n) => {
//   let val = Math.sqrt(n);
//   if(Number.isInteger(val)) {
//     return true;
//   }
//   return false;
// }
// let tinhTongCacSoChinhPhuong = (x,y) => { // x=1; y=100
//   //Tinh tong SCP 1 -100;
//   let total = 0
//   for(let i = x; i <= y; i++) {
//     if(kiemTraSoChinhPhuong(i)) {
//       total += i;
//     }
//   }
//   return total;
// }

// let tong = tinhTongCacSoChinhPhuong(1,100);
// console.log(tong);

// let testArrowFn = a => b => a * b;
// let kq = testArrowFn(4)(5);
// console.log(kq);

// function testArrowFn2(a) {
//   function testArrowFn3(b) {
//     return a + b;
//   }
//   return testArrowFn3;
// }

// let kq2 = testArrowFn2(3)(4);
// console.log(kq2);

//Viet ham arrow function tinh giai thua cua mot so bat ky

// let giaiThua = (n) => {
//   if(n < 0) {
//     return 0;
//   }
//   if(n == 0 || n == 1) {
//     return 1;
//   }
//   let gt = 1;
//   for(let i = 1; i <= n; i++) {
//     gt *= i;
//   }
//   return gt;
// }

// let tinhGiaiThua = giaiThua(5);
// console.log(tinhGiaiThua);

// let  u = 20;
// let t = '3ưewew'; //'sdada33dfdsfs' //Không được
// t = parseInt(t); // Ép kiểu từ đầu chuỗi đến cuối chuỗi
// console.log(u + t);

// let m = '120'; // chuoi so : number string

let myNumber = 2020;
myNumber = myNumber.toString();
let myNumber2 = 2;
console.log(myNumber + myNumber2);
console.log(typeof myNumber);
