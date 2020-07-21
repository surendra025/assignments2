/**************Q1************* */

let minutes = 5
//let minutes = 3
//let minutes = 2
function MinutestoSeconds() 
{
  return Math.floor(minutes * 60);
}

console.log(minutes+ " minutes :",MinutestoSeconds())

/**************Q2************ */


    var a = 85;
    var b = 4;
    var c = (a/b);

    if (a%b==0)
    {
        console.log(c,true);
    }

    else{
        console.log(c,false);
    }

    
    /************Easy************ */

        /************Q1************ */

    function instances(a,b)
    {
        var c = 0
        for (let start=0; start < a.length; start++)
        {
            if(a.charAt(start) == b)
            {
            c=c+1;
            }
        }
        return c;

    }

    console.log(instances('reddy','d'));


            /************Q2************ */

function num(n1)
{
    var sum = 0;
    for (var i=1;i<=n1;i++)
    {
        sum +=i;
    }
    return sum;
}

console.log(num(13))
    

    
            /************Q3************ */

     function Vowels(string, replaceWith)
      {
       return string.split(/[aeiou]/).join(replaceWith)
       }
              
        console.log(Vowels('hello', '2'));  


/************Medium************ */

 /************Q1************ */

 function reverseString(str) 
 {
     let reversedString = ''
     for (let i = str.length - 1; i >= 0; i--) {
     reversedString += str[i]
 }
    return reversedString
  }
  let car = 'hello how are you'
  console.log(car + reverseString(' hello '))
 // reverseString("hello");
  
