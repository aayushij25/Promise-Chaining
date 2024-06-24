function saveToDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

// saveToDb("apna college")
//   .then(() => {
//     console.log("data1 saved");
//     saveToDb("helloWorld")
//       .then(() => {
//         console.log("data2 saved");
//       });
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// With Promise Chaining
// saveToDb("apna college")
//   .then(() => {
//     console.log("data1 saved");
//     return saveToDb("helloWorld");
//   })
//   .then(() => {
//     console.log("data2 saved");
//     return saveToDb("aayushi");
//   })
//   .then(() => {
//     console.log("data3 saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

// promises are rejected and resolved with some data (valid results or errors)
saveToDb("apna college")
  .then((result) => {
    console.log("data1 saved");
    console.log("result of promise: ", result);
    return saveToDb("helloWorld");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return saveToDb("aayushi");
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result of promise: ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("error of promise: ", error);
  });