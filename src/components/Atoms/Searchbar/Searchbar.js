console.log('JS loaded');

document.querySelectorAll('.FocusWrapper').forEach(wrapper => {
  console.log('Wrapper gefunden:', wrapper);
  
  const button = wrapper.querySelector('. SearchButton');
  const input = wrapper.querySelector('. Searchbar');

  wrapper.addEventListener('click', (e) => {
    if (e.target. closest('.SearchButton')) return;
    if (e.target. tagName === 'INPUT') return;
    input.focus();
  });

  wrapper.addEventListener('mousedown', () => {
    console.log('mousedown - Klasse wird gesetzt');  // ← Kommt das? 
    wrapper.classList.add('mouse-focus');
  });

  input.addEventListener('blur', () => {
    console.log('blur - Klasse wird entfernt');
    wrapper.classList.remove('mouse-focus');
  });
});