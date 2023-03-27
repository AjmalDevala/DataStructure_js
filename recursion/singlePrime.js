function isPrime(num) {
    if(num < 2) {
        return false
    }
    return primeHelper(num, num - 1)
}

function primeHelper(num, i) {
    if(i === 1) {
        return true
    } else if(num%i === 0) {
        return false
    } else {
        return primeHelper(num, i - 1)
    }
}

console.log(isPrime(29))