let count = 0;
// document
//   .getElementById("increament-btn")
//   .addEventListener("click", function () {
//     count = count + 1;
//     document.getElementById("count-el").innerHTML = count;
//   });

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increament() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let entry = count + " - ";
  saveEl.textContent += entry;

  countEl.textContent = 0
  count = 0
}
