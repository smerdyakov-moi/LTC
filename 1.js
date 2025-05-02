/*
    Does it matter?
*/

//objects

var object = {
    'Name of': 'Pragyan',
    'age': 16,
    'sex': 'can\'t find',
    12: 'minor'
}

object.age = 20;
console.log(object.age);
//to add properties:
object.new_property = "assigned";
//to delete properties:
delete object.new_property;

//Can also be used for looking up because it does function as a dictionary
console.log(object['sex']); //here, the 'sex' can be replaced with any other property listed in the object

var obj ={
    "apple has": "pony",
    pet: "kitten",
    age: 19
}

function property_own(checkprop){
    if(obj.hasOwnProperty(checkprop)){
        return obj[checkprop];
    }else { return 'Object not found';}
}

console.log(property_own('apple has')); // the property should be in quotations, more specifically the checkprop[ONLY IF IT'S A STRING]