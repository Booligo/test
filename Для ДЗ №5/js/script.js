let ul = document.querySelector('.menu');
let menui = document.getElementsByClassName('menu-item');
let li = document.createElement('li'),
li2 = document.createElement('li');
li.classList.add('menu-item');
ul.appendChild(li);
li.textContent = 'Пятый пункт';
ul.replaceChild(menui[2],menui[1]);
li2.classList.add('menu-item');
ul.insertBefore(li2,menui[2]);
li2.textContent = 'Третий пункт';
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
let div = document.querySelector('.title');
div.textContent = 'Мы продаём только подлинную технику Apple';
let div1 = document.getElementsByClassName('column'),
    div2 = document.getElementsByClassName('adv');
    div1[1].removeChild(div2[0]);
let pr = document.getElementById('prompt');
let pro = prompt("Ваше отношеник к технике Apple?");
pr.textContent = pro;
