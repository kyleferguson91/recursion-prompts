function fib(n) {
let sum = 0

function fibhelper(n) {
  let value = 0

  if (n <= 2) {
  
    return 1
  }
  
  else {
    
    let value1, value2, value3
    value1 = fibhelper(n-1)
    value2 =  fibhelper(n-2)
  // NEXT NUM IN SEQUENCE VALUE 3
    value3 = value1+value2

 //   console.log(value1,value2,value3, '123')
  // check to make sure value is even, if it is we add to sum
    if (value3 % 2 == 0) {
        if (value3 >sum) {
          sum = sum + value3
        }

    //  console.log(sum)

    }
    // return the next num in sequence so we can complete calls
    // and get a return value for eg func(fib(3))
    return value3
  }
   
  
  
}

return fibhelper(n), sum
 
}
    
    
    console.log(fib(12))