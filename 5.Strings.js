// ** Strings are immutable in js

let stu1 = "Saqib"; // initialized by double quotes
console.log(stu1.length); // we can use these kind of property on strings
let stu2 = "Adnan"; // initialized by single quotes but my code formatter made it double quotes 🙁
console.log(stu2[0]);

// We have the concept of template literals (``) in js which can be used to directly insert variables in a string

let relation = `${stu1} is ${stu2}'s cousin`; // when we use variables directly inside template literals it is called string interpolation.
console.log(relation);

// Escape sequence character
let boy = "Kratos's son"; // here we wanted to use (') in Kratos but if we would have used it alone then js would have been confused about the end of the string so we used (\') instead to make js understand. (we cannot see it here because prettier formatter formated it)
// we can aslo use \", \n for new line, \t for tab, \r for carriage return etc.
console.log(boy);

// ** These methods return a new string and not change the original string because in js Strings are immutable

// ** Methods in string
let name = "SaSa b";
let title = "Programmer";
// .slice(index1, index2) method returns sliced part of string from index1 to (index2 - 1)
console.log(name.slice(1, 3));
console.log(name.slice(2)); // slices from 2 till last

// .split(seperator, limit) splits the string into an array of substrings. returns a new array and does not change the original string.

console.log(name.split("")); // splits all the chars (including spaces)
console.log(name.split(" ")); // splits all the words i.e each word after a space, if there is a space after a space then it will add the second space to the array too.
console.log(name.split("", 2)); // limits the split method to only the given limit

// .charAt(index) // returns the char at index

console.log(name.charAt(1));

// .toUpperCase() returns string with all chars to uppercase

console.log(name.toUpperCase());

// .toLowerCase() returns string with all chars to lowercase

console.log(name.toLowerCase());

// .replace("str1", "str2") replaces the first occurence of str1 with str2

console.log(name.replace("Sa", "Ta"));

console.log(name.replaceAll("Sa", "Ta")); // replaces all occurence of Sa with Ta

// .concat("str") returns a concatinated/joined string, "str" is concatinated/joined with the string for which the method is called
console.log(name.concat(" is a really good ", title));

// .trim()  returns a string with removed whitespaced from both sides

let str = "     Hello there      ";
console.log(str.trim());
console.log(str.trimStart()); // trims whitespaces only from start
console.log(str.trimEnd()); // trims whitespaces only from end

let greet = "Hello World this is Saqib";

// .includes("str", start) returns true if string contains str otherwise returns false. it is case sensitive
console.log(greet.includes("this"));
console.log(greet.includes("World", 6)); // starts to check from 6th index

// .startsWith("str", start) // returns true if string starts with str otherwise returns false. It is case sensitive

console.log(greet.startsWith("Hello"));
console.log(greet.startsWith("World", 6));

// .endsWith("str", end) returns true if string ends with str else false. It is case sensitive

console.log(greet.endsWith("Saqib"));
console.log(greet.endsWith("is", 19));
