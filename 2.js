//Ternary Operator

let num=5;
let string = num >0 ? "positive":num<0? "negative": "zero";
console.log(string+"\n");

//Let is more preferred over let as it allows block-wise interpretation

function scope()
{
let i = 10;
    if(5>0){
        let i=5;
        console.log(i);}
    console.log(i); //if the 'let's were replaced with var, both the outputs would be 5 and 5. Also, if the initial declaration of i is ommitted, and only 
    //the declaration in the block is left, the value for i will be undefined as it is block-defined unlike 'var'
}
scope();
console.log("\n");

//const is read-only, meaning it will provide immutability to arrays unless heckled with individually
//Preventing data mutation?

const CONSTANT={
    pi:3.14
}
Object.freeze(CONSTANT);

CONSTANT.pi=2;
console.log(CONSTANT.pi);