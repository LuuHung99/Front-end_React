import {maths} from './esm';
import myMathGiaiThua from './esm';


let number = 10;
let number2 = 20;
let sum = maths.tongSoHaiSo(number, number2);
if(maths.kiemTraChanLe(number)) {
  console.log(`${number} la so chan`)
} else {
  console.log(`${number} la so le`)
}
console.log(sum);

let gt = myMathGiaiThua(5);
console.log(`Giai thua cua 5 la: ${gt}`);