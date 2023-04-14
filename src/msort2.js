let dog = [55,10,62,11,1,3,2,121,44,23,24,67,678,455,234,231354]

// sort left half
// sort right half
// merge sorted halves


function mergesort(arr) {
    
// create a left and right half..

let left = arr.slice(0,arr.length/2)
let right = arr.slice(arr.length/2)


// if we break down to arrays with one element each return..
if (left.length == 1 && right.length == 1)
{
    if (left[0] <= right[0]) {
        return [left[0]].concat(right[0])
    }
    else 
       { return [right[0]].concat(left[0])
    }

}
// in the case of odd numbers, left has 1 right has 2..
if (left.length == 1 && right.length == 2) {
    // we must compare before we can return value..
    // sort right out..
    right = right[0] <= right[1] ? [right[0], right[1]] : [right[1], right[0]]
    let j = 0
    console.log(left,right)
    while (j<right.length) {
        
        // easy case, if left is less than right 0
        if (left[0] <= right[0])
        {
            return [left[0]].concat(right)
        }
        else {
            // left 0 greater than right 0
            if (j+1 > right.length) {
                // means we have not found any value in right smaller than left
            return [right].concat(left)
            }
            j++
            // well is it also greater than right[j+1]
            if (left[0] >= right[j]) {
                
                // still greater so check the next value
                return right.concat(left)
            }
            else {
                
                return [right[0],left[0]].concat(right.slice(1))
            }
        }

        j++
    }


}

else {
    // else we have arrays with more than 1 item, run them in the function again
    // until we reach 1 and 1 or 1 and 2..
   let leftside = mergesort(left)
   let rightside = mergesort(right)
//console.log(leftside, rightside, 'left right')

// push to anbove results array to be returned but sort each left and right..
let i = 0
let j = 0
let results = []

while (i < leftside.length ) {
    // these cover base cases when we have no more values to check
 // console.log(i,j, 'ij before und') 
  if (j > rightside.length) {
    return results = results.concat(leftside.slice(i))
    
  }

    // down here is where we compare values to actually perform the sorting aspect..
if (leftside[i] < rightside[j]) {
   
    results = results.concat(leftside[i])
    i++
}
else if (leftside[i] == rightside[j]) {
    
    results = results.concat(leftside[i])
    
}
else  {
  
    
    if (j >= rightside.length) {
        return results = results.concat(leftside.slice(i))
    }
    else {
        
        results = results.concat(rightside[j])
    }
    j++
}




    
}


if (j < rightside.length) {
results = results.concat(rightside.slice(j))
}
else if (i < leftside.length) {
    results = results.concat(leftside.slice(i))
    
}


return  results







}


}

console.log(mergesort(dog))