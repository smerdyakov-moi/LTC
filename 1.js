//objects
var obj ={
    'apple has': "pony",
    pet:'problem',
    19:'age'
} // Unless it's a number the value of a property should be used with quotation marks


function property_own(checkprop){
    if(obj.hasOwnProperty(checkprop)){
        return obj[checkprop];
    }else { return 'Object not found';}
}

console.log(property_own('pet')); // the property should be in quotations, more specifically the checkprop[ONLY IF IT'S A STRING]

//Nested objects . In the case of objects inside array, just think of it as strings, like [{},{},{}]
var computer = {
    'C': {
        'Users': {
            'Pragyan Khati': 'Illegal documents',
            'Arimani Shah': 'Legal documents'
        },
        'Windows':{
            'Cache': 'Stores cache for faster running',
            'Appdata': 'Stores data for apps'
        }
    },
    'D':{
        'Games':{
            'Rockstar Games': 'GTA V, RDR2',
            'Naught Dog': 'The Last of Us'
        },
        'Films':{
            Western: 'The Good, Bad, and The Ugly',
            Romance: 'The Brokeback Mountain'
        }
    }
}

var Music ={
    '1':{
        "artist": 'Cigarettes after Sex',
        "title": 'Nothing\'s gonna hurt you',
        "release_year": 2000,
        "formats": ["mp3","wav",".ovw"],
        "genre":'depressed-core'
    }, 
    '2':{
        "artist": 'Pritam',
        "title": 'Dil Ke Mez',
        "release_year": 2004,
        "formats": ["mp3","wav",".ovw"],
        "genre":'hopeful-romantique'
    }
}

var copy_forcomp = JSON.parse(JSON.stringify(Music));

/*//Function to update the music record
function update_music(id){
    if(copy_forcomp[id]['artist']=="Pritam"){
        delete copy_forcomp[id]['artist'];
        copy_forcomp[id]['formats'].push('sal')
    }
}


update_music('2');

console.log(copy_forcomp);*/

//Profile Lookup
var arrayx =[
    {
        'Name':'Pragyan Khati',
        'Age':20,
        'Sex':'Male'
    }
    ,
    {   
        'Name': 'Aveesh Khan',
        'Age':20,
        'Sex': 'Undefined'
    }
]

function lookup(name,data)
{
    for(var i=0;i<2;i++)
    {
        if(arrayx[i]['Name']===name){
            return arrayx[i][data] || "No property";
        }
    }
    return "No such name found";
}

console.log(lookup('Pragyan Khati','Ages'));
