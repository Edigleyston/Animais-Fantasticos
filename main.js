function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    //Abre resposta da FAQ
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    //Adicionando Evento de click nas perguntas da FAQ
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave() {
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
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible)
          section.classList.add('ativo');
        else
          section.classList.remove('ativo');
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll();

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
