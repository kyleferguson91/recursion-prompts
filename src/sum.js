
var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr) {

if (arr.length == 1) {
    return 0
}
else {
    return arr[0] + sum(arr.slice(1))
}





}


console.log(sum(ar))