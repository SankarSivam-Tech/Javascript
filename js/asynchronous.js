//synchronous example

console.log("one");
console.log("two");
console.log("three");

//asynchromous example

console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");

//asynchronous javascript

//promises
// 3 states: pending,fulfilled,rejected

const myPromise = new Promise((resolve, reject) => {
  const error = true;
  if (!error) {
    resolve("yes! resolved the promise");
  } else {
    reject("no!.rejected the promise");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));

//pending example

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   // console.log(users);

//   .then((res) => res.json())
//   // .then(users=>console.log(users)
//   // )
//   .then((users) => users.forEach((user) => console.log(user)));

//  async/await

const userData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
//   console.log(users);
  return users;
};
userData();

const anotherFunction = async () => {
  const data = await userData()
  console.log(data)
  return data
};
anotherFunction()
