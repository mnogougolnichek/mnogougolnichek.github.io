import dtRus from './dataTables.ru.json';

$.extend($.fn.dataTable.ext.classes, {
  sWrapper: 'dataTables_wrapper dt-bootstrap4'
});

/**
 * Extend default options
 * @param extendedOptions
 * @return Object
 */
export default extendedOptions => ({
  language: dtRus,
  select: {
    style: 'single'
  },
  columnDefs: [{ orderable: false, targets: 'nosort' }],
  pageLength: 10,
  lengthMenu: [[10, 30, 50, 100], [10, 30, 50, 100]],
  autoWidth: false,
  ...extendedOptions
});
