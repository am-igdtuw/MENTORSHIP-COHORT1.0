const countElement = document.getElementById("count");
const updateCountBtn = document.getElementById("updateCountBtn");

let count = 0; 


const updateCountDisplay = () => {
  countElement.textContent = count;
};


const incrementCount = () => {
  count++;
  updateCountDisplay();
};

updateCountBtn.addEventListener("click", incrementCount);

updateCountDisplay();
