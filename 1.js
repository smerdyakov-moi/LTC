/*
    Does it matter?
*/
function addtoarray(arr,i){
    arr.push(9);
}

var array = [4,5,6,7,8];


console.log("Before:"+JSON.stringify(array));
addtoarray(array,9);
console.log("After :" +JSON.stringify(array));