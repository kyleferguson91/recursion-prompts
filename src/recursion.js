/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function (n) {

    // base case, n == 1
    if (n == 1 || n == 0) {
        return 1
    }
    else if (n < 0) { return null }
    // solve one step simpler..
    else {
        return n * factorial(n - 1)
    }


};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {

    // break the problem down into one step simpler..
    // a problem one step simpler would be an array one element shorter..
    // base case would be when array has length 0

    if (array.length == 0) {
        return 0
    }
    else {
        // one step simpler..
        return sum(array.slice(1)) + array[0]
    }




};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function (array) {
    if (array.length == 0) {
        return 0
    }
    let output = []
    //Break the problem I am trying to solve down into a problem that is one step simpler
    // Assume that my function will work to solve the simpler problem — really believe it beyond any doubt
    // base case, if array is length 1 and an integer, return the integer!
    for (let item of array) {
        if (Array.isArray(item)) {
            // output is now equal to what it was before, added on to it
            // the result of calling the function again on the array like item
            output = output.concat(arraySum(item))
        }

        else {
            // item is not array like and gets added to the output!
            output = output.concat(item)

        }

    }
    // base case is when we reach the last item..
    return output.reduce((prev, cur) => {
        return prev + cur
    })

};




// 4. Check if a number is even.
var isEven = function (n) {

    // break the problem down into one step simpler..
    // a problem one step simpler would be an array one element shorter..
    // base case would be when n == 1 or n == 2
    // base case if we reduce to 1, its not even
    if (n == 1) {
        return false
    }
    // if we reduce to 0, it is even
    else if (n == 0) {
        return true
    }
    // for negative numebrs add 2.. eventually reach -1 or 0
    else if (n < 0) {
        return isEven(n + 2)
    }
    // for positive numbers minus 2, eventually reach 1 or 0!
    else {
        return isEven(n - 2)
    }




};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {

    // start at n == n - 1
    // 1 2 3 4 5 6 7 8 9
    // base case is when we reach n == 0
    if (n == 0) {
        return 0
    }
    n < 0 ? n += 1 : n -= 1
    // how do we make the problem one step simpler..
    // one number smaller..
    {
        return n + sumBelow(n)
    }



};











// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function (x, y) {
    // this prits from x+1 to y-1



    // base case can return function immediately..
    // simplest case is when x == y return nothing, no range.
    if (x == y) {
        console.log('at base', x)
        // base case returns an array, from there we push each x value onto it up the chain
        return []
    }

    // 1 step simpler - assume it will solve this problem, 1 step closer to y!
    else {

        if (x > y) {
            y = y + 1
            // if x is larger eg 12,8
            // we go 11 10 9
            // so we can post up call(9), call(10), call(11) call(12)
            // 12 returns empty array, and 11 10 9 are posted backwards
            // since 11 is most recent on stack, and these are 
            // concat to the available array 
            if (x != y) {
                return range(x, y).concat(y)
            }
            // else if x is equal to y, do not concat the result, 
            // on this step we are going to return an empty array to begin
            // appending values, and thus we won't append the xvalue this time
            else { return range(x, y) }
        }

        else if (x < y) {
            // print up to y!

            y = y - 1


            if (x != y) {
                return range(x, y).concat(y)
            }
            // else if x is equal to y, do not concat the result, 
            // on this step we are going to return an empty array to begin
            // appending values, and thus we won't append the xvalue this time
            else { return range(x, y) }
        }

    }

    // but we need to push this x value to an output arr.. and call the function with the 
    // array equal to the previous call result..
    // this step is the key, when we recurse, the array is equal to..
    // the current array with the result of the next call added on


}




//console.log(range(2,9))
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function (base, exp) {




    //- base case in which the function can return the result immediately
    //- recursive case: in which the function must call itself to break the problem down to a simpler level
    //
    //

    // what is an exponent .. num x num x num...
    // whats one step simpler? num x num
    // whats the base case?  when we are left with no nums

    if (exp == 0) {
        return 1
    }

    else {
        if (exp > 0) {
            return base * exponent(base, exp - 1)
        }

        else if (exp < 0) {
            return 1 / base * exponent(base, exp + 1).toFixed(4)
        }
    }


    //
    ////Break the problem I am trying to solve down into a problem that is one step simpler
    //   // Assume that my function will work to solve the simpler problem — really believe it beyond any doubt
    //    ask myself: since i know i can solve the simpler problem, how would i solve the more complex one 
    //



};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function (n) {

    //console.log(n)
    // for something to be a power of two.. 
    // 2 x 2 x 2 x 2 must eventually equal it..
    // a base case would be when the number / 2 == 0
    // if we don't reach that, then the number must not be a power.
    // one step simpler would be a number further divided by 2..

    // if the number divided by 2 is 1 then its a power!
    if (n == 1) {
        return true
    }
    // we need a base case where we get below 1 but above 0..
    else if (n < 1 && n > 0 || n == 0) {
        console.log(n, 'n here')
        return false
    }
    else {
        // recurse, make the problem one step simpler..
        // divide number by 2..
        return powerOfTwo(n / 2)


    }
    // return false if we get through the entire chain of calls
    // and do not return true!


};
//console.log(powerOfTwo(0)
//)
// 9. Write a function that reverses a string.
var reverse = function (string) {


    // a base case would be a string one letter shorter

    // we believe that function will do work of reversing..
    // base case when we reach string of length 0
    if (string.length == 0) {
        return string
    }
    else {
        // otherwise we make it one step simpler, and assume it will solve this
        // and then think of how to solve more complex problem which is adding string character
        // at the end..
        return reverse(string.slice(1)) + string[0]
    }






};




// 10. Write a function that determines if a string is a palindrome.
var palindrome = function (string) {

    //   - base case in which the function can return the result immediately
    //   - recursive case: in which the function must call itself to break the problem down to a simpler level
    //   
    //   
    //   
    //   //Break the problem I am trying to solve down into a problem that is one step simpler
    //      // Assume that my function will work to solve the simpler problem — really believe it beyond any doubt
    //       ask myself: since i know i can solve the simpler problem, how would i solve the more complex one 
    //   
    //
    //
    // a palindrome is same forward and back..
    // we can compare 2 letters at  a time, each letter must be the same (start and end)
    // if we get a mismatch, we do not have a palindrom
    // how do we make the problem simpler..
    // what if one letter word? then we have palindrome same with zero letter
    // take a longer word.. compare first and last letter
    // if we don't have a match we don't have a palindrom

    if (string.length == 0 || string.length == 1) {
        return true
    }

    // else we need to compare letters.. what if we have a two letter word?
    // eg aa

    // well if letters are equal its a palindrome..
    else if (string.length == 2) {
        return string[0].toLowerCase() == string[string.length - 1].toLowerCase()
    }

    // well what if 3 letters or more..

    else {
        // compare first letter to last letter
        if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
            // recurse since it still may be a palindrome..
            // but cut first and last letter off of string
            // slice is start index and index to exclude

            // so start at char 1, and start excluding at last character
            console.log(string, string.slice(1, string.length - 1))
            return palindrome(string.slice(1, string.length - 1))
        }
        else {
            // mismatch, canonot be a palindrome return false
            return false
        }
    }




};
//console.log(palindrome('bob'))





// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

// //must have:
//   - base case in which the function can return the result immediately
//   - recursive case: in which the function must call itself to break the problem down to a //simpler level
//   
//   
//   
//   //Break the problem I am trying to solve down into a problem that is one step simpler
//      // Assume that my function will work to solve the simpler problem — really believe it //beyond any doubt
//       ask myself: since i know i can solve the simpler problem, how would i solve the more //complex one 
//   
//
//


// how do we make it one step simpler..
// reduce the divided by divisor, until we equal 0.. or cannot equal 0..
// eg 10 / 3, 10 - 3 == 7, - 3 == 4, - 3 == 1   - 3 == - 2
// if we reach 0, then return 0..
// but if we dont reach 0 before we go negative, we need to return
// the result of the call plus the divisor to get the last one back

// recursive call with divided minus divisor each time..

// when we have 2 negatives.. 
// when we have one negative

var modulo = function (x, y) {
    console.log(x, y)

    if (x === 0 && y === 0) {
        return NaN
    }
    else if (x === 0) {
        return 0
    }



    if (x < 0) {

        if (y < 0) { y = -y }

        if (-x < y) { return x }

        if (-x < y) { return x }


        return modulo(x + y, y)

    }
    else if (x > 0) {

        if (y < 0) { y = -y }
        else if (x < y) { return x }
        return modulo(x - y, y)
    }







};


//console.log(modulo(-10,-3))





// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
// what is multiplication, addition a certain number of times
// adding a number 1 times is simplest, its the number..
// thus the base case is if y == 1, then we return the number.
// but if it isn't equal to one, we need to
// MAKE THE PROBLEM SIMPELR 
// well bring y one step closer to 1..
// and return the number so we can add..
var multiply = function (x, y) {
    if (x === 0 && y === 0) { return 0 }
    else if (y === 1 || y === -1) {

        if (y > 0) {
            return x
        }
        else {
            return -x
        }
    }
    else {
        if (y < 0 && x < 0) {
            if (y < 0) { y = -y }
            return -x + multiply(-x, y - 1)
        }
        else if (y < 0 && x > 0) {


            return -x - multiply(-x, y + 1)

        }

        else {
            return x + multiply(x, y - 1)
        }
    }



};




//must have:
//   - base case in which the function can return the result immediately

//   - recursive case: in which the function must call itself to break the problem down to a //simpler level

//   
//   
//   
//   //Break the problem I am trying to solve down into a problem that is one step simpler
//      // Assume that my function will work to solve the simpler problem — really believe it //beyond any doubt
//       ask myself: since i know i can solve the simpler problem, how would i solve the more //complex one 
//   
//
//




// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// making problem one step simpler would be bringing it one step closer to 0
// or to 1.. 
var divide = function (x, y) {
    if (x == 0 && y == 0) { return NaN }
    if (x < 0 && y < 0) {
        x = -x
        y = -y
    }

    if (x < 0 && y > 0) {
        if (x < y) { return 0 }
        if (x < 0) { x = -x }
        return -1 - divide(x - y, y)

    }
    if (x > 0 && y < 0) {

        if (y < 0) { y = -y }
        return -1 - divide(x - y, y)
    }

    if (x < y) {
        return 0
    }

    else {
        return 1 + divide(x - y, y)
    }


};
//console.log(divide(10,-4))










// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm

//must have:
//   - base case in which the function can return the result immediately

//   - recursive case: in which the function must call itself to break the problem down to a //simpler level

//   
//   
//   
//   //Break the problem I am trying to solve down into a problem that is one step simpler
//      // Assume that my function will work to solve the simpler problem — really believe it //beyond any doubt
//       ask myself: since i know i can solve the simpler problem, how would i solve the more //complex one 
//   
//
//


var gcd = function (x, y) {
    if (x < 0 || y < 0) { return null }
    // base case is when y == 0 or x == 0, start with bigger number..

    if (y == 0) {
        return x
    }
    else {
        // we call the function recursively with the big divided by small
        // x is equal to what y is in CURRENT CALL and y is equal to remainder of
        // big divided by small.. 
        // 


        return gcd(y, x % y)

    }




}
// how do we make it one step simpler..
// get closer to 0.. 






//console.log(gcd(270,192))









// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
//must have:
//   - base case in which the function can return the result immediately

//   - recursive case: in which the function must call itself to break the problem down to a //simpler level

//   
//   
//   
//   //Break the problem I am trying to solve down into a problem //that is one step simpler
//      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
//       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
//   
//
//


var compareStr = function (str1, str2) {
    // a problem one step simpler would be a string one letter shorter

    // base case, empty string
    if (str1 == '' && str2 == '') { return true }
    // base case 2 strings with 1 character, either match or don't
    else if (str1.length === 1 && str2.length === 1) {
        return str1[0] === str2[0]
    }

    // else we recurse and come up with a problem one step shorter
    else {

        // first we check char 0..
        if (str1[0] == str2[0]) {
            // recurse to simpler solution if characters are equal
            return compareStr(str1.slice(1), str2.slice(1))
        }
        // and if they are not, return false
        else {
            return false
        }


    }

};

//console.log(compareStr('cax','cax'))


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

//must have:
//   - base case in which the function can return the result immediately

//   - recursive case: in which the function must call itself to break the problem down to a //simpler level

//   
//   
//   
//   //Break the problem I am trying to solve down into a problem //that is one step simpler
//      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
//       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
//   
//
//
var createArray = function (str) {

    // what is a problem one step simpler.. a string one step shorter
    // base case would be once the string is empty..

    if (str.length == 0) {
        return []
    }
    else {
        // otherwise reduce the string length one character at a time..
        // call the function with the string shorter
        // and solve the more complex probelm..
        // which is creating an array out of each character..
        // combined with the step calls 
        return [str[0]].concat(createArray(str.slice(1)))
    }


};
//console.log(createArray('cax'))



// 17. Reverse the order of an array
var reverseArr = function (array) {
    //must have:
    //   - base case in which the function can return the result immediately

    //   - recursive case: in which the function must call itself to break the problem down to a //simpler level

    //   
    //   
    //   
    //   //Break the problem I am trying to solve down into a problem //that is one step simpler
    //      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
    //       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
    //   
    //


    // we need to reverse an array.. what would be one step simpler
    // reversing an array one element shorter.. 

    // a base case would be when array has no elements, return the array,
    // we get a blank array to append to
    // otherwise we concat to this eventual return value array at 0
    // when we reach base case length 0, which happens as we slice the array
    // closer and closer to nothing
    // and once that returns we concat the array value in the reverse order
    // as the array gets smaller the smaller version (values closer to end)
    // are closer to the top of the stack, so when we start popping off values 
    // we append them in reverse order, to append in same order
    // must concat first!
    if (array.length == 0) {
        return []
    }
    else {
        return reverseArr(array.slice(1)).concat(array[0])
        // return [array[0]].concat(reverseArr(array.slice(1)))
    }


};

//console.log(reverseArr([1,2,3]))

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

//must have:
//   - base case in which the function can return the result immediately

//   - recursive case: in which the function must call itself to break the problem down to a //simpler level

//   
//   
//    



var buildList = function (value, length) {

    // how do we make the problem one step simpler.. length closer to 0
    // one less item to append each time
    // one less item to append..
    // what is a good base case, when there are no items to append
    // or no length..

    if (length == 0) { return [] }
    else {
        // return the value as an array and concat to that value
        // the return value of the next function
        // returns the value in an array and concats the next return value
        // which is the value in an array again and this continues until 
        // we reach length 0, at which point we concat final return value
        // which being an empty array, adds nothing due to concat 
        return [value].concat(buildList(value, length - 1))
    }

};

//console.log(buildList([],3))





// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.



// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function (n) {
    //must have:
    //   - base case in which the function can return the result immediately

    //   - recursive case: in which the function must call itself to break the problem down to a //simpler level

    //   
    //   
    //   
    //   //Break the problem I am trying to solve down into a problem //that is one step simpler
    //      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
    //       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
    //   
    //we need an array of length 1 to n, to make this one step simpler 
    // we get closer and closer to n.. or to zero.
    // 
    // thus are base case when n == 0
    // return an array when we reach 0
    if (n == 0) {
        return []
    }
    else {
        // otherwise push to the array the values we want..
        if (n % 5 == 0 && n % 3 == 0) {
            return fizzBuzz(n - 1).concat('FizzBuzz')
        }
        else if (n % 3 == 0) {

            return fizzBuzz(n - 1).concat('Fizz')
        }
        else if (n % 5 == 0) {
            return fizzBuzz(n - 1).concat('Buzz')
        }

        else {
            return fizzBuzz(n - 1).concat(n + "")
        }
    }




};

//console.log(fizzBuzz(15))




// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function (array, value) {
    //must have:
    //   - base case in which the function can return the result immediately

    //   - recursive case: in which the function must call itself to break the problem down to a //simpler level

    //   
    //   
    //   
    //   //Break the problem I am trying to solve down into a problem //that is one step simpler
    //      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
    //       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
    //   

    // how do we make the problem one step simpelr
    // make array one element shorter..
    // base case is when array is empty.

    if (array.length == 0) {
        return 0
    }
    // else make one step simpler, call it on an array with one less item
    // which means we can solve the simpler problem (we believe this)
    // and to solve the more complex problem, we return 1 + the next return value
    // which will either add one and call the function
    // not add one and call the function
    // or return 0 when we reach an empty array!
    else {
        if (array[0] === value) {
            return 1 + countOccurrence(array.slice(1), value)
        }
        else {
            return countOccurrence(array.slice(1), value)
        }
    }

};

//console.log(countOccurrence([2,7,4,4,1,4], 4))


// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function (array, callback) {

    //   - base case in which the function can return the result immediately

    //   - recursive case: in which the function must call itself to break the problem down to a //simpler level

    //   
    //   
    //   
    //   //Break the problem I am trying to solve down into a problem //that is one step simpler
    //      // Assume that my function will work to solve the simpler //problem — really believe it //beyond any doubt
    //       ask myself: since i know i can solve the simpler problem, //how would i solve the more //complex one 
    //  
    // remember map creates a new array, populated with results of calling a 
    // function on every element in the calling array

    // to make it one step simpler, would be an array one element shorter
    // base case would be when array is empty, return the array..


    // as we call the function with shorter and shorter arrays we eventually reach an 
    // empty array.. at this point we can finally return an empty array, 
    // and our recursive calls depend on appending to this array that eventually gets returned
    // we concat the array onto the returned value so we go in forwards order
    if (array.length == 0) {
        return []
    }
    // else make it one step simpler, array one element shorter..
    else {

        // otherwise create an array out of the element ran through the fucnction
        // and add to this array each time the value of the next function call..

        return [callback(array[0])].concat(rMap(array.slice(1), callback))
    }



};

//console.log(rMap([1,2,3], (x) => {
//    return x*2
//}))





// 22. Write a function that counts the number of times a key occurs in an object.
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };
// obj = {e: 'dog'}
// let obj = {e:{ r: '2'}}
// countKeysInObj(obj, 'r') // 1 
// countKeysInObj(obj, 'e') // 2

var countKeysInObj = function(obj, value) {

// create variable to keep track of sum..
let sum = 0
for (let key in obj) {
    console.log(key)
    // variable for the object value at key
    let objectvalue = obj[key]
    
    // check the key if its the same as sum, add sum up!
    if (key == value) {
        sum++
    }
    
    if (typeof objectvalue == 'object') {
        // if we run into a key that points to another object
        sum = sum + countKeysInObj(obj[key], value)
    }
}
// finally we return sum, which has been growing from the progressive calls..
return sum
}
   // console.log(countKeysInObj(obj, 'e'))








// 23. Write a function that counts the number of times a value occurs in an object.
 var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

//var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};

// if we pass in a property that points to not another object
// check if its equal to the value
// return the value of 1 if it is and 0 if not

// for loop solution..

