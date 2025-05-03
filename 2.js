function multiply(array)
{
    var product = 1;
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array[i].length;j++)
        {
            product*=array[i][j];
        }
    }
    return product;
}

console.log("Product of the numbers in the array is: "+multiply([[1,2],[3,4],[5,6,7]]));