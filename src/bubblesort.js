var ar = [0, 1000, 1, -1, 8, 3];


function bubble(arr) {
let i = 0
let changed = false
// compare the 
while (i < arr.length) {
    let oldval = arr[i]
    let newval = arr[i+1]
    
    if (oldval > newval) {

        arr[i] = newval
        arr[i+1] = oldval

        // update the fact we changed something, means we recurse again, 
        // until we don't
        changed = true
    }


i++


}


return changed == false ? arr : bubble(arr)

}


console.log(bubble(ar))