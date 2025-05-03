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


const apple=function(a,b){
    return a+b;
}
console.log(apple(5,6))
//arrow function
const arrow=(arr1,arr2)=>arr1.concat(arr2);
console.log(arrow([1,2],[3,4]));

//IIFE, Immediately Invoked Function Expresssion is usually enforced for data encapsulation, avoiding scope corruption within the code

const addition = (function(){
    return function addition(num,val=1){
        return num+val;
    };
})();
// Why does the above code have to be written like that ?
console.log(addition(5,2));
console.log(addition(5));

//Rest operator
function rest(...array)
{   
    var s=0;
    for(var i=0;i<array.length;i++){
        s+=array[i];
    }
    return s;
}
console.log(rest(1,2,3,4,5))

//Spread operator - to make a copy
let arr1=[1,2,3,4];
let arr2=[];
arr2=arr1; //This won't make a copy. Thus, to avoid that..
arr2=[...arr1]; // This helps make a copy, so when we edit the contents of 'arr1', the content of arr2 remains the same
arr1[2]=19;
console.log(arr2); 