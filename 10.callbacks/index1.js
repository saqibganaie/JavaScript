// Synchronous Nature: Those things that get executed serial wise are synchrounous in nature.
// e.g:-
//let name = prompt("Enter your name : ");
//let age = prompt("Enter your age : ");
//document.write("Your name is " + name + " and you are " + age + " years old");
// Here the second prompt will not run until the first prompt has executed itself.


// Asynchronous Nature : Those things that dont get executed in order.
// e.g :- 

document.write("First line");
setTimeout(()=>{
    document.write("Second Line");
}, 2000);
document.write("Third Line");
