// const buyFlightTicket = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = true;

//       if (error) {
//         reject("Sorry your payment was not successfull");
//       } else {
//         resolve("Thank you, your payment was successfull");
//       }
//     }, 3000);
//   });
// };

// buyFlightTicket()
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const userData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (error) {
      reject("500 level error");
    } else {
      resolve({
        firstName: "Raheel",
        age: 31,
        email: "raheel@gmail.com",
      });
    }
  }, 3000);
});

userData
  .then((data) => console.log(data.firstName))
  .catch((error) => console.log(error));
