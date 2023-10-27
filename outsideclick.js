export function outsideClick(element, callback){
    const html = document.documentElement //selecionando o html
    html.addEventListener('click', handleOutsideClick)
    
    //se clicar fora do dropdown, fecha ele
    function handleOutsideClick(event){
        
        if(!element.contains(event.target)){//se o target nao for no elemnt(o dropdown) vai executar

            callback()
        }
    }
}
