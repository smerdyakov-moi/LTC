function solution(str){
    let [...arr]=str;
    let x=0;
    let new_arr=[];
    
    for(var i=0;i<((arr.length%2==0)? arr.length: arr.length-1);i+=2){
    new_arr[x]=arr[i]+arr[i+1];
    x++;
    }
    if(arr.length%2==0) {return new_arr} else{new_arr.push(arr[arr.length-1])}
    return new_arr
    
}

console.log(solution("abcdefghi"))