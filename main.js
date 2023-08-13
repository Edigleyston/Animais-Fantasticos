function initTabMenu() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            //Para cada section da tabContent, remove ativo
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            })
            //adiciona ativo para o index clicado
            tabContent[index].classList.add('ativo');

        }

        //itemMenu é o index, ou seja a posição do container
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo'
    if (accordionList.length) {
        //Já vai iniciar com primeira pergunta da FAQ ativa
        accordionList[0].classList.add(activeClass)
        accordionList[0].nextElementSibling.classList.add(activeClass)

        //Abre resposta da FAQ
        function activeAccordion() {
            this.nextElementSibling.classList.toggle(activeClass) //o nextElementSibling vai aplicar no proximo elemento html
        }

        //Adicionando Evento de click nas perguntas da FAQ
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');//a[href^="" diz que 'o link q começar com'

    //função para o scroll suave
    function scrollToSection(event) {
        event.preventDefault(); //previnir de executar o padrão do item clicado

        const href = event.currentTarget.getAttribute('href'); //o event alvo(currentTarget) clicado irá pegar o atributo(getAtribute) href
        const section = document.querySelector(href) //a section que está sendo alvo do href
        //const topo = section.offsetTop; //está pegando o topo da seção

        //scroll suave, scrollIntoView leva eixo x e y, podemos usar um object também
        section.scrollIntoView({
            behavior: 'smooth', //behavior=comportamento é smooth = suave
            block: 'start', // vai até o ponto começando no começo=start do bloco=block
        })

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
        link.addEventListener('click', scrollToSection)
    });
}

const sections = document.querySelectorAll('.js-scroll');

function animaScroll() {
    
}

window.addEventListener('scroll', animaScroll)


//Voltando para inicio da pagina
function scrollHome() {
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

window.addEventListener('scroll', scrollHome)
initAccordion();
initTabMenu();
initScrollSuave();
