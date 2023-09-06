export function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

    //função para o scroll suave
    function scrollToSection(event) {
        event.preventDefault(); //previnir de executar o padrão do item clicado
        const href = event.currentTarget.getAttribute('href'); //o event alvo(currentTarget) clicado irá pegar o atributo(getAtribute) href
        const section = document.querySelector(href);  //a section que está sendo alvo do href
        //const topo = section.offsetTop; //está pegando o topo da seção

        //scroll suave, scrollIntoView leva eixo x e y, podemos usar um object também
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /* 
         FORMA ALTERNATIVA do scroll suave
         o scrollTo é dar um scroll até o eixo (x , y), mas é possível usar o options, que é usando objetos
         como abaixo
         window.scrollTo({
             top: topo,
             behavior: 'smooth', //behavior é o comportamento que irá tomar, no caso smooth é o scroll suave
         }) 
         */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

//Voltando para inicio da pagina
export function scrollHome() {
    const backToHome = document.querySelector('.backToHome');
    backToHome.classList.remove('disabled');
    backToHome.classList.add('activedBack');

    function homeSweetHome() {
        const inicio = document.querySelector('body');
        const noneBack = document.querySelector('.backToHome');
        inicio.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        //fazendo opção de voltar sumir
        setTimeout(function () {
            noneBack.classList.add('disabled');
            noneBack.classList.remove('activedBack');
        }, "1000");
    }

    backToHome.addEventListener('click', homeSweetHome)
}