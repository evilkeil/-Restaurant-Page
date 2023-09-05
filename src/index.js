import '/src/assets/style.css';
import HeaderComponent from '/src/modules/header.js';
import homePageComponent from '/src/modules/about.js';
import menuPageComponent from '/src/modules/menu.js';



  
  document.body.appendChild(HeaderComponent());
  // document.body.appendChild(homePageComponent());   //commented out so that i can see the other page
  document.body.appendChild(menuPageComponent());