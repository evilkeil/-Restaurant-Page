import '/src/assets/style.css';
import HeaderComponent from '/src/modules/header.js';
import homePageComponent from '/src/modules/about.js';
import menuPageComponent from '/src/modules/menu.js';
import toggleBtn from '/src/modules/buttonEventListerners.js';



  
  document.body.appendChild(HeaderComponent());

  const navEventListners = function(){
      const navbtns = document.querySelector('#navbar ul');
      const homeLi = document.querySelector('#navbar li:first-child');
      const menuLi = document.querySelector('#navbar li:nth-child(2)');
      const contactLi = document.querySelector('#navbar li:nth-child(3)');
      const btns = [homeLi,menuLi,contactLi];

      btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          toggleBtn(e,homeLi,menuLi,contactLi,navbtns);
        })

      })
    }();
      
  // document.body.appendChild(homePageComponent());   //commented out so that i can see the other page
  document.body.appendChild(menuPageComponent());