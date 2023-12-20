const msgForm = document.getElementById("msgForm");
const p = document.getElementById("p");
const hisDiv = document.getElementById("history");

async function historyData() {
  const response = await fetch("http://localhost:2023/messages");
  const json = await response.json();
  // console.log(json);
  // let deleteMe = document.getElementsByClassName("data");
  // console.log(deleteMe);
  // hisDiv.removeChild();
  // deleteMe.remove();
  // p.textContent = `Message sent: ${json[json.length - 1].content}`;
  json.forEach((element) => {
    let historyP = document.createElement("p");
    historyP.setAttribute("class", "data");
    historyP.textContent = `${element.name} : ${element.content}`;
    hisDiv.append(historyP);
  });
}
async function handleMsgFormSubmit(event) {
  event.preventDefault();
  console.log("Message submitted - tysm");
  //get form data:
  const formData = new FormData(msgForm);
  const message = formData.get("message");
  //give values to API:
  fetch("http://localhost:2023/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ message }),
  });
  const response = await fetch("http://localhost:2023/messages");
  const json = await response.json();
  console.log(json);
  let deleteMe = document.getElementsByClassName("data");
  console.log(deleteMe);
  for (let i = 0; i < deleteMe.length; i++) {
    deleteMe[i].remove();
  }
  // deleteMe.array.forEach((element) => {
  //   element.remove();
  // });
  p.textContent = `Message sent: ${json[json.length - 1].content}`;
  json.forEach((element) => {
    let historyP = document.createElement("p");
    historyP.setAttribute("class", "data");
    historyP.textContent = `${element.name} : ${element.content}`;
    hisDiv.append(historyP);
  });

  // let now = new Date();
  // let hours = now.getHours();
  // let minutes = now.getMinutes();
  // historyP.textContent =
  // `@ ${hours}.${minutes} user:` + json[json.length - 1].content;
}
historyData();
msgForm.addEventListener("submit", handleMsgFormSubmit);
