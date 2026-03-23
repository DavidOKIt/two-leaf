const galleryGrid = document.querySelector('.GalleryGrid');

const GalleryItem = (content) => {
  const markup = `
  <a href="/two-leaf/shop-pdp/" class="GalleryGrid_Link">
    <div class="GalleryGrid_Item">
      <figure class="ImageContainer">
        <img
          src="${content.src}"
          alt="${content.alt}"
          class="Image Image-GalleryImage Image-cover Image-borderRadius Image-Zoom"
        />
      </figure>
      <span class="GalleryGrid_Label -sizeL bold">${content.productname}</span>
    </div>
  </a>`;
  galleryGrid.insertAdjacentHTML('beforeend', markup);
};

const renderGallery = (data) => {
  data.forEach((object) => {
    GalleryItem(object);
  });
};

const fetchData = (component, url) => {
  fetch(`assets/data/${url}.json`)
    .then((response) => response.json())
    .then((data) => {
      if (component === 'GalleryItem') {
        renderGallery(data);
      }
    })
    .catch((error) => {
      console.error('Error beim fetchen der Daten', error);
      galleryGrid.innerHTML = '<p>Keine Daten verfügbar</p>';
    });
};

if (galleryGrid) {
  fetchData('GalleryItem', 'GalleryItemData');
}
