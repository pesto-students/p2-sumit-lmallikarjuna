// function MyPromise(fn) {
//   status = "PENDING";
//   message = null;
//   function resolve(val) {
//     status = "RESOLVED";
//     message = val;
//   }
//   function reject(val) {
//     status = "REJECTED";
//     message = val;
//   }
//   fn(resolve, reject);
//   return {
//     then(fn) {
//       fn(message);
//       return new MyPromise();
//     },
//     catch(fn) {
//       fn(message);
//       return new MyPromise();
//     },
//   };
// }

function getNumber(timeout) {
  return new Promise(function (resolve, reject) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log("randomNumber: " + randomNumber);
    if (randomNumber % 5 === 0) {
      setTimeout(() => {
        resolve("Resolved");
      }, timeout);
    } else {
      setTimeout(() => {
        reject("Rejected");
      }, timeout);
    }
  });
}

getNumber(2000)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
