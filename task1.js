// int to string
let a = "10";
let changeA = parseInt(a);
console.log(typeof changeA);
// string to int
let b = 10;
let changeB = b.toString();
console.log(typeof changeB);
// to upper case
let d = "hello";
let changeD = d.toUpperCase();
console.log(changeD);
// to fixed
let f = 10.56789;
let changeF = f.toFixed(2);
console.log(changeF);
// function match
let g = "hello world";
let changeG = g.match(/Hello/g); // case sensitive
console.log(changeG);
let changeG1 = g.match(/hello/g);
console.log(changeG1);
// index of
let h = "hello world";
let changeH = h.indexOf("l",5);
console.log(changeH);
let changeH1 = h.indexOf("l");
console.log(changeH1);
// pop array
let i = [1,2,3,4,5];
let changeI = i.pop();
console.log(i);
// push array
let j = [1,2,3,4,5];
let changeJ = j.push(6);
console.log(j);
// shift array
let k = [1,2,3,4,5];
let changeK = k.shift();
console.log(k);
// splice array
let l = [1,2,3,4,5];
let changeL = l.splice(2,2,6,7);
console.log(l);
// slice array
let m = [1,2,3,4,5];
let changeM = m.slice(2,4);
console.log(changeM);
