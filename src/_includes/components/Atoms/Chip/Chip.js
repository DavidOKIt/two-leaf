const chip = document.querySelectorAll('.Chip');

chip.forEach(chipElement => { 
    // console.log('Chip component loaded:', chipElement);
    chipElement.addEventListener('click', () => {
        toggleChipClass(chipElement);
        changeIcon(chipElement);
    });
    
    chipElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
              e.preventDefault();
            toggleChipClass(chipElement);
             changeIcon(chipElement);
      }
    });
})

// arrow function
const toggleChipClass = (chipElement) => {
    if (chipElement.classList.contains('Chip-primary')) {
        chipElement.classList.toggle("Chip-checked-primary");
    }

    if (chipElement.classList.contains('Chip-secondary')) {
    chipElement.classList.toggle("Chip-checked-secondary");
    }

    if (chipElement.classList.contains('Chip-tertiary')) {
    chipElement.classList.toggle("Chip-checked-tertiary");
    }

}

const changeIcon = (chipElement) => {
    
    const iconunchecked = chipElement.querySelector('.Chip_Icon');
    iconunchecked.classList.toggle('Chip_Icon-off');

    const iconchecked = chipElement.querySelector('.Chip_IconChecked');
    iconchecked.classList.toggle('Chip_IconChecked-on');
}