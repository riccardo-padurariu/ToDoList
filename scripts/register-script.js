export function toggleCheckPassword(){
  const input = document.querySelector('.js-password');

  if(input.type === 'password')
    input.type = 'text';
  else
    input.type = 'password';
}

document.querySelector('.js-check-box')
  .addEventListener('click', () => {
    toggleCheckPassword();
  });



function checkUserName(username){
  if(username.includes(' ') || username === ''){
    document.querySelector('.input-username')
      .classList.remove('itsokinput');
    document.querySelector('.username-validation')
      .classList.remove('itsok');
    document.querySelector('.username-validation')
      .classList.add('itsnotok');
    document.querySelector('.input-username')
      .classList.add('itsnotokinput');
    document.querySelector('.username-validation')
      .innerHTML = '*Enter a valid username';
  }else{
    document.querySelector('.input-username')
      .classList.remove('itsnotokinput');
    document.querySelector('.username-validation')
      .classList.remove('itsok');
    document.querySelector('.username-validation')
      .classList.add('itsok');
    document.querySelector('.input-username')
      .classList.add('itsokinput');
    document.querySelector('.username-validation')
      .innerHTML = 'Ok';
  }
}

function checkEmail(email){
  if(!email.includes('@') || email === ''){
    document.querySelector('.input-email')
      .classList.remove('itsokinput');
    document.querySelector('.email-validation')
      .classList.remove('itsok');
    document.querySelector('.email-validation')
      .classList.add('itsnotok');
    document.querySelector('.input-email')
      .classList.add('itsnotokinput');
    document.querySelector('.email-validation')
      .innerHTML = '*Enter a valid email';
  }else{
    document.querySelector('.input-email')
      .classList.remove('itsnotokinput');
    document.querySelector('.email-validation')
      .classList.remove('itsok');
    document.querySelector('.email-validation')
      .classList.add('itsok');
    document.querySelector('.input-email')
      .classList.add('itsokinput');
    document.querySelector('.email-validation')
      .innerHTML = 'Ok';
  }
}

function checkPassword(password){
  if(password.includes(' ') || password === ''){
    document.querySelector('.input-password')
      .classList.remove('itsokinput');
    document.querySelector('.password-validation')
      .classList.remove('itsok');
    document.querySelector('.password-validation')
      .classList.add('itsnotok');
    document.querySelector('.input-password')
      .classList.add('itsnotokinput');
    document.querySelector('.password-validation')
      .innerHTML = '*Enter a valid password';
  }else{
    document.querySelector('.input-password')
      .classList.remove('itsnotokinput');
    document.querySelector('.password-validation')
      .classList.remove('itsok');
    document.querySelector('.password-validation')
      .classList.add('itsok');
    document.querySelector('.input-password')
      .classList.add('itsokinput');
    document.querySelector('.password-validation')
      .innerHTML = 'Ok';
  }
}

function checkConfirmation(confirmation,password){
  if(confirmation !== password || confirmation === ''){
    document.querySelector('.input-confirmation')
      .classList.remove('itsokinput');
    document.querySelector('.confirmation-validation')
      .classList.remove('itsok');
    document.querySelector('.confirmation-validation')
      .classList.add('itsnotok');
    document.querySelector('.input-confirmation')
      .classList.add('itsnotokinput');
    document.querySelector('.confirmation-validation')
      .innerHTML = '*The passwords does not correspond';
  }else{
    document.querySelector('.input-confirmation')
      .classList.remove('itsnotokinput');
    document.querySelector('.confirmation-validation')
      .classList.remove('itsok');
    document.querySelector('.confirmation-validation')
      .classList.add('itsok');
    document.querySelector('.input-confirmation')
      .classList.add('itsokinput');
    document.querySelector('.confirmation-validation')
      .innerHTML = 'Ok';
  }
}

document.querySelector('.register-button')
  .addEventListener('click',() => {
    document.querySelectorAll('.validation-p')
      .forEach((link) => {
        link.innerHTML = '';
      });
    const username = document.querySelector('.input-username').value;
    const email = document.querySelector('.input-email').value;
    const password = document.querySelector('.input-password').value;
    const confirmation = document.querySelector('.input-confirmation').value;
    
    checkUserName(username)
    checkEmail(email);
    checkPassword(password);
    checkConfirmation(confirmation,password);

  });