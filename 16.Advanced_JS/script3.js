// CLOSURES :- A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has finished executing. Closures allow you to create private variables and maintain state across multiple function calls. Here's an example of a closure in JavaScript:

// Outer function that creates a closure
function outerFunction(outerValue) {
  // Inner function (closure) that has access to outerValue
  function innerFunction(innerValue) {
    // Accessing both outerValue and innerValue
    console.log("Outer value:", outerValue);
    console.log("Inner value:", innerValue);
  }

  // Returning the inner function, creating a closure
  return innerFunction;
}

// Creating a closure by calling outerFunction with an argument
const closureInstance = outerFunction("Closure Example");

// Calling the closure with another argument
closureInstance("Inner Value");

//* Note:- Closures even work for nested closure functions
