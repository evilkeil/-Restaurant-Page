export default function HeaderComponent(){
    //header
    const header = document.createElement('header');
    header.setAttribute('id','header');

    // logo
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoH2= document.createElement('h2');
    logoH2.textContent = "Ayubowan!";
    logo.appendChild(logoH2);
    header.appendChild(logo);

    //navbar
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    const ul = document.createElement('ul');

    //  btns
    const home = document.createElement('li');
    home.setAttribute('data-selected', '')
    home.textContent="HOME";
    ul.appendChild(home);
    const menu = document.createElement('li');
    menu.textContent="MENU";
    ul.appendChild(menu);
    const contact = document.createElement('li');
    contact.textContent="CONTACT";
    ul.appendChild(contact);

    navbar.appendChild(ul);
    header.appendChild(navbar);

    return header;
}