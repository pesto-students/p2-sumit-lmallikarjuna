function fetchSingleUser() {
  return Promise.resolve({
    firstName: "Lohith Mallikarjun",
    lastName: "K E",
    age: 22,
    address: {
      country: "India",
      city: "Bangalore",
    },
  });
}

function* fetchUserWithGenerator() {
  yield fetchSingleUser().then((user) => user);
}

fetchUserWithGenerator()
  .next()
  .value.then((user) => {
    console.log("----- Generator ------");
    console.log(user);
  });

async function fetchUserWithAsyncAwait() {
  return await fetchSingleUser();
}
``
fetchUserWithAsyncAwait().then((user) => {
  console.log("----- Async/Await -----");
  console.log(user);
});
