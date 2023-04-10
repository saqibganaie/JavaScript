// Q1, Q2 and Q3
let age = prompt("Enter your age : ");
age = Number.parseInt(age);
if (age < 0) console.error("You have entered a negative age");
let message = age >= 18 ? "You can drive" : "You cannot drive";
let seeAgain;
do {
  alert(message);
  seeAgain = confirm("Do you want to see the message again?");
} while (seeAgain);

// Q4
let num = prompt("Enter number : ");
num = Number.parseInt(num);
if (num > 4) location.href = "https://google.com";

// Q5
let color = prompt("Enter background color : ");
document.body.style.background = color;
