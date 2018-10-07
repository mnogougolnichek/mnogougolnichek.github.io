"use strict";

document.addEventListener('DOMContentLoaded', main);

function main() {
  (() =>{
    function ShowError(errors, event) {
      Array.from(event.target.querySelectorAll('.error-container')).forEach(item => item.remove());
      for(let i = 0;i<errors.length;i++){
        if(errors[i].element.offsetParent.querySelector('.error-container')){
          errors[i].element.offsetParent.querySelector('.error-container').innerText = errors[i].message;
        } else {
          let span = document.createElement('span');
          span.classList.add("error-container");
          span.innerText = errors[i].message;
          errors[i].element.offsetParent.appendChild(span);
        }

      }
    }



    let validator = new FormValidator('form', [
      {
        name: 'username',
        display: 'username',
        rules: 'required|min_length[2]',
      },
        {
            name: 'e-mail',
            rules: 'required|valid_email'
        },
      {
        name: 'password',
        display: 'password',
        rules: 'required|min_length[6]'
      },
      {
        name: 'password_repeat',
        display: 'password confirmation',
        rules: 'required|min_length[6]|matches[password]'
      }
    ], function(errors, event) {
      console.log(event);
      ShowError(errors, event);

    });
  })();
}




