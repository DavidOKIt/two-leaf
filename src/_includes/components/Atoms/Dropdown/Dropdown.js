document.querySelectorAll('.Dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('.Dropdown_Trigger');
  const label = dropdown.querySelector('.Dropdown_Label');
  const items = dropdown.querySelectorAll('.Dropdown_Item');
const input = dropdown.nextElementSibling;
    
    trigger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    setTimeout(() => {
      items[0].focus();
    }, 0);
  }
});

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      selectItem(item);
    });

    item.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'Enter': 
          e.preventDefault();
          selectItem(item);
          break;
        case 'ArrowDown': 
          e.preventDefault();
          items[(index + 1) % items.length].focus();
          break;
        case 'ArrowUp': 
          e.preventDefault();
          items[(index - 1 + items.length) % items.length].focus();
          break;
        case 'Escape':
          dropdown.removeAttribute('open');
          trigger.focus();
          break;
      }
    });
  });

  function selectItem(item) {
    input.value = item.dataset.value;
    label.textContent = item.textContent;
    dropdown.removeAttribute('open');
    trigger.focus();
  }
});