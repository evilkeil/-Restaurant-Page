import '/src/assets/style.css';
import HeaderComponent from '/src/modules/header.js';
import homePageComponent from '/src/modules/about.js';
import menuPageComponent from '/src/modules/menu.js';
import contactPageComponent from '/src/modules/contact.js';
import toggleBtn from '/src/modules/buttonEventListerners.js';



  
  document.body.appendChild(HeaderComponent());
  document.body.appendChild(homePageComponent());


  const navEventListners = function(){
      const navbtns = document.querySelector('#navbar ul');
      const homeLi = document.querySelector('#navbar li:first-child');
      const menuLi = document.querySelector('#navbar li:nth-child(2)');
      const contactLi = document.querySelector('#navbar li:nth-child(3)');
      const btns = [homeLi,menuLi,contactLi];

    function hasChild(){
      const doesntHavePageOne = !parent.querySelector('.container') !== null;
      const doesntHavePageTwo = parent.querySelector('.menu') !== null;
      const doesntHavePageThree = parent.querySelector('.contact') !== null;

      return{
        doesntHavePageOne,
        doesntHavePageTwo,
        doesntHavePageThree
      }
    }
    function togglePage(){
      const check = hasChild();
      if(homeLi.dataset.selected === "true"){
        if(check.doesntHavePageOne){
          document.body.appendChild(homePageComponent());
        }
      }else if(menuLi.dataset.selected === "true"){
        if(check.doesntHavePageTwo){
          document.body.appendChild(menuPageComponent());
        }
      }else if(contactLi.dataset.selected === "true"){
        if(check.doesntHavePageThree){
          document.body.appendChild(contactPageComponent());
        }
      }
    };
    
      btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          toggleBtn(e,homeLi,menuLi,contactLi,navbtns);
          togglePage()
        })

      })


    }();
      
  // document.body.appendChild(homePageComponent());   //commented out so that i can see the other page
  // document.body.appendChild(menuPageComponent()); //commented out so that i can see the other page
  // document.body.appendChild(contactPageComponent());