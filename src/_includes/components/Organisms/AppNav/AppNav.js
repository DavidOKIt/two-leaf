document.addEventListener('DOMContentLoaded', () => {
  const currentUrl = window.location.pathname;
  const navButtons = document.querySelectorAll('.AppNav_Button');

  navButtons.forEach(navElement => {
    const href = navElement.getAttribute('href');
    let isActive = false;
    
    // Home: nur wenn EXAKT auf Home-Seite (nicht bei Unterseiten)
    if (href === '/Two-Leaf/' || href === '/') {
      isActive = (currentUrl === '/Two-Leaf/' || currentUrl === '/');
    } 
    // Andere Seiten: wenn Keyword in URL vorkommt
    else {
      // Extrahiere Keyword aus href (z.B. "Shop" aus "/Two-Leaf/Shop")
      const keyword = href.split('/').filter(part => part !== '' && part !== 'Two-Leaf').join('');
      
      if (keyword) {
        isActive = currentUrl.includes(keyword);
      }
    }
    
    if (isActive) {
      navElement.querySelector('.AppNav_Icon').classList.add('AppNav_Icon-off');
      navElement.querySelector('.AppNav_IconClicked').classList.add('AppNav_IconClicked-on');
    }
  });
});