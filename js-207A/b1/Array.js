let fruits = ["orange","apple","mango"];
// console.log(fruits.length);
//Kieu du lieu : object
//Mang mot chieu

//Mang da chieu 
let myArray = [[1,2,3], ['a','b','c','d','e']];
//Kiem tra so luong cac phan tu nam trong mang
// console.log(myArray.length);
//truy cap vao mot phan tu nam trong mang
// nameArray[index_element];

// console.log(fruits[0]);

// console.log(myArray[1][2]);

let myNumber = [1,2,3,4,5,6,7,8,9,10,11];
// let limit = myNumber.length;
// for(let i=0; i < limit; i++){
//   console.log(myNumber[i]);
// };

// myNumber.forEach(function (value, index, array) { //tham so truyen vao foreach la mot function
//   console.log(value);
// });

//for : thay doi mang ban dau
//forEach chi view khong tham thay doi mang ban dau

// for (let i of myNumber) { //Tac dong nhanh den cac phan tu nhung khong truy cap dc vao key cua cac phan tu
//   console.log(i);
// }
//Moi hom vong lap co uu nhuoc diem khac nhau


//mutable - immutable

let number = [1,2,3,4,5,6,7,8,9];
// number.push(10);
// console.log(number);
// let lastNumber = number.pop();
// console.log(lastNumber, number);
// number.unshift(lastNumber);
// console.log(number);

// let firstNumber = number.shift();
// console.log(firstNumber);

// let find = number.indexOf(6);
// console.log(find);

// let find2 = number.lastIndexOf(6, 6);
// console.log(find2);

// let child = number.slice(3,-20);
// console.log(child, number);
// number.splice(3,3,[100,200,300]);
// console.log(number);

// let str = number.join('*'); //bien mang ve chuoi
// console.log(number, str);
// let str2 = number.toString(); //Bien mang ve chuoi nhung chuoi giong ban dau khong co dau *
// console.log(number, str2);

// if(Array.isArray(number)) {
//   console.log('OK');
// }
// else {
//   console.log('NO');
// }

//sap xem mang
let randomArr = [2,4,3,5,8,1,78,43,9,6];
// randomArr.sort(function(a, b) {
//   return b - a;
// });
// console.log(randomArr);

// let kq = randomArr.find( (item) =>item %2 == 0);
// console.log(kq);

// let kq1 = randomArr.filter( (item) => item %2 !== 0);
// console.log(kq1);

// let kq2 = randomArr.map( (item) => item %2 !==0);
// console.log(kq2);

let randomArr3 = [1,2,3,4,5,6,7,8,9];
//Tinh tong cac so chan nam trong mang

let tong = randomArr3.filter( item => item % 2 == 0)
                     .reduce((val, curent) => val + curent);
console.log(tong);