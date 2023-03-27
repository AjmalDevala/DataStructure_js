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
      return reversed = character + reversed
    }
  
  }

const result = reverse("hamme")
console.log(result)



function reverse (str){
  let temp =''
  for( let i=str.length-1 ;i>= 0 ; i--){
     temp += str[i]
  }
  return temp
}
console.log(reverse ("ajmal"))


