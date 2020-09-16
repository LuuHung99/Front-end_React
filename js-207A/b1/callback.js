// console.log('A');
// //setTimeout là một hàm sử lý bất đồng bộ - web api của trình duyệt. Sử lý 1 công việc trong một khoảng thời gian quy định
// setTimeout( () => {
//   console.log('B');
// },1000);
// console.log("C");



// function eatRice(cb) {
//   setTimeout( () => {
//     console.log('An com xong roi');
//     //cb: tham so - function: chinh la callback function
//     //Thuc thi cho callback
//     if(typeof( cb) === 'function'){
//       cb();
//     }
//   },2000)
// }

// function learn(){
//   setTimeout( () => {
//     console.log('Di hoc bai');
//   })
// }

// const myCallback = () => {
//   //goi ham hoc bai ow day
//   learn();
// }
// //Theo logic an com -> hoc bai ->
// eatRice(myCallback);
// // learn();

//setTimeout : Thực hiện 1 lần
//setInterval : Thực hiện mãi mãi

//Promise
const myPromise  = new Promise( (result,reject) => {
  //resove: Thông báo kết quả sử lý thành công của những tác vụ sử lý bất đồng bộ nằm bên trong này
  //reject: Thông báo kết quả sử lý thất bại cảu những tác vụ xủ lý bất đồng bộ nằm bên trong này
  setTimeout(() => {  
    if(1 + 1 == 3) {
      result({message:'done'});
    } else {
      reject({message:'not done'});
    }
  },1000);
});
// console.log(myPromise);
myPromise.then(data => console.log(data)) //Nhạn ket qua tu resove
         .catch(err => console.log(err)); // Nhan ket qua tu reject
//Gia sử có 1 tiến trình khác cần đổi kết quả của Promise trả vể để sử ly tiếp công việc khác thì làm ntn?
//Đi lấy kết quả của Promise trả về
