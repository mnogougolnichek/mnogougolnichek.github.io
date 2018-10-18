"use strict";

function Validate(options) {
    Object.assign(this, options);
    this.submitButton = this.form.elements.submitButton;
    this.emailInput = this.form.elements.email;
    this.passwordInput = this.form.elements.password;
    this.email = false;
    this.password = false;
    this.errors = {
        email: "You entered invalid e-mail",
        password: "You entered invalid password"
    };
    return options && typeof(options) !== "undefined"? this.init(options) : this;
}

Validate.prototype.init = function () {
    this.follow();
    return this;
};

Validate.prototype.follow = function () {
    document.addEventListener('click', (event) => {
        if(event.target === this.submitButton && this.submitButton.childNodes){
            this.isValidAll();
        }
        this.activateInput(event);
    });

};

Validate.prototype.isValidEmail = function (value) {
    const pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.email = pattern.test(value);
    console.log(this.email);
};

Validate.prototype.isValidPassword = function (password) {
    if(password){
        this.password = password.value.length>8;
    }
    console.log(password);
};

Validate.prototype.activateInput = function (event) {
    console.log(event.target);
    if(event.target === this.emailInput){

        this.emailTitle.classList.add("on-active-input");
    }else if(this.emailInput.value === ""){
        this.emailTitle.classList.remove("on-active-input");
    }
    if(this.passwordInput){
        if(event.target === this.passwordInput){
            this.passwordTitle.classList.add("on-active-input");
        }else if(this.passwordInput.value === ""){
            this.passwordTitle.classList.remove("on-active-input");
        }
    }
};

Validate.prototype.tooltip = function (error) {
    return `<div class="tooltip">${error}</div>`;
};

Validate.prototype.onError = function () {
    if(!this.email){
        this.emailInput.classList.add("on-error");
        this.emailTooltip.innerHTML = this.tooltip(this.errors.email);
    }else if(this.email){
        this.emailInput.classList.remove("on-error");
        this.emailTooltip.innerHTML = "";
    }
    if(!this.password&&this.passwordInput){
        this.passwordInput.classList.add("on-error");
        this.passwordTooltip.innerHTML = this.tooltip(this.errors.password);
    }else if(this.password){
        this.passwordInput.classList.remove("on-error");
        this.passwordTooltip.innerHTML = "";
    }
};

Validate.prototype.isValidAll = function () {
    this.isValidEmail(this.emailInput.value);
    this.isValidPassword(this.passwordInput);
    this.email && this.password? this.callback() : this.onError();
};
