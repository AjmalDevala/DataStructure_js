function reverse(string) {
    let reversed = ''
    for (let character of string) {
      reversed = character + reversed
    }
    return reversed
  }

  let s = "levelww"
  console.log(reverse(s));
  
  function reverseFn(s){
      return s.split('').reverse('').join('')
    }
    console.log(reverseFn(s));


    function palindrom(s){
       const pali =  reverseFn(s)
       return pali  === s 
    }

    console.log(palindrom(s))


    //sorting lenth and data 



    var key = 3;
var newKey = key % 26;
console.log(newKey);
var word = 'hello'
console.log(word.length);

for (let i = 0; i < word.length; i++) {
    let letterPosition = word.charAt(i) + newKey;
    if(letterPosition <= 122){
        word[i]
    }
    
}




// data template litteralse

const name = 'John';
console.log(`Hello, my name is ${name}`)

// splite the data 
const str1 = 'Hello World';
console.log(str1.split(' ')); // outputs ['Hello', 'World']

//uper case and lowercase

const str = 'Hello World';
console.log(str.toLowerCase()); // outputs 'hello world'
const str2 = 'Hello World';
console.log(str2.toUpperCase()); // outputs 'HELLO WORLD'

