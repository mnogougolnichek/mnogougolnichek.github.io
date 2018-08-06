"use strict";
import '../app'
import 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-bs4';
import swal from 'sweetalert2';
import 'select2';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';
import 'jquery.maskedinput/src/jquery.maskedinput';
import Codebase from '../app';
import dtSettings from '../dt.settings/dataTables.settings';
import modalSwitcher from '../dt.settings/modalSwitcher';
import dataTablesSelectable from '../dt.settings/dataTables.select';
// import User from '../Api/User';
jQuery(() => {
    // Init page helpers (Table Tools helper)
    Codebase.helpers(['table-tools', 'select2', 'masked-inputs']);
});

const dataTables = (() => {
    // Init full DataTable, for more examples you can check out https://www.datatables.net/
    const initDataTableFull = () => {
        const table = jQuery('.js-dataTable-full').DataTable(dtSettings({
            columns: [
                { data: 'id', className: 'text-center' },
                { data: 'user_name', className: 'font-w600' },
                {
                    data: 'email',
                    render(data) {
                        return `<a href="mailto:${data}">${data}</a>`;
                    },
                },
                {
                    data: 'user_phone_first',
                    render(data) {
                        return `<a href="tel:${data}">${data}</a>`;
                    },
                },
                {
                    data: 'user_phone_second',
                    render(data) {
                        return `<a href="tel:${data}">${data}</a>`;
                    },
                }
            ]
        }));

        modalSwitcher(table);
        dataTablesSelectable(table);

        return table;
    };

    return {
        init() {
            // Init Datatables
            return initDataTableFull();
        }
    };
})();

const userValidation = ((table) => {
    const formValidationRules = {
        errorClass: 'invalid-feedback animated fadeInDown',
        errorElement: 'div',
        errorPlacement(error, e) {
            jQuery(e).parents('.form-group > div').append(error);
        },
        highlight(e) {
            jQuery(e).closest('.form-group > div').removeClass('is-invalid').addClass('is-invalid');
        },
        success(e) {
            jQuery(e).closest('.form-group > div').removeClass('is-invalid');
            jQuery(e).remove();
        },
        rules: {
            user_name: {
                required: true,
                minlength: 3
            },
            user_phone_first: { required: true },
            user_phone_second: { required: false },
            email: { required: true, email: true, minlength: 6 },
            password: { required: true, minlength: 8 },
            repassword: { required: true, equalTo: '#addItemPass' }
        },
        messages: {
            user_name: {
                required: 'Пожалуйста, введите имя',
                minlength: 'Имя должно иметь не менее 3х символов'
            },
            user_phone_first: {
                required: 'Пожалуйста, введите телефон'
            },
            user_phone_second: {
                required: 'Пожалуйста, введите телефон'
            },
            email: {
                required: 'Пожалуйста, введите эл. почту',
                email: 'Введите валидную эл. почту'
            },
            password: {
                required: 'Пожалуйста, введите пароль',
                minlength: 'Пароль должен быть не меньше 8 символов'
            },
            required: 'Пожалуйста, введите пароль',
                repassword: {
                required: 'Пожалуйста, повторите пароль',
                equalTo: 'Пароли дожны совпадать'
            }
        }
    };

    // Init Add Form Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    const initValidationAdd = () => {
        jQuery('#formItem').validate({
            submitHandler(form) {
                $(form).addClass('is-loading');
                const id = $(form).find('[name=id]').val().trim();
                const promise = id.length ? User.edit(id, form) : User.store(form);
                promise
                    .then((response) => {
                        $('#modalItem').modal('hide');
                        $(form).removeClass('is-loading');
                        if (id.length) {
                            table.row({ selected: true }).data(response.data).draw(true);
                        } else {
                            table.rows.add([response.data]).draw(true);
                        }

                        swal('Удача!', 'Пользователь был успешно добавлен.', 'success');
                    }).catch(() => {
                    $(form).removeClass('is-loading');
                    swal('Ошибка!', 'Попробоуйте еще раз, позже', 'error');
                });
            },
            ...formValidationRules
        });
    };

    return {
        init(table) {  // eslint-disable-line
            // Init Add Form Validation
            initValidationAdd(table);
        }
    };
})();

// Initialize when page loads
jQuery(() => {
    const table = dataTables.init();
    userValidation.init(table);
});
