export default function (form, data) {
  Object.keys(data).forEach((key) => {
    let field = form.find(`[name=${key}]`);
    if (!field.length) {
      field = form.find(`[name="${key}[]"]`);
    }
    field
      .val(data[key])
      .trigger('change');
  });
}
