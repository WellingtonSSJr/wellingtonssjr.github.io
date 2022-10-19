const itemMenu = document.querySelectorAll('.header-menu a')


function navMarcado(){
function ativo(event){

        itemMenu.forEach((item)=>{
            item.classList.remove('ativo')
        })
        
        event.currentTarget.classList.toggle('ativo')
    
    
}

function scroll(){
    
}

itemMenu.forEach((item)=>{
    item.addEventListener('click', ativo)
})

}

navMarcado()