document.querySelectorAll('.Searchbar_FocusWrapper').forEach(container => {
  const button = container.querySelector('.Searchbar_Button');
  const input = container.querySelector('.Searchbar_Search');
  const addClass = () => container.classList. add('mouse-focus');
  const removeClass = () => container.classList.remove('mouse-focus');
  
  container.addEventListener('click', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.closest('.Searchbar_Button')) return;
    input.focus();
  });
  
  container.addEventListener('mousedown', (e) => { 
    addClass();
    if (e.target.tagName !== 'INPUT') e.preventDefault();
  });
  
  container.addEventListener('focusout', removeClass);
  button.addEventListener('mousedown', (e) => e.preventDefault());
  button.addEventListener('focus', addClass);
  button.addEventListener('blur', removeClass);
});