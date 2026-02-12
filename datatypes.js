//find datatype 
let name="sakshi";
console.log(`type of ${name} is ${typeof(name)}`);
let roll=45;
console.log(`type of ${roll} is ${typeof(roll)}`);
let bool = true;
console.log(`type of ${bool} is ${typeof(bool)}`);
let bool1 = false;
console.log(`type of ${bool1} is ${typeof(bool1)}`);
let n ='hello';
console.log(`type of ${n} is ${typeof(n)}`);
let x= null;
console.log(`type of ${x} is ${typeof(x)}`);

//object creation
let obj = {
    item : "pencil",
    price : 40,
    show: function(){
        console.log(`the price of ${this.item} is ${this.price}`);
    }
};
obj.show();
