let myLeads = [];

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
        <a href="${leads[i]}" target="_blank"> ${leads[i]}</a>
    </li>`;
  }

  ulEL.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  let input = inputEl.value;
  myLeads.push(input);
  //   console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// console.log( localStorage.getItem("myLeads") )
//   ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
//   const li = document.createElement("li");
//   li.textContent = myLeads[i];
//   ulEL.append(li);
// listItems += "<li><a href='"+myLeads[i] +"' target='_blank'>" + myLeads[i] + "</a></li>";
