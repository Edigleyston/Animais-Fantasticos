import { outsideClick } from "/JS/modules/outsideclick.js"
export default function initDropDownMenu(){
    const dropdownMenus = document.querySelectorAll('[data-dropdown]')
    dropdownMenus.forEach(menu =>{
        //adicionando mais de um evento
        ['touchstart','click'].forEach(userEvent =>{ //userEvent poderia ser qualquer nome
            menu.addEventListener(userEvent, handleClick) //ao inves do nome do evento, passa o nome da array
        })
    })
    
    function handleClick(event){
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, () => {
            this.classList.remove('active')
        })
    }

}



