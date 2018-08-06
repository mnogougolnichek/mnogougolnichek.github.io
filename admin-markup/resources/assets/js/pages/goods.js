"use strict";
import '../app';
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

jQuery(() => {
    // Init page helpers (Table Tools helper)
    Codebase.helpers(['table-tools', 'select2', 'masked-inputs']);
});

jQuery(() => {
    function follow(){
        document.location.href = "http://admin-markup/goods_add";
    }

    $('.js-dataTable-full').DataTable();
    $('#add-btn').click(follow);
});