var countValuesInObj2 = function (obj, value) {
    // create a sum variable
    let sum = 0
    // something one step simpler is an object one level closer to the end,
    // which is why we iterate through keyus
    for (let keys in obj) {
        console.log(keys)
        // if the key we reach is another object, recurse again
        // check if the value (obj[keys]) equals ours
        if (obj[keys] == value) {
            // update the sum variable by one, don't return so we don't 
            // break out of loop until the end
            sum++
        }
        if (typeof obj[keys] == 'object') {
            // else sum equals sum plus the next iterations sum value

            // remember we do not return so we don't break the loop..
            // we only return sum at end of each iteration
            sum = sum + countValuesInObj2(obj[keys], value)
        }
    }

    // base case is when we have no more keys to traverse.. 
    // which is also the end of the loop, so we return the sum!
    // when we reach the end of each specific loop, each specific object 'chain'
    // we return sum out of that loop

    return sum

};
//console.log(countValuesInObj(obj, 'r'))

var countValuesInObj = function (obj, value) {



    // object keys solution..

    // initialize a sum to store result
    let sum = 0

    // case to consider when we pass in an object that has no keys (no more)
    // object depth.

    if (typeof obj != 'object' || obj == null) {
     //   console.log('nullobj')
    }
    // otherwise figure out keys present..
    let keys = Object.keys(obj)
 //   console.log(keys)

    // map over this keys array..
    keys.forEach((elem, ind, arr) => {
        if (obj[elem] == value) {
            sum++
        }

        // obj at elem is equal to another object
        if (typeof obj[elem] == 'object') {
        //    console.log(elem)
            sum = sum + countValuesInObj(obj[elem], value)
        }


    })
    // finally return the sum..

    return sum

};
//console.log(countValuesInObj(obj, 'r'))




//console.log(countValuesInObj(obj, 'e'))


// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var obj = { 'e': { 'x': 'y' }, 't': { 'r': { 'e': 'r' }, 'p': { 'y': 'r' } }, 'y': 'e' };

var replaceKeysInObj = function (obj, oldKey, newKey) {




    for (let key in obj) {
        // this breaks the problem one step simpler..
        console.log(key)
        // if the key is equal to the old key
        if (key == oldKey) {
            // set the new key equal to the value at old key
            obj[newKey] = obj[oldKey]
            // and then delete the old key
            delete obj[oldKey]
            //   console.log(obj, 'obj')
        }

        // if key points to object, run it back into function
        if (typeof obj[key] == 'object') {

            // again we do not return so we don't break the loop..

            replaceKeysInObj(obj[key], oldKey, newKey)
        }

    }



    return obj



};

//console.log(replaceKeysInObj(obj, 'e', 'z'))

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function (n) {

    if (n <= 0) {
        return null
    }
    if (n == 1) {
        return [0, 1]
    }

    // otherwise the array is equal to the fib at the last number
    // for example fib(2)
    // arr equals fib(1) == [0,1]
    // then we return that value [0,1], as an array that consists of that
    // initial array, plus the next terms (0+1 = 1)
    // so [0,1,1]
    //for fib (3)
    // we call arr = fib(2)
    // which then calls arr = fib(1)
    // which then returtns [0,1]
    // fib 2 returns [0,1,sum]
    // fib 3 returns what the array was for fib 2 which is [0,1,sum, sum again]
    // this step is making it one step simpler
    // this eventually hits base case of 1 and returns [0,1]
    // which gets returned below..
    const arr = fibonacci(n - 1)

    // the below says return what the array is already equal to spread out
    // and add another value on the end that is the sum of the prior 2 values
    // so fib 2 calls arr = fib 1
    // this returns [0,1]
    // then we return an array that consists of that expanded, so 0,1
    // added on arr[0] + arr[1]  for n = 2
    // thus [0,1,1]

    // new array is equal to WHATEVER THE CURRENT ONE IS plus the 
    // SUM OF THE LAST AND SECOND LAST VALUES.. starting
    // FROM A BASELINE OF [0,1]
    // this is what we RETURN from each recursive call
    // GROWING BIGGER BY ONE WITH EACH CALLL EACH CALL
    // we reach the base case by making problem simpler each time, 
    // smaller n-1 calls for array.. 
    // eventually we get an array and can deduce values
    // from the hardcoded [0,1]
    // we make it ONE STEP SIMPLER with this and we 
    // solve the MORE COMPLEX problem with the addition of the last
    // two values in the return statement
    return [...arr, arr[n - 1] + arr[n - 2]]

};

