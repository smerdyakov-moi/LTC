//Number between a given range

function randomrange(min,max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(randomrange(4,8));