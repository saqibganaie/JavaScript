// * This is the es6 module way which is the better and the new way of exporting modules

export const fun1 = () => {
  console.log("es6 module 1 exported");
};

export function fun2() {
  console.log("Fun2 exported es6 way");
}
const fun3 = () => {
  console.log("this is the default fun from es6 module");
};

export default fun3;

// * we could have also exported them like this
//export { fun1, fun2 };
