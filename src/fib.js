function fib(n) {

let sum = 0

function helper(n) {

if (n <=2) {
    return 1
}

else {
    if ((fib(n-1) + fib(n-2)) % 2 == 0) {

        sum = sum + (fib(n-1) + fib(n-2))
    }
    else {
        return fib(n-1) + fib(n-2)
    }
}

}
helper(n)
return sum
}

console.log(fib(6))