import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const render = () => {
  const galleryItemsMarkup = galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");

  console.log(galleryItemsMarkup);
  galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);
};

render();

const newLightBox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionType: "attr",
  captionPosition: "bottom",
  captionDelay: 250,
  captionsData: "alt",
});

console.log(newLightBox);
