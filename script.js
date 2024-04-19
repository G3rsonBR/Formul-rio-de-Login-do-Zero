function createAccount(){
  let formLogin = document.querySelector('.login');
  let formForgotPassword = document.querySelector('.forgotPassword');
  let formCreate = document.querySelector('.createAccount');
  formLogin.style.display = 'none'
  formForgotPassword.style.display = 'none'
  formCreate.style.display = 'flex'
}

function login() {
  let formLogin = document.querySelector('.login');
  let formForgotPassword = document.querySelector('.forgotPassword');
  let formCreate = document.querySelector('.createAccount');
  formCreate.style.display = 'none'
  formForgotPassword.style.display = 'none'
  formLogin.style.display = 'flex'
}

function forgotPassword(){
  let formForgotPassword = document.querySelector('.forgotPassword');
  let formCreate = document.querySelector('.createAccount');
  let formLogin = document.querySelector('.login');
  formLogin.style.display = 'none'
  formCreate.style.display = 'none'
  formForgotPassword.style.display = 'flex'
}