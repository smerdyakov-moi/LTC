//Template Literals
const person={
    Name:'Pragyan',
    Age: 20
}

// '' disempowers need of escape characters
console.log(`Hello, my name is ${person.Name}! 
I am ${person.Age} years old. `);

//Coding-Exercise

const result={
    success:["max-length","no-amd","prefer-arrow-functions"],
    failure:["no-var","var-on-top","linebreak"],
    skipped:["id-blacklist","no dup-keys"]
}
function makelist(arr)
{
    new_Arr=[]
    for(var i=0;i<arr.length;i++){
        new_Arr.push(`<li class="text-warning>${arr[i]}</li>`)
    }
    return new_Arr
}

const displayarray = makelist(result.failure);
console.log(displayarray)

//Simple Fields
var object=(name,age,sex)=>({name,age,sex})
console.log(object('Pragyan',13,'Male'))

//Declarative Functions
const bike ={
    gear:2,
    setgear(newgear){ //setgear: function(newgear)
        this.gear=newgear
    }
}
bike.setgear(4);
console.log(bike.gear);

//Class Syntax

class Animal{
    constructor(name){
        this.name=name;
    }
    //getter
    getter (){
        return this.name;
    }
    setter(newname){
        this.name=newname;
    }
    
}

const obj =new Animal('Lion');
console.log(obj.getter())

