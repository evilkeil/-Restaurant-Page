import curry from './curryPlatter.webp';
import Jaffna from './jaffnaSeafood.webp';
import kottu from './kottu.jpg';
import { menuItems } from './textObjexts';


function createItem1(){
    const item = document.createElement('div');
    item.classList.add('item-1');

    const text = document.createElement('div');
    text.classList.add('text');
    item.appendChild(text);

    const h2 = document.createElement('h2');
    h2.textContent = menuItems.item1.name;
    text.appendChild(h2);

    const para = document.createElement('p');
    para.classList.add('menu-descript');
    para.textContent=menuItems.item1.description;
    text.appendChild(para);

    const img = document.createElement('div');
    img.classList.add('img');
    const imgTag = new Image();
    imgTag.src = curry;
    img.appendChild(imgTag);
    item.appendChild(img);

    return item;

}

function createItem2(){
    const item = document.createElement('div');
    item.classList.add('item-2');

    const text = document.createElement('div');
    text.classList.add('text2');
    item.appendChild(text);

    const h2 = document.createElement('h2');
    h2.textContent = menuItems.item2.name;
    text.appendChild(h2);

    const para = document.createElement('p');
    para.classList.add('menu-descript');
    para.textContent=menuItems.item2.description;
    text.appendChild(para);

    const img = document.createElement('div');
    img.classList.add('img2');
    const imgTag = new Image();
    imgTag.src = Jaffna;
    img.appendChild(imgTag);
    item.appendChild(img);

    return item;

}



export default function menuPageComponent(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

   menu.appendChild(createItem1());
   menu.appendChild(createItem2());
  
    return menu;

};