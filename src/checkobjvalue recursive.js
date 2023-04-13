function contains(obj, value) {

    
    // go through each key in obj
for (let key in obj) {
    // if we run into another obj pause current ufnction
    // and recurse through it
    console.log(key, obj[key], obj[key] == value, value)
if (typeof obj[key] == 'object') {
return contains(obj[key], value)
}
// if we run into a value, check if it passes
// if it does we are done, return true
else {
    if (obj[key] == value) {
        return true
    }

}

}
// once we iterate over full object including all subcalls
// as subcalls branch out from the first object key map
// we can return false as we did not yet return true!
return false
}



var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
console.log(contains(nestedObject, 'foo2'))