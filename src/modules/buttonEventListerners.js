

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

