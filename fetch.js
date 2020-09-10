// The following line is not needed when running in the browser. 
// const fetch = require("node-fetch");


// I'm a higher order function. 
// Provide me a function you want me to call when I'm done working. 
// That function you provide is a callback. 

function longRunningFunction(){
    return new Promise(function(resolve, reject){
        fetch('https://api.jsonbin.io/b/5f58f3987243cd7e8238fe56', {
            headers : {'secret-key': "$2b$10$I4xq4euEu5OuMxAxCU8rVOC8IfVMlcR2/91sqjz9SZX/YYgJPLU42"}
        })
            .then(response => response.json())
            .then(data => resolve(data));
    });  
}

longRunningFunction().then(data => {
    data.receipts.forEach(receipt => {
        console.log(receipt); 
    });
}); 


console.log("Hello, did we wait for long running function?"); 