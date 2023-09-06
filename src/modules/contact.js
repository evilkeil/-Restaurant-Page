import { contactItems } from './textObjexts';


function createinfoComponent(){
    const div = document.createElement('div');
    div.classList.add('info')
    const h2 = document.createElement('h2');
    h2.textContent = "Contact Us:";
    const ul = document.createElement('ul');
   
    for(let i = 0;i < 4; i++){
        const li = document.createElement('li');
        li.textContent=contactItems[i];
        ul.appendChild(li);
    }

    div.appendChild(h2);
    div.appendChild(ul);
    return div;
}
function createFinalComponent(){
    const div = document.createElement('div');
    div.classList.add('final');

    const p = document.createElement('p');
    p.classList.add('ending');
    p.textContent = contactItems[4];

    div.appendChild(p);
    return div;
}

export default function contactPageComponent(){
    const contact = document.createElement('div');
    contact.classList.add('contact');


    contact.appendChild(createinfoComponent());
    contact.appendChild(createFinalComponent());
    return contact;
}