const rangers = document.querySelectorAll('.Ranger');

rangers.forEach(function(ranger) {
  const label = document.getElementById(ranger.id + '-value');
  const unit = ranger.dataset.unit;
  
  function updateRanger() {
    const min = ranger.min || 0;
    const max = ranger.max || 100;
    const progress = ((ranger.value - min) / (max - min)) * 100;
    
    ranger.style.setProperty('--progress', progress + '%');
    label.textContent = ranger.value + ' ' + unit;
  }
  
  // Beim Laden
  updateRanger();
  
  // Bei Änderung
  ranger.addEventListener('input', updateRanger);
});