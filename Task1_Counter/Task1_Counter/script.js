const mainTitle = document.querySelector('#title');
let curValue =0;

const btnDecrement = document.querySelector('#Decrement');
const btnReset = document.querySelector('#Reset');
const btnIncrement = document.querySelector('#Increment');

btnIncrement.addEventListener('click', () => {
   curValue++;
   mainTitle.textContent = curValue;
});
btnDecrement.addEventListener('click', () => {
    curValue--;
    mainTitle.textContent = curValue;
 });
 btnReset.addEventListener('click', () => {
    curValue= 0;
    mainTitle.textContent = curValue;
 });

 document.addEventListener('keydown', (event) => {
    if (event.key === 'PageUp') {
        curValue++;
        mainTitle.textContent = curValue;
    } else if (event.key === 'PageDown') {
        curValue--;
        mainTitle.textContent = curValue;
    }
});
