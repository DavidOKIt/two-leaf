const MenuItem = document.querySelectorAll('.MenuItem_Container');

MenuItem.forEach(menuItemElement => { 
    console.log('3. MenuItem gefunden:', menuItemElement);
    menuItemElement.addEventListener('mouseenter', () => {
        addHoverClass(menuItemElement);
    });
    menuItemElement.addEventListener('mouseleave', () => {
        removeHoverClass(menuItemElement);
    });
});

const addHoverClass = (menuItemElement) => {
 
    const iconDefault = menuItemElement.querySelector('.MenuItem_IconDefault');
    iconDefault.classList.add('MenuItem_IconDefault-off');

    const iconHover = menuItemElement.querySelector('.MenuItem_IconHover');
    iconHover.classList.add('MenuItem_IconHover-on');
}

const removeHoverClass = (menuItemElement) => {
 
    const iconDefault = menuItemElement.querySelector('.MenuItem_IconDefault');
    iconDefault.classList.remove('MenuItem_IconDefault-off');

    const iconHover = menuItemElement.querySelector('.MenuItem_IconHover');
    iconHover.classList.remove('MenuItem_IconHover-on');
}