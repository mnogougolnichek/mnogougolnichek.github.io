let v = $("#authorization").validate({

    rules:{

        login:{
            required: true,
            minlength: 4,
            maxlength: 16
        },

        password:{
            required: true,
            minlength: 8,
            maxlength: 16
        }
    },

    messages:{

        login:{
            required: "Это поле обязательно для заполнения",
            minlength: "Логин должен быть минимум 4 символа",
            maxlength: "Максимальное число символов - 16"
        },

        password:{
            required: "Это поле обязательно для заполнения",
            minlength: "Пароль должен быть минимум 8 символов",
            maxlength: "Пароль должен быть максимум 16 символов"
        }

    },
    submitHandler: function(form) {
        let login = form.login.value,
            password = form.password.value,
            rightLogin = "admin",
            rightPassword = "12345678";
        if(login === rightLogin && password === rightPassword){
            document.location.href = "https://mnogougolnichek.github.io/xadmin/users.html";
        }else{
            v.showErrors({
                login: 'Не верный пароли или логин',
                password: 'Не верный пароль или логин'
            });
        }
    }
});