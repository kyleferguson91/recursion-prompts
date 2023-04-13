
function fib(n) {

    // if we reach n == 1 return 1 value
    // this has no bearing on below loop..
if (n == 1) {return 1}

else {
    let sum = 0
    let fib1 = 1
    let fib2 = 2
// get a sum counter
// and the vlaue of first 2 numbers..
// as long as fib 2 is less than or equal to n, keep going..
    while (fib2<=n) {
        // it checks if fib2 is even that way we are alwaus only
        // checking the number once, and then we move on if we 
        // are still below end, otherwise we break out..
if (fib2 % 2 == 0) {
    // if its even add to sum
    sum += fib2
}
// create an old value for fib1 so we can move it up 1
let temp = fib1
// move fib1 up 1 spot which is fib2 current spot
fib1 = fib2
// change fib2 which will be the next number in the loop
// kinda like i++ to what it currently is equal to plus orig fib1 (temp var)
// which gives us the next term
fib2 = fib2 + temp

}
// finally when we reach the last term we break out of loop
// and can return the sum
return sum
}

}

console.log(fib(4000000))