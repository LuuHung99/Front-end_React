const kiemTraChanLe = (n) => {
  if(n %2 === 0) {
    return true;
  }
  return false;
}

const tongSoHaiSo = (a,b) => {
  return a + b;
}

//export 2 function de cho nhung file khac co the su dung dc
const giaiThua = (n) => {
  let gt = 1;
  for(let i=2; i<=n; i++) {
    gt*= i;
  }
}

export default giaiThua;
export const maths = {
  kiemTraChanLe,
  tongSoHaiSo
}