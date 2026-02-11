//first and last digit of a 2 digit number
let a =47;
let first =Math.floor(a/10);
console.log(`first digit of a 2 digit number${a} is ${first}`);
console.log(`last digit of a 2 digit number${a} is ${a%10}`);

//first and last digit of a 3 digit number
let b=567;
let f=Math.floor(a/100);
console.log(`first digit of a 3 digit number${a} is ${f}`);
console.log(`last digit of a 2 digit number${a} is ${a%100}`);

//swapping using third variable 
let c=5;
let d=6;
console.log(`before swapping c=${c} and d=${d}`);
c= c+d;
d=c-d;
c=c-d;
console.log(`after swapping c=${c} and d=${d}`);

//swapping without third variable
console.log(`before swapping c=${c} and d=${d}`);
c=c^d;
d=c^d;
c=c^d;
console.log(`after swapping c=${c} and d=${d}`);

//swapping without third variable
console.log(`before swapping c=${c} and d=${d}`);
let temp=c;
c=d;
d=temp;
console.log(`after swapping c=${c} and d=${d}`);

//arithmetic operation
let a =5;
let b =2;
console.log(`addition of ${a} and ${b} is ${a+b}`);
console.log(`subtraction of ${a} and ${b} is ${a-b}`);
console.log(`multiplication of ${a} and ${b} is ${a*b}`);
console.log(`division of ${a} and ${b} is ${a/b}`);
console.log(`modulus of ${a} and ${b} is ${a%b}`);

//area and perimeter of shapes
let l=7;
let b=3;
console.log(`area of rectangle with length ${l} and breadth ${b} is ${l*b}`);
console.log(`perimeter of rectangle with length ${l} and breadth ${b} is ${2*(l+b)}`);

let s =4;
console.log(`area of square with sides ${s} is ${s*s}`);
console.log(`perimeter of square with sides ${s} is ${4*s}`);

let pi=3.14;
let r=5;
console.log(`perimeter of circle with radius ${3} is ${2*pi*r}`);
console.log(`area of circle with radius ${3} is ${pi*r*r}`);

let h=6;
let a =2;
let c = 1;
let b=3;
console.log(`area of triangle with base ${b} and height ${h} is ${b*h/2}`);
console.log(`perimeter of triangle with sides ${a}, ${b} and ${c} is ${a+b+c}`);
