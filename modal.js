export function initModal() {
  const btnOpen = document.querySelector('[data-modal="abrir"]');
  const btnClose = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const btnLogin = document.querySelector(`[data-modal="abrir"]`)
  const login = document.querySelector("#login")
  const email = document.querySelector('#email')
  const btnEnter = document.querySelector('.botao')
  const erro = document.querySelector('.erro')
  const erroSenha = document.querySelector('.erro2')
  const senha = document.querySelector('#senha')
 
  const Action ={
    btnEnter: document.querySelector('.botao'),
    blockAcess(){
      Action.btnEnter.disabled = true;
    },
    access(){
      Action.btnEnter.disabled = false      
    }
  }
  function hiddenLoginButton(event){
    if(btnLogin.classList.contains('.logado')){
      btnLogin.remove()
    }
  }
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

  
    login.addEventListener('change',  () => {
      async function getUser(){
        try{
         const responseData = await fetch('/JS/modules/contas.json')
         const dataJson = await responseData.json()
         console.log(`Usuário é ${dataJson.userName}`)
         if(email.value==dataJson.userEmail){
           console.log('passando')
           erro.remove()
         }else{
            email.nextElementSibling.innerText = "Email não cadastrado"
         }if(senha.value!=dataJson.userPass){
           Action.blockAcess()      
          }else{
          btnLogin.classList.add('.logado')
          Action.access()
          return
        }
        }catch(erro){
          console.log(`Houve um erro: ${erro}`)
          Action.blockAcess()
        }
      }
      getUser()
    })
  }
  hiddenLoginButton()
}
