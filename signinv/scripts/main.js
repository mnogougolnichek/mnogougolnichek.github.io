"use strict";

document.addEventListener("DOMContentLoaded",main);

function main() {
    let form = document.getElementById('sign-in'),
        passwordResetLink = document.getElementById('passwordResetLink');
        let  signIn = new Validate({
            form: form,
            callback: logInSuccess,
            emailTooltip: document.getElementById("emailTooltip"),
            passwordTooltip: document.getElementById("passwordTooltip"),
            emailTitle: document.getElementById("emailTitle"),
            passwordTitle: document.getElementById("passwordTitle")
        });

//I wondered if it was normal to initialize an object here with a click.
// In the end, I decided that once a click is guaranteed, it can be done once.
// Like any junior I hope that I will receive feedback.
// Because I'm not sure that I understood the task correctly and correctly executed it.

    passwordResetLink.onclick = (event)=>{
        event.preventDefault();
        passwordReset();
        let passwordResetForm = document.getElementById('passwordReset');
        let passwordResetValidate = new Validate({
            form: passwordResetForm,
            emailTooltip: document.getElementById("emailTooltip"),
            emailTitle: document.getElementById("emailTitle")
        });
    };
}