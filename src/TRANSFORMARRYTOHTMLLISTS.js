let links = ['home', 'about', 'socials',['facebook', 'twitter'], ]
links = ['home', 'about', 'socials',['dad','dog'], 'ben', ['scotch', 'rutherford'], 'teddy']



function print(arr) {


    let string = ''



 
    
        for (let value of arr) {
    


            if (Array.isArray(value)) {
                string = string + print(value) + '\n'
            }
            else {
                string = string + `<li>${value}</li> \n`
            }



        }


return string = `<ul>\n${string}</ul>`

}







    

console.log(print(links))