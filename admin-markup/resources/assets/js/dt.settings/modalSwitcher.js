import setFormData from './setFormData';

export default function (table, options) {
  const config = {
    edit: {
      className: 'bg-gd-leaf',
      text: 'Редактировать',
      buttonText: 'Сохранить'
    },
    create: {
      className: 'bg-gd-emerald',
      text: 'Создать',
      buttonText: 'Добавить'
    },
    modalTarget: '#modalItem',
    formTarget: '#formItem',
    ...options
  };

  $(config.modalTarget).on('show.bs.modal', (e) => {
    if ($(e.target).is(config.modalTarget)) {
      const isEditMode = $(e.relatedTarget).data('edit') === true;
      if (isEditMode && table) {
        const data = table.row({ selected: true }).data();
        setFormData(jQuery(config.formTarget), data);
      } else {
        $(config.formTarget).get(0).reset();
        setFormData($(config.formTarget), {
          id: null
        });
      }
      $(e.target).find('.block-header:first')
        .addClass(isEditMode ? config.edit.className : config.create.className)
        .removeClass(isEditMode ? config.create.className : config.edit.className)
        .find('.block-title')
        .text(isEditMode ? config.edit.text : config.create.text);
      $(e.target).find('button[type=submit]')
        .text(isEditMode ? config.edit.buttonText : config.create.buttonText);
    }
  });
}
