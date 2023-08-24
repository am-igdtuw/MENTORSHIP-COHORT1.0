const button =document.querySelector('button')
const count =document.querySelector('.count')
let clickcount=0;

button.addEventListener('click',function(){
    clickcount+=1;
    count.innerHTML=clickcount;
})