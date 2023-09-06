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
      const doesntHavePageOne = !document.body.querySelector('.container');
      const doesntHavePageTwo = !document.body.querySelector('.menu');
      const doesntHavePageThree = !document.body.querySelector('.contact');

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

    function removePage(){
      const check = hasChild();
      if(check.doesntHavePageOne === false){
        const pg1 = document.querySelector('.container');
        document.body.removeChild(pg1);
      }else if(check.doesntHavePageTwo === false){
        const pg2 = document.body.querySelector('.menu');
        document.body.removeChild(pg2);
      }else if(check.doesntHavePageThree === false){
        const pg3 = document.body.querySelector('.contact');
        document.body.removeChild(pg3);
       } }

      btns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
          toggleBtn(e,homeLi,menuLi,contactLi,navbtns);
          removePage();
          togglePage();
        })

      })


    }();
      
  