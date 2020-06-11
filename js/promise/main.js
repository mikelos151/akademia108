// const receiveData = () => {
//   let mojPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("dostałem dane");
//     }, 3000)

//     setTimeout(() => {
//       reject("brak danych - coś poszło nie tak");
//     }, 3000)
//   })
//   return mojPromise;
// }

// receiveData()
//   .then(() => console.log("ok"))
//   .catch(() => console.log("błąd"));

const promise = new Promise((resolve, reject) => {
  // resolve("ok");
  reject(new Error("erro!!r"))
})

promise.then(
  result => console.log(result),
  reason => console.log(reason)


)