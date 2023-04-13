

function totalIntegers(arr) {
// initialize a sum to zero..
let sum = 0

// loop over each item of array
for (let item of arr) {

    // if item is array come back in bitch
    // if that item is array, set the current sum
    // equal to what it is plus the eventual return sum
    // of the nested call which returns a number (sum)

    if (Array.isArray(item) ) {
    sum +=     totalIntegers(item)
    }
    // else it is not an array..
    // so we can see if its an integer and if so add it to the sum
    else {
        if (Number.isInteger(item)) {
            sum++
            console.log('got int')
        }

    }

    // we will proceed to go to next key if it exists
    // this will serve to update the sum in the current top stack function
    // as its progressing through a loop
    // by whatever number sum is created by nested call (if there is one if not a nested call we are still within the same loop so sum is being updated) 
    // if we make a nested call we pause at 
    // sum = sum + Nextcall
    // and only continue off when next call resolves and since it returns a value (returns sum which is a number)
    // our initial call and key loop can resume and finish
    // as once nested call finished we return below and can unpause
    // main value loop and finish that by returning the
    // same updated sum!
}
return sum 




}
console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]))