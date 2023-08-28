const counter = document.getElementById('clicker_start');
const top_Gun_Button = document.getElementById('addToCartButton');
const romanza_Button = document.getElementById('addToCartButton0');
const burger = document.querySelector('.burger')
const burger_0 = document.querySelector('.burger_0')
const burger_menu = document.getElementById('burger_menu')

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

function onburger(){
  burger_menu.style.display = 'block';
  burger.style.display = 'none';
};

function onburger_0(){
  burger_menu.style.display = 'none';
  burger.style.display = 'block';
};

burger.addEventListener('click' , ()=>{
  onburger();
});

burger_0.addEventListener('click',()=>{
  onburger_0();
});




