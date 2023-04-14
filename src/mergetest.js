
console.log(mergeSort([1,2,5,4,2]))

function mergeSort(arr) {
    // base case
    if (arr.length < 2) return arr;
    let mid = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, mid);
    let secondHalf = arr.slice(mid);

   
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));

// when dealing with odd numbers the 3 element array gets 1 extra call to sort 2
// 1 elements then compare eg merge([1], [2,3])

//  mergesort(1,2,4,3)
//  return merge(mergeSort([1,2], mergeSort[4,3]))  
//  return merge(mergeSort([1],mergeSort[2])
//  return merge(([1],[2])
//  return [1,2]
//  return merge(mergeSort([3],mergeSort[4])
//  return merge(([3],[4])
//  return [3,4]
//  NOW WE CAN GO BACK TO FUNCTION ON LINE TO AND RETURN THE VALUES..
//  mergeSort([1,2] = [1,2]
//  mergeSort([3,4] = [3,4]
//  which gives us oru array values needed to complete the main call..
//  return merge(mergeSort([1,2], mergeSort[4,3]))  
//  return merge([1,2],[3,4])  
//  returns [1,2,3,4] 



    // image [2,1,4,3]
    // splits into [2,1] [4,3]
    // returns merged(sort[2,1],sort[4,3])
    // which each make a recursive call to merge again..
    // pausing the function here
    // merged(sort[2,1],sort[4,3]) --> 
    // becomes merged(sort[2], sort[1]) while merged(sort[4], sort[3]) is paused
    // the sort functions return an arr here sort[2] == [2] (BASE CASE) which provides the input
    // needed for the sorting loop
    // 2,1 loops and returns 1,2 
    // gives control to next function that got paused
    // 4,3 loops and returns 3,4
    // so merged(sort[2,1]) returns [1,2] and merged([4,3]) == [3,4]
    // we can unpause  merged(sort[2,1],sort[4,3]) function above and insert our
    // proper values (functions returned array through sort loop)
    // returns merged([1,2],[3,4])
    // which runs the while loop one last time
    // and finally returns merged array from loop and thus function call

    // like it did for each recursive call
}




function merge(arr1, arr2) {
    let merged = [];
    console.log(arr1,arr2,'arrs')
    // index for arr1
    let index1 = 0;
    // index for arr2

    let index2 = 0;
    // while we have not traversed either array compare arr1[0] with arr2[0]
    // if its less push it to our merged arr and advance arr1index by 1
    
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] < arr2[index2]) {
            merged.push(arr1[index1]);
            index1++;
    // otherwise its greater so push arr2 and advance arr 2 index..
        } else {
            merged.push(arr2[index2]);
            index2++;
        }
        // continue til we reach one of the lengths
    }

    // once we reach one of the lengths, we can determine if either index has not traversed its 
    // respective array, since it hasn't push all remaining values from it..
    while (index1 < arr1.length) {
        merged.push(arr1[index1]);
        index1++;
    }
    while (index2 < arr2.length) {
        merged.push(arr2[index2]);
        index2++;
    }


    return merged;
}