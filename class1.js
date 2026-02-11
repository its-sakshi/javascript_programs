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
