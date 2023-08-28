const counter = document.getElementById('clicker_start');
const top_Gun_Button = document.getElementById('addToCartButton');
const romanza_Button = document.getElementById('addToCartButton0');
const burger = document.querySelector('.burger')

let count = localStorage.getItem('count') || 0;

counter.innerText = count;

top_Gun_Button.addEventListener('click' ,()=>{
  if (count < 2) {
    count++;
    counter.innerText = count;
    localStorage.setItem('count', count);
    localStorage.setItem('romanza', 'ROMANZA' );
  }
});

romanza_Button.addEventListener('click' , ()=>{
  if (count < 2) {
    count++;
    counter.innerText = count;
    localStorage.setItem('count', count);
    localStorage.setItem('topgun', 'TOPGUN' );
  }
});

function checkbox(){
  if (burger.checked){
    
  };
};