//console.log(fibonacci(3))

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function (n) {

    // base case 
    if (n < 0) {
        return null
    }
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }

    // otherwise we break problem up..
    // this makes the problem one step simpler..
    return nthFibo(n - 1) + nthFibo(n - 2)


};

//console.log(nthFibo(7))

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function (array) {

    // how do we make this one step simpler..
    // perform it on an array with one less word..
    // eventually we reach a base case where array length is 0..

    if (array.length == 0) {
        // once we hit zero return an empty array we can append to..
        return []
    }

    else {
        // otherwise take the zereoth value of array,
        // convert to capitals
        // and append it to next call..
        // this should work backwards and once we reach array 0,
        // we append end to start

        return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)))
    }







};
var words = ['i', 'am', 'learning', 'recursion'];
//console.log( capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function (array) {

    // a problem one step simpler is array one step shorter..
    // a base case is an array of length 0, return empty array
    if (array.length == 0) {

        return []
    }
    else {
        // else make it one step simpler..
        return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)))
    }


};


//console.log(capitalizeFirst(['car','poop','banana']))

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };


// nestedEvenSum(obj1); // 10
var nestedEvenSum = function (obj) {

    // initialize a sum variable..

    let sum = 0
    for (let key in obj) {
        // check the value at specific key..
        let value = obj[key]
        if (typeof value == 'number' && value % 2 == 0) {
            sum += value
        }


        // if key is equal to another object, recurse

        if (typeof obj[key] == 'object') {
            // sum is now equal to current sum plus recursive call sum
            sum += nestedEvenSum(obj[key])
        }
    }

    // finally when we are all done, return the sum!
    return sum


};

var obj1 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};
// console.log(nestedEvenSum(obj1))



// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function (array) {
    let arr = []
    // a problem one step simpler is an array one element shorter
    // thus base case is array length of 0
    // loop through every item in array
    for (let item of array) {
        // if that specific item is an array,
        // call the function again with the array equal to the current array
        // with the recursive result added on..
        if (Array.isArray(item)) {
            arr = arr.concat(flatten(item))
        }
        // otherwise not an array, append to final array!
        else {
            arr = arr.concat(item)
        }

    }
    // return final array after all calls made!
    return arr

};

//var flatten = function(array) {
//
//    // another method not using for loop..
//    // break it down to smaller and smaller values..
//    if (array.length == 0) {
//
//        return []
//    }
//
//    // check the zeroth value
//    if (Array.isArray(array[0])) {
//         array =  array.concat(flatten(array[0]))
//    }
//
//    else {
//        return [array[0]].concat(flatten(array.slice(1)))
//    }
//
//
//    };
//
// console.log(flatten([1,[2],[3,[[4]]],5]))





// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function (str, obj = {}) {

    // once we reach string length 0 return empty object (will append values later)
    // off the top of call stack
    if (str.length == 0) { return obj }

    // one step simpelr is string one element shorter..
    else {
        // in the case we still have string left, check zeroth character
        // if key exists, add 1, if it does not create key and set equal to one

        if (obj[str[0]]) {
            obj[str[0]] = obj[str[0]] + 1
        }
        else {
            obj[str[0]] = 1
        }
        // since we still have letters, run function again!
        return (letterTally(str.slice(1), obj))
    }

};

//console.log(letterTally('potato', {}))



// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function (list) {
    // simpler is smaller and smaller arrays..
    // which leads us to base case of empty array

    if (list.length == 0) {
        return []
    }

    // otherwise we still have values left..
    // break the problem one step simpler list.slice
    // how to solve more complex problem..
    else {
        //console.log(list[0], 'elsecall', list)

        // if the next sliced arrays zeroth value is equal to current zeroth value (which will be the next value in the chain)
        // it is the same, do not add it
        if (compress(list.slice(1))[0] == list[0]) {
            return (compress(list.slice(1)))
        }
        else {
            // if value is not equal, then add it!
            return [list[0]].concat(compress(list.slice(1)))
        }



    }
}


// console.log(compress([1,2,2,3,4,4,2,5,5,5,4,4]) )
//};
//
//var compress = function(list) {
//
//    let arr = []
//
//    // loop over list values..
//
//    for (let value of list) {
//        console.log(value)
//        // if the last value in the list, is also equal to the current value of main list
//        // skip it
//        if (arr[arr.length-1] == value) {}
//
//        // otherwise add it
//        else {
//         arr.push(value)
//        }
//    }
//return arr
//
//    
//}




// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function (array, aug) {
    // how do we make this one step simpler?
    // an array one step shorter!
    if (array.length == 0) {
        // once we reach a base case of no longer any values left, return!
        return []
    }
    console.log(array)

    // concat the value onto the value of array at 0, then concat the next call to that
    // eventually we return an empty array, and go up from there..
    return [array[0].concat(aug)].concat(augmentElements(array.slice(1), aug))




};
//console.log(augmentElements([[],[3],[7]], 5))

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function (array) {

    // make it one step simpler by calling array with one element shorter..
    // which will eventually reach base case of array with no length, and return
    // empty array
    if (array.length == 0) {
        return []

    }

    else {
        // here we  must check the value...
        if (array[0] !== 0) {
            return [array[0]].concat(minimizeZeroes(array.slice(1)))
        }
        else {
            // now we have a zero, well lets check if the next value in the array
            // is also a zero, if it is, do not push, and recurse again..

            if (array.slice(1)[0] == 0) {
                return minimizeZeroes(array.slice(1))
            }
            else { return [array[0]].concat(minimizeZeroes(array.slice(1))) }


        }
    }



};
//console.log(minimizeZeroes([2,0,0,0,1,4]))

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function (array) {
    if (array.length == 1) {
        // if we have 
        return [Math.abs(array[0]) * -1]
    }
    else {
        if (array.slice(1).length % 2 == 0) {
        //    console.log(array,'odd index')
            //return +ve array[0] on off
            return [Math.abs(array[0]) * -1].concat(alternateSign(array.slice(1)))
        }


        else {
        
         //  console.log(array, 'even index')
            // return -ve array[0] on even
        
            return [Math.abs(array[0])].concat(alternateSign(array.slice(1)))


        }
        // array length is greater than one, so we must slice..

    }

};

console.log(alternateSign([-2, -7, 8, 3, -1, 4]))


// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function (str) {
    //console.log(str)
    // a case one step simpler is a string one element shorter..
    if (str.length == 0) {
        return ""
    }
    else {
        if (str[0] == 0 && str[0] != " ") { return 'zero' + numToText(str.slice(1)) }
        if (str[0] == 1) { return 'one' + numToText(str.slice(1)) }
        if (str[0] == 2) { return 'two' + numToText(str.slice(1)) }
        if (str[0] == 3) { return 'three' + numToText(str.slice(1)) }
        if (str[0] == 4) { return 'four' + numToText(str.slice(1)) }
        if (str[0] == 5) { return 'five' + numToText(str.slice(1)) }
        if (str[0] == 6) { return 'six' + numToText(str.slice(1)) }
        if (str[0] == 7) { return 'seven' + numToText(str.slice(1)) }
        if (str[0] == 8) { return 'eight' + numToText(str.slice(1)) }
        if (str[0] == 9) { return 'nine' + numToText(str.slice(1)) }
        if (str[0] == 10) { return 'ten' + numToText(str.slice(1)) }



        return str[0] + numToText(str.slice(1))

    }




};

//console.log(numToText("I have 5 dogs and 6 ponies"))


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function (tag, node) {

    
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function (array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function (array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function (input) {
};
