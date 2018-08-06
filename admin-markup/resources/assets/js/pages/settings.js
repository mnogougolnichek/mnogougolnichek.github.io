"use strict";
import '../app';
import 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-bs4';
import 'select2';
import 'jquery-validation';
import 'jquery-validation/dist/additional-methods';
import 'jquery.maskedinput/src/jquery.maskedinput';
import Codebase from '../app';

jQuery(() => {
    // Init page helpers (Table Tools helper)
    Codebase.helpers(['table-tools', 'select2', 'masked-inputs']);
    $("#phone1").mask("(999) 999-9999");
    $("#phone2").mask("(999) 999-9999");
});
