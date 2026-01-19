document.querySelectorAll('.InputfieldContainer').forEach(container => {
  
  container.addEventListener('click', (e) => {
    if (e.target.tagName === 'input') return;
    container.querySelector('.Inputfield').focus();
  });
  
  // Mausklick → markieren (für Outline-Unterscheidung)
  container.addEventListener('mousedown', () => {
    container.classList.add('mouse-focus');
  });
  
  // Focus weg → Reset
  container.addEventListener('focusout', () => {
    container.classList.remove('mouse-focus');
  });
});