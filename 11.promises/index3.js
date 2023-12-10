// Promise chaining .then() calls
// remember if you want to chain the current .then() to the next .then() then the current .then() should have a promise that should be resolved.
let data1;
let data2;
let data3;

const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const loadData = "Data1 is loaded";
    console.log(loadData); // Log the data when it's loaded
    resolve(loadData); // Resolve the promise with the data
  }, 3000);
});

getData
  .then((data) => {
    // This .then() block receives the data from the previous step
    data1 = data;
    return new Promise((resolve) => {
      setTimeout(() => {
        data2 = `Data2 can now be accessed because ${data1}`;
        console.log(data2);
        resolve(data2);
      }, 4000);
    });
  })
  .then((data) => {
    // This .then() block receives data2 from the previous step
    if (data) {
      setTimeout(() => {
        console.log("Timer is encountered for data3");
      }, 3000);
    } else {
      data3 = `Data3 can now be accessed because ${data}`;
      console.log(data3);
    }
  })
  .catch((error) => {
    console.error(error);
  });
