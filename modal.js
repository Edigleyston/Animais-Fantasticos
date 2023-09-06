export function initModal() {
    const btnOpen = document.querySelector('[data-modal="abrir"]');
    const btnClose = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(btnOpen && btnClose && containerModal) {
      
    //Adicionando ou removendo modal da tela
      function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
      }

      //Fechando modal aonde quer que clique fora dele.
      function clickOutOfModal(event) {
        if(event.target === this) { //targer === this pois se o alvo for no this que se refere ao window
          toggleModal(event);
        }
      }
    
      btnOpen.addEventListener('click', toggleModal);
      btnClose.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', clickOutOfModal);
    }
}