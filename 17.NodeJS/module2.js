// * This is the common js modules way
// We can get the imported functions by destructuring them
//const { myFun, myFun2 } = require("./module1");
//
//myFun();
//myFun2(10);
//
//// We can also use the imported functions as this
//const allFuns = require("./module1");
//
//allFuns.myFun();
//allFuns.myFun2(100);

// * This is the ES6 Modules way
// * for this you have to add "type":"module" in your package.json file

import defFun from "./module3.js"; // here we were exporting the default function so we can name it any way we want
import { fun1, fun2 } from "./module3.js";
defFun();
fun1();
fun2();
