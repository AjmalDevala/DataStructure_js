function  reverse (s){
    return s.split('').reverse('').join('')

}

// const s= "joint"
// console.log(reverse(s))


const name = "ajmal "
console.log( `hello my name is ${name}`)



const data = "ajmal devala"
// console.log(data.split('  '))
console.log(data.toLowerCase(' '))
console.log(data.toUpperCase(' '))
console.log(data.concat())



function reverse(string) {
    let reversed = ''
    for (let character of string) {
      reversed = character + reversed
    }
    return reversed  
  }

const result = reverse("datadd")
console.log(result)
