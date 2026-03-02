const GalleryItem = (content) => {
  console.log('test');
  const markup = `
  <a href="${content.href}" class="GalleryGrid_Link">
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
  document.querySelector('.GalleryGrid').insertAdjacentHTML('beforeend', markup);
};

const fetchData = (component, url) => {
  fetch(`assets/data/${url}.json`)
    .then((response) => response.json())
    .then((data) => {
      if (component === 'GalleryItem') {
        renderGallery(data);
      }
    });
};

const renderGallery = (data) => {
  data.forEach((object) => {
    GalleryItem(object);
  });
};

fetchData('GalleryItem', 'GalleryItemData');
