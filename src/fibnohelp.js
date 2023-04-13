
function fib(n, sum = 0) {

    

      
      if (n <= 2) {
      
        return 1
      }
      
      else {
        
        let value1, value2, value3
        value1 = fib(n-1)
        value2 =  fib(n-2)
      
        value3 = value1+value2
    
     //   console.log(value1,value2,value3, '123')
      // check to make sure value is even, if it is we add to sum
        if (value3 % 2 == 0) {
            if (value3 >sum) {
              sum = sum + value3
            }
    
        //  console.log(sum)
    
        }
        // we can return the SUM all the way up since we have the next number already..

        return value3
      }
       
      
      

    


    }
        
        
        console.log(fib(12))
       