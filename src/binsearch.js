function binary(arr, l, r, x){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, l, mid - 1, x);
 
        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, r, x);
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}
 

let arr = [1,2,3,6,4,65,3,5,3,2,10,12,11,15,64,67,11]

function sort(arr) {
    for (let i = 0; i<=arr.length; i++) 
{
for (let j = 1; j<=arr.length;j++)
if (arr[i] > arr[i+j]) {
    let oldi = arr[i]
    let oldiplus = arr[i+j]
    arr[i+j] = oldi
    arr[i] = oldiplus
    



}}


}
sort(arr)
console.log(arr,'sorted')
console.log(binary(arr, 4))