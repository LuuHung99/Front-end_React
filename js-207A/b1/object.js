// Lam viec voi object trong js

// let person = {
//   name : 'John',
//   age : 21,
//   address : 'Ha Noi',
//   gender : 'Male',
//   start: function(place) {
//     return `${this.name} o tai ${place}`;
//   },
//   stop : (place) => {
//     return `${this.name} truoc kia o ${place}`;
//   }
// };
// //Truy cap vao thuoc tinh hoac phuong thuc
// let namePerson = person.name;
// console.log(namePerson);
// console.log(person.start('HCM'));
// console.log(person.stop('DN'));

// let cat = {
//   name: 'Tom',
//   color: 'black',
//   age: 40
// };
// for(let i in cat) { //for in danh cho object, for of danh danh cho array
//   console.log(cat[i], i);
// }

const student = {name: 'Van Teo', age: 21};
//Bo xung them thuoc tinh vao object
student.name = 'hung';
student.email = 'leh@teo';
student.address = 'Ha Noi';
console.log(student);

//ket hop mang voi object
let products = [
  {
    id: 1,
    name: 'Iphone',
    money: 400,
    img: 'https://i.pinimg.com/736x/5b/68/9d/5b689d749cc1e4a00c53df96dd8db5f4.jpg'
  },
  {
    id: 2,
    name: 'SamSung',
    money: 500,
    img: 'https://vnn-imgs-f.vgcloud.vn/2019/11/25/10/lo-anh-samsung-galaxy-s11.jpg'
  },
  {
    id: 3,
    name: 'Apple',
    money: 600,
    img: 'https://image.viettimes.vn/666x374/Uploaded/2020/aobohun/2018_01_19/aaa_lmex.jpg'
  },
];

let total = 0;
products.map(item => {
  total += parseInt(item.money);
});
console.log(total);