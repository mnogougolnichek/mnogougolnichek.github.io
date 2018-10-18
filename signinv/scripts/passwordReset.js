"use strict";

function passwordResetTmpl() {
    return ` <form class="form" id="passwordReset">
  <h1 class="h1">
    Forgot password?
  </h1>
  <label for="email">
    <span id="emailTooltip"></span>
    <span id="emailTitle" class="form__title">Enter your e-mail</span>
    <input class="form__input" type="text" name="email" id="email" required>
  </label>
  <button id="submitButton" class="button c-form__button" type="button">
    Send me instructions  
  </button>
</form>`
}

function passwordReset() {
    let container = document.querySelector('.c-form');
    container.innerHTML = passwordResetTmpl();
}
