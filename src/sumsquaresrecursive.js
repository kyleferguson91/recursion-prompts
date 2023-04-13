// think of an array like [1,[2],2]
// we traverse all values on the first call
// 1, [2] and 2
// we initialise a sum holder on we check the first value in a loop on the array and find its a number 
// we then update sum variable to what it is plus the square of that number
// we then proceed in the loop to next value [2]
// this puts us in the array catch
//this pauses the CURRENT FUNCTION (keys 1,[2],2)
//the function pauses at the sum = sum + func line
// this means we cannot complete that value until we complete this call
//the call now puts [2] in the function, creates sum variable of 0
// loops through only value 2, and because its a number sets the sum value equal to its square  which sets the sum variable
// which has been currently updated from last value
// to be equal to itself plus the return value from this array
// being fed back in
    // we complete the key loop of [2] and hit the return sum bloack which means that where we paused the function at sum = sum + nextcall() that nextcall returns its sum value which is 4, and goes poof and a number takes its place, letting us 
    // continue on from current sum (1) + 4, so we are at 5
//we can finally make it to last value of main array, 2 which is not an array so we run into value block that updates sum equal to its square so we are at sum 9
// now we are done with all keys in main array, we paused for a bit there to traverse others and came back and rechecked the end
// now we return sum which has been updated with nested calls and its own loop to be current
//
//
//
//
//


// function that sums squares of numbers in nested arrays

function sumsquares(arr) {

// intialize a sum that can be updated..
let sum = 0

// loop through each value in array

for (let value of arr) {

    // if its another array, recurse!
    if (Array.isArray(value)) {
        // we don't return anything here because we are looking
        // to recurse over whole array and returning breaks loop..
        // loop gives us our closure to update sum easily
        // eventually whis will reduce to a value
        // which will be updated to sum of iteration
        // we can return the current sum + the eventual return sum
        sum = sum +  sumsquares(value)

    }
    else {

        
        console.log(value)
        // we now have a value..
        // add its square to the sum..
        sum += Math.pow(value,2)
    }


}


return sum
}

console.log(sumsquares([[1,2],3]))