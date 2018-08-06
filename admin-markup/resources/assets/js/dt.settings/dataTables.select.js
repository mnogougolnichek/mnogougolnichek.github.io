export default function (table, selector = 'button[data-edit="true"]') {
  table.on('select', (e, dt, type) => {
    if (type === 'row') {
      $(selector).prop('disabled', false);
    }
  }).on('deselect', (e, dt, type) => {
    if (type === 'row') {
      $(selector).prop('disabled', true);
    }
  });
}
