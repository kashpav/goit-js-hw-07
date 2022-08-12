import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

console.log(galleryItemsMarkup);

const onGallertItemsClick = (e) => {
  e.prventDefault();
  const instance = basicLightbox.create(
    `<img source = ${e.target.dataset.source} />`
  );
  instance.show();
};

const galleryList = document.querySelector(".gallery");
galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);
galleryList.addEventListener("clik", onGallertItemsClick);
