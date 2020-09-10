// I'm a higher order function. 
// Provide me a function you want me to call when I'm done working. 
// That function you provide is a callback. 

function longRunningFunction(cb){
    setTimeout(function(){
        cb()
    }, 3000)
}

function imacallback(){
    console.log("I run after the worker is finished doing something that takes awhile."); 
}

longRunningFunction(imacallback); 
console.log("Hello, did we wait for long running function?"); 