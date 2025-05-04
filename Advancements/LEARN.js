let arr = [1,2,3,4];
arr.forEach(function(val){
    console.log(val+"hello")
})

let new_arr=[]
new_arr=arr.filter(function(i){ // arr.map is only used to directly copy the elememnts or manipulate 
    //arr.find to return the first item you're looking for. Will return undefined if nothing found
     if(i>2){return i}
})
console.log(new_arr)