// easy one say 2,5
// we start function and reach that x is not 0
// 2 5 gets paused at bottom return like
// [5].concat(FUNC 1) - PAUSED HERE
// We now go into call 1,5
// 1,5 gets paused at
// [5].concat(FUNC 0)- PAUSED HERE
// We call func 0
// we can return an [] from that - RETURN FUNC 0
// so func 1 [5].concat(func 0)
// [5].concat([])
// = [5] = func1 = RETURN FUNC 1
// now where func 2 was paused
// return [5].concat(func1)
// we return func 1
// which is 
// return [5].concat([5])
// which allows us to finally complete the calls and return
// [5,5] - RETURN FUNC 2

function replicate(x,y) {

// making function simpler is one less and one less value
// eventually we reach base case of none to push
// we can return an array to use here (last in first out)
    if (x == 0) {
        return []
    }

    // otherwise make it one step simpler..
    // and to solve more complex problem we take the
    // y value and concat that to the next value in chain..

    return [y].concat(replicate(x-1, y))


}




console.log(replicate(3,5))