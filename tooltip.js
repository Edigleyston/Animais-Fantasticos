/*Os tooltips irão mostrar uma mensagem ao passar com o mouse em cima*/
export default function iniTooltips(){

}

const tooltips = document.querySelectorAll('[data-tooltip]')

tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver) //o evento mouseover é ativo quando o mouse passa por cima
})

function onMouseOver (event){
    const tooltipBox = createTooltipBox(this)

    /* Aqui está pegando o valor de pageY e pageX de onde está o mouse
    e atribuindo ao style do tooltipBox. Fará com que apareça em cima do mouse. */
    tooltipBox.style.top = event.pageY + 'px'  //como o valor que irá puxar é do tipo float, tem que somar com pixel
    tooltipBox.style.left = event.pageX + 'px'

    console.log(event)
}

function createTooltipBox(element){
    const tooltipBox = document.createElement('div') //criando um elemento div
    const text = element.getAttribute('aria-label') //pegando o conteudo do aria-label

    tooltipBox.classList.add('tooltip') //adicionando a classe tooltips
    tooltipBox.innerText = text //pegando o que está na constante text e adicionando a tooltipbox

    //adicionando a tooltipbox ao final
    document.body.appendChild(tooltipBox)
    return tooltipBox
}