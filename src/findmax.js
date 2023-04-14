var ar = [2, 4, 10, [12, 4, [1, 1], 4], [3, 2, 9], 0];


function maxer(arr) {

let max = 0

for (let value of arr) {





    if (Array.isArray(value)) {

     if    (max < maxer(value)) {
        // if we find a larger value in this array,
        // update max to reflect that.
        max = maxer(value)
     }

    }

    else {
        if (value > max) {
            max = value
        }
    }


}
return max

}


console.log(maxer(ar))