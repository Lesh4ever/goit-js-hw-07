const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", updateOutput);

function updateOutput(event) {
  const name = event.target.value.trim();
  outputElement.textContent = name === "" ? "Anonymus" : name;
}
