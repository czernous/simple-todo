// check off todos
$('ul').on('click', 'li', (e) => {
  $(e.target).toggleClass('completed');
});
// click on X to delete a todo
$('ul').on('click', 'span', (e) => {
  $(e.currentTarget)
    .parent()
    .fadeOut(500, () => {
      $(e.currentTarget).parent().remove();
    });
  e.stopPropagation();
});
// create new todos
$('input[type="text"').keypress((e) => {
  if (e.which === 13) {
    const todoText = $(e.target).val();
    $(e.target).val('');
    $('ul').append(
      `<li><span><i class="far fa-trash-alt"></i></span>${todoText}</li>`
    );
  }
});
// show and hide input
$('button').click(() => {
  $('input[type="text"').fadeToggle(100, () => {
    $('button span:first-of-type').toggleClass('rotate-1');
  });
});
