const counter = document.getElementById('clicker_start');
const basket_not_empty = document.getElementById('basket_not_empty')
const plus =  document.getElementById('plus');
const minus =  document.getElementById('minus');
const one =  document.getElementById('one');
const ro = document.getElementById('ro');
const to = document.getElementById('to');
const inf = document.getElementById('inf');
const num = document.getElementById('number');
const plus_0 =  document.getElementById('plus_0');
const minus_0 =  document.getElementById('minus_0');
const one_0 =  document.getElementById('one_0');
const bot = document.getElementById('bottom_author');
const del_0 = document.getElementById('delete_basket0');
const del_1 = document.getElementById('delete_basket1');
const cost0 = document.getElementById('r_15');
const cost1 = document.getElementById('r_17');
const adress_0 = document.getElementById('adress_0');
const number_0 = document.getElementById('number_0');
const n_1 = document.getElementById('n_1');
const tovar_1 = document.getElementById('tovar_1');
const n_2 = document.getElementById('n_2');
const but = document.getElementById('button_access')

function null_basket(){
  ro.style.display = 'none';
  to.style.display = 'none';
  inf.style.display = 'none';
  num.style.display = 'none';
  but.style.display = 'none';
  cost0.style.display = 'none';
  cost1.style.display = 'none';
  basket_not_empty.style.display = 'block';
};

const watermelon = 10.5; 
const watermelon1 = 11.9; 
let amount = 0;
let amount_0 = 0;

let romanza = localStorage.getItem('romanza');
let topgun = localStorage.getItem('topgun');

let count = localStorage.getItem('count') || 0;

counter.innerText = count;

let text = counter.innerText;

if (text == '1' || text == '2'){
  basket_not_empty.style.display = 'none';
}

plus.addEventListener('click', ()=>{
  if(amount<200){
    amount++
    one.innerText = amount
  }
});

minus.addEventListener('click', ()=>{
  if(amount>1){
    amount--
    one.innerText = amount
  }
});

if (romanza == 'ROMANZA' && topgun == 'TOPGUN'){
  to.style.top = '591px';
  inf.style.top = '863px';
  to.style.display = 'block';
  del_0.addEventListener('click', ()=>{
    ro.style.display = 'none';
    to.style.top = '322px';
    inf.style.top = '597px';
    count = localStorage.getItem('count')
    localStorage.setItem('count' , count-1);
    count = localStorage.getItem('count')
    counter.innerText = count;
    localStorage.removeItem('romanza');
  })
  del_1.addEventListener('click', ()=>{
    to.style.display = 'none';
    ro.style.top = '322px';
    inf.style.top = '597px';
    count = localStorage.getItem('count')
    localStorage.setItem('count' , count-1);
    count = localStorage.getItem('count')
    counter.innerText = count;
    localStorage.removeItem('topgun');
  })
};

if (romanza == 'ROMANZA' && !topgun){
  ro.style.display = 'block';
  to.style.display = 'none';
  del_0.addEventListener('click', ()=>{
    ro.style.display = 'none';
    to.style.top = '322px';
    inf.style.top = '597px';
    count = localStorage.getItem('count')
    localStorage.setItem('count' , count-1);
    count = localStorage.getItem('count')
    counter.innerText = count;
    localStorage.removeItem('romanza');
  })
}

if(topgun == 'TOPGUN' && !romanza){
  ro.style.display = 'none';
  to.style.top = '322px'
  del_1.addEventListener('click', ()=>{
    to.style.display = 'none';
    ro.style.top = '322px';
    inf.style.top = '597px';
    count = localStorage.getItem('count')
    localStorage.setItem('count' , count-1);
    count = localStorage.getItem('count');
    counter.innerText = count;
    localStorage.removeItem('topgun'); 
  })
};

plus_0.addEventListener('click', ()=>{
  if(amount_0<200){
    amount_0++
    one_0.innerText = amount_0
  }
});

minus_0.addEventListener('click', ()=>{
  if(amount_0>1){
    amount_0--
    one_0.innerText = amount_0
  }
});

function calculate() {
  let romanza1 = localStorage.getItem('romanza');
  let topgun1= localStorage.getItem('topgun');
  const one =  document.getElementById('one');
  const one_0 =  document.getElementById('one_0');
  if (romanza1 && topgun1){
    const wtr = Number(one.innerText);
    const wtr_0 = Number(one_0.innerText);
    const sum = wtr + wtr_0;
    const sss = sum * watermelon;
    const sss1 = sum * watermelon1;
    n_1.innerText = `${sss.toFixed(2)} р.`;
    n_2.innerText = `${sss1.toFixed(2)} р.`;
    tovar_1.innerText = `${sum} товаров`
  }

  if(romanza1 && !topgun1){
    const wtr = Number(one.innerText);
    const sss = wtr * watermelon;
    const sss1 = wtr * watermelon1;
    n_1.innerText = `${sss.toFixed(2)} р.`;
    n_2.innerText = `${sss1.toFixed(2)} р.`;
    tovar_1.innerText = `${wtr} товаров`
  }

  if(!romanza1 && topgun1){
    const wtr_0 = Number(one_0.innerText);
    const sss = wtr_0 * watermelon;
    const sss1 = wtr_0 * watermelon1;
    n_1.innerText = `${sss.toFixed(2)} р.`;
    n_2.innerText = `${sss1.toFixed(2)} р.`;
    tovar_1.innerText = `${wtr_0} товаров`
  }
  
}

but.addEventListener('click', ()=>{
    const adress = adress_0.value;
    const number = number_0.value;
    const romanza = one.innerText;
    const topgun = one_0.innerText;
    const cost = n_1.innerText;
    adress_0.value="";
    number_0.value="";
    null_basket();
    localStorage.setItem('count' , 0);
    count = localStorage.getItem('count');
    counter.innerText = count;
    const value = `Адрес заказчика: ${adress}, Номер: ${number}, Арбузов Романза: ${romanza}, Арбузов ТопГан: ${topgun}, Прибл-ная стоимость: ${cost}`;
    fetch('http://localhost:3000/input', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ value })
            })
            .then(response => response.json())
            .then(data => {
                console.log(`Server response: ${data.status}`);
                let receivedValue = data.value;
            });
  });

function she_null_basket(){
  if(count == 0){
    null_basket();
  };
}

setInterval(she_null_basket, 1);
setInterval(calculate, 500); 






