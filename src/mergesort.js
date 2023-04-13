let dog = [7, 4, 12, 7, 23, 55]


function mergesort(arr, sorting) {
// get a left and right half
    let left = arr.slice(0, arr.length / 2)
    let right = arr.slice(arr.length / 2)

    // this covers what happens what we get if we divide an even amount
    // if we supply length 1 left and right arrays..
    if (left.length == 1 && right.length == 1) {
        console.log(left, right, 'both length 1!')
        // we can return array based on what we get!
        if (left[0] < right[0]) {
          
            return [left[0], right[0]]
        }
        else {
            return [right[0], left[0]]
        }
    }
    // this if we divide off, eg, 1,2,3 becomes 12, 3
    else if (left.length == 1 && right.length != 1) {
 
let results = []
        // when we concat this on here we need to take care that 
        // left is less than right..

        // is left[0] less than right[0]
        // this is easy case then we can just append the left on the 
        // end of the right and return that array

right = right.sort((a,b) => {
    return a-b
})

        return [left[0]].concat(mergesort(right)).sort((a,b) => {
            return a-b
        })

    }
    // even other way 
    else if (left.length != 1 && right.length == 1) {
        console.log('bees right 1')
        return [right[0]].concat(mergesort(left))
    }
    // otherwise both lengths are greater than 1..
    else if (left.length > 1 && right.length > 1) {

        console.log(left, right, ' herer')

        // this concat call is where we merge the arrays..
        // we need to compare them one by one in this call and return a new array out of it..
        // in this return of both arrays is where we
        // we pause the function here each time and feed the values
        // back into the function until we return simple arrays
        // then we can continue on in the calls
        let leftvalues = mergesort(left)
        let rightvalues = mergesort(right)
        console.log(rightvalues, 'righter')
        let results = []

        // initialize variables for each index, we start from 0..
let leftarrayindex = 0
let rightarrayindex = 0
let i = 0
let j = 0

while (i < leftvalues.length && j < rightvalues.length) {
    console.log(i,j)
    if (leftvalues[i] >= rightvalues[j]) {
        results= results.concat(rightvalues[j])
        
        if (j + 1 == rightvalues.length) {
            while (1 < leftvalues.length) {
                results = results.concat(leftvalues[i])
                i++
            }
        }
        j++
    }
    else {
        results = results.concat(leftvalues[i])
        // in the envent we pushed the last left value..
        // push all remaining right values..

        if (i + 1 == leftvalues.length) {
            while (j < rightvalues.length) {
                results = results.concat(rightvalues[j])
                j++
            }
        }
        i++

    }
    
    
}
console.log(leftvalues, rightvalues, 'titties')

console.log(leftvalues, rightvalues, '12')
   
return results
}




//

 


 

        //return   [mergesort(left)[0]].concat( mergesort(right)).sort((a,b) => {
        //   return a-b
        //})
        //
    }

console.log(mergesort(dog))