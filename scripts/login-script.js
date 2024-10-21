import { toggleCheckPassword } from "./register-script.js";

document.querySelector('.js-check-box')
  .addEventListener('click', () => {
    toggleCheckPassword();
  });