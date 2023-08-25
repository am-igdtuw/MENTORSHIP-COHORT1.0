const countElement = document.getElementById('count');
const updateButton = document.getElementById('updateButton');

let count = 0;

updateButton.addEventListener('click', () => {
  count++;
  countElement.textContent = count;
});
