/** @format */

const myRe = /d(b+)d/g;
const myArray = myRe.exec("cdbbdbsbz");

console.log(myArray);

const re1 = /zz/g;

const myArray1 = re1.exec("pizzazzsazz zzapato");
console.log(myArray1);
