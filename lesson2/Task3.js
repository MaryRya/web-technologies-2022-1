const result1 = spinWords( "Привет от Legacy" );
const result2 = spinWords( "This is a test" );

function spinWords(string){
    let splitArray = string.split(" ");
    for (let i = 0; i < splitArray.length; i++)
    {
        if (splitArray[i].length >= 5)
        {
            splitArray[i]=splitArray[i].split("").reverse().join("");
        }
    }
    let res = splitArray.join(" ");
    return res;
}
console.log(result1);
console.log(result2);