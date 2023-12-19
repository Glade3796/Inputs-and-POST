const msgForm = document.getElementById("msgForm");

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
  let p = document.createElement("p");
  p.textContent = json.message;
  document.body.append(p);
}

msgForm.addEventListener("submit", handleMsgFormSubmit);
