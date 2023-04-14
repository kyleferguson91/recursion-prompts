let arr = [10,12,14,56,2,6,4]
let sort = []
function mergesort(arr) {



if (arr.length == 1) {
    // returns each time it is passed an arr element of one..
return arr
}

// we are breaking the problem down one step simpler 
// each call the array is halved until the length is 1 and 
// ir returns arr.. each call has its own execution 
// context of arr which means progressively reduced calls..

// we eventually get down to single values that return from left and right
// since the function returns at arr.length == 1..
// so .. compare left to right..
return merge(mergesort(arr.slice(0,arr.length/2)),mergesort(arr.slice(arr.length/2))
)
}

console.log(mergesort(arr))


function merge(left,right) {

console.log(left,right)







}
console.log(sort)