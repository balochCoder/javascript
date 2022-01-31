const photos = [];

// async function photoUpload() {
//   let uploadStatus = new Promise((res, rej) => {
//     setTimeout(() => {
//       photos.push("Profile Pic");
//       res("Photo uploaded");
//     }, 3000);
//   });

//   let result = await uploadStatus;

//   console.log(result);
//   console.log(photos.length);
// }

// photoUpload();
const apiUri = "https://api.chucknorris.io/jokes/random";
async function getJoke() {
  const response = await fetch(apiUri);
  const data = await response.json();

  console.log(data.value);
}

getJoke();
