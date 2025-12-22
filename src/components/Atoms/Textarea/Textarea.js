document.querySelectorAll('.Textarea').forEach(container => {

  container.addEventListener('mousedown', () => {
    container.classList.add('mouse-focus');
  });
  
  container.addEventListener('focusout', () => {
    container.classList.remove('mouse-focus');
  });
});