function calculateIMC(event) {
  event.preventDefault();

  let totalResults = document.getElementsByClassName("imc-result").length;

  if (totalResults != 0) {
    let oldResult = document.querySelector(".imc-result");
    oldResult.remove();
  }

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let imc = weight / height ** 2;

  let imcResultDiv = document.querySelector(".imc-js");
  let newElement = document.createElement("div");
  newElement.setAttribute("class", "imc-result");
  newElement.innerText = Math.round(imc);

  if (imc < 25) {
    newElement.setAttribute("class", "imc-result imc-green");
  } else if (imc >= 25 && imc <= 30) {
    newElement.setAttribute("class", "imc-result imc-orange");
  } else {
    newElement.setAttribute("class", "imc-result imc-red");
  }

  imcResultDiv.appendChild(newElement);
}
