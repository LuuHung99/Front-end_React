//Du lieu nam trong nhay don hoac nhay kep hoac backticks
// let myString = 'CHungs ta hoc js';
// let myString1 = "CHungs ta hoc js";
// let myString2 = `CHungs ta hoc js`;

// console.log(typeof myString);
// console.log(typeof myString1);
// console.log(typeof myString2);

//Trong backticks co the su dung bien hay bieu thuc tinh toan
// let myString3 = `Can bac hai cua 81 la: ${Math.sqrt(81)}`;
// console.log(myString3);

// let string = 'Hello js';
// let newString = string.toUpperCase();
// console.log(newString, string);
// let find = string.indexOf('js, 8');
// console.log(find);
// let string1 = string.replace('js', 'reactjs');
// console.log(string1);
// console.log(newString.concat(string1));

// let id1 = Symbol("id1");
// let id2 = Symbol("id2");
// console.log(id1 == id2);
// console.log(id1.description);

function resolveAfter2Seconds(x) { 
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();