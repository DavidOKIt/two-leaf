const AppNav = document.querySelectorAll('.AppNav_Button');

AppNav.forEach(navElement => {
    navElement.addEventListener('click', () => {
        changeNavIcon(navElement);
    });     
})

const changeNavIcon = (navElement) => {

    const iconunclicked = navElement.querySelector('.AppNav_Icon');
    iconunclicked.classList.toggle('AppNav_Icon-off');

    const iconclicked = navElement.querySelector('.AppNav_IconClicked');
    iconclicked.classList.toggle('AppNav_IconClicked-on');

}