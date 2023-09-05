// const homeLi = document.querySelector('#navbar li:first-child');
// const menuLi = document.querySelector('#navbar li:nth-child(2)');
// const contactLi = document.querySelector('#navbar li:nth-child(3)');


// export default function attachEventListeners(home,menu,contact,ul){
    
//     ul.addEventListener(click,function(e){
//         togglePage(e);
//     })
// }

export default function toggleBtn(e,home,menu,contact){ 
    const btnList =[home,menu,contact];
    const clicked= e.target.closest('li');
    if (clicked.dataset.selected === "false"){
        btnList.forEach((x)=>{
            if(x.dataset.selected === "true"){
                x.dataset.selected = "false"
            }
        })
        clicked.dataset.selected = "true";

    }
}

