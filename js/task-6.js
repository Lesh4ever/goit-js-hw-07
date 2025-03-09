function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const container = document.querySelector("#boxes");

createBtn.addEventListener("click", () => {
  const amount = Number(input.value.trim());

  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert("Please enter a number from 1 to 100");
    return;
  }

  createBoxes(amount);
  input.value = "";
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  const divs = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    divs.push(div);
    size += 10;
  }

  container.append(...divs);
}

function destroyBoxes() {
  container.innerHTML = "";
}
