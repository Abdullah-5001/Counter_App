let count = 0;
let counter = document.querySelector("#counter");

let increaseBtn = document.querySelector("#increase");
increaseBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});

let decreaseBtn = document.querySelector("#decrease");
decreaseBtn.addEventListener("click", () => {
  count--;
  updateCounter();
});

let resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});
function updateCounter() {
  counter.innerText = count;

  if (count > 0) {
    counter.style.color = "green";
  } else if (count < 0) {
    counter.style.color = "red";
  } else {
    counter.style.color = "black";
  }
}
