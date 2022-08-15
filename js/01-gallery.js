import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const render = () => {
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
  galleryList.insertAdjacentHTML("beforeend", galleryItemsMarkup);
};

render();

let instance;

function onModalClose() {
  instance.close();
}

function onEscPress() {
  if (event.code === "Escape") {
    onModalClose();
  }
}

const onImageClick = (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  const currentImg = galleryItems.find(
    (item) => e.target.alt === item.description
  );
  instance = basicLightbox.create(
    `
  <img src ="${currentImg.original}"> `,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );
  instance.show();
};

galleryList.addEventListener("click", onImageClick);

// ==================================
// const onImageClick = (e) => {
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   e.preventDefault();
//   const currentImg = galleryItems.find(
//     (item) => e.target.alt === item.description
//   );
//   // const originalSizeSrc = currentImg.original;

//   const instance = basicLightbox.create(`
//   <img src ="${currentImg.original}"> `);
//   instance.show();
// };

// galleryList.addEventListener("click", onImageClick);
// ========================================
// galleryList.addEventListener("click", onGallertItemsClick);

// const onGallertItemsClick = (e) => {
// e.prventDefault();
//   const instance = basicLightbox.create(
//     // `< img src="${e.target.dataset.source}" />`
//     `<h2>hyhyh</h2>`
//   );
//   instance.show();
// };

//   const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

//   instance.show();
// };
