//Função de info dos animais
export default function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');

    //Se tiver conteudo
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');// a primeira vai iniciar ativa

        function activeTab(index) {
            //Para cada section da tabContent, remove ativo
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            const direcao = tabContent[index].dataset.anime;
            //adiciona ativo para o index clicado
            tabContent[index].classList.add('ativo', direcao);
        }

        //itemMenu é o index, ou seja a posição do container
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}