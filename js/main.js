const ConfigJson = require('./config.js');

window.addEventListener("load", () => {
  mapJsonGroups();
});

/**
* Iterate over JSON object using map()
*/
function mapJsonGroups() {
  const groupsArray = ConfigJson.groups;
  let gridCounter = 0

  if (groupsArray.length > 0){
    groupsArray.map(group => {
      createDetailItem(group);
      gridCounter++;
    });
  }

};

/**
* Create detail item container div and call inner html object generator
* functions
*/
function createDetailItem(group) {
  const detailItemThumbnail = getImageDiv(group);
  const detailItem = document.createElement('div');
  const contentDiv = document.getElementById("content");

  // Sets Class to detail item container div
  detailItem.setAttribute('class', 'detailItem');
  // Append thumbnail to detailItem
  detailItem.appendChild(detailItemThumbnail);
  // Append detail item to content container div
  if (contentDiv !== null){
    contentDiv.appendChild(detailItem);
  }

}

/**
* Create image div html object
*/
function getImageDiv(group) {
  const image = document.createElement('div');
  const name = getNameDiv(group);
  const price = getPriceDiv(group);
  const thumbnail = group.thumbnail;

  image.style.backgroundImage = 'url(' + thumbnail.href + ')';
  image.setAttribute('class', 'thumbnail');
  image.style.height = thumbnail.height + 'px';
  image.style.width = thumbnail.width + 'px';
  image.onclick = function(){
    getModal(group.images);
  };
  image.appendChild(name);
  image.appendChild(price);

  return image;
}

/**
* Create name div html object
*/
function getNameDiv(group) {
  const name = document.createElement('div');

  name.setAttribute('class', 'name');
  name.innerHTML = group.name;

  return name;
}

/**
* Create price div html object
*/
function getPriceDiv(group) {
  const price = document.createElement('div');

  price.setAttribute('class', 'price');
  price.innerHTML = '$ ' + group.priceRange.regular.high;

  return price;
}

/**
* Get modal div
*/
function getModal(images) {
  const modal = document.createElement('div');
  const closeButton = getCloseButton();
  const modalContent = getModalContent(images);
  const modalContainerDiv = document.getElementById("modalContainer");

  modal.setAttribute('class', 'modal');
  modal.appendChild(closeButton);
  modal.appendChild(modalContent);

  modalContainerDiv.appendChild(modal);
}

/**
* Get close button and set unique id attributes
*/
function getCloseButton(group) {
  const closeButton = document.createElement('span');

  closeButton.setAttribute('class', 'close cursor');
  // Required closure as onclick was firing on page load.
  closeButton.onclick = function(){
    let modalContainer = document.getElementById("modalContainer");
    while(modalContainer.firstChild) {
      modalContainer.removeChild(modalContainer.firstChild);
    }
  };
  closeButton.innerHTML = '&times;';

  return closeButton;
}

/**
* Get modal content
*/
function getModalContent(images) {
  const modalContent = document.createElement('div');
  const leftArrow = getLeftArrow();
  const rightArrow = getRightArrow();
  const imagesArray = images;
  let imageCounter = 0;

  if (imagesArray.length > 0){
    imagesArray.map(image => {
      let slideContent = getSlideContent(image);

      if (imageCounter === 0){
        slideContent.classList.add('active');
        imageCounter++;
      }

      modalContent.appendChild(slideContent);
    });
  }

  modalContent.setAttribute('class', 'modalContent');
  modalContent.appendChild(leftArrow);
  modalContent.appendChild(rightArrow);

  return modalContent;
}

/**
* Get left arrow and establish onclick slide call
*/
function getLeftArrow(){
  const leftArrow = document.createElement('a');

  leftArrow.innerHTML = '<';
  leftArrow.setAttribute('class', 'prev');
  leftArrow.onclick = function(){
    showSlides('left');
  };

  return leftArrow;
}

/**
* Get right arrow and establish onclick slide call
*/
function getRightArrow(){
  const rightArrow = document.createElement('a');

  rightArrow.innerHTML = '>';
  rightArrow.setAttribute('class', 'next');
  rightArrow.onclick = function(){
    showSlides('right');
  };

  return rightArrow;
}

/**
* Get slide content
*/
function getSlideContent(image) {
  const slideContainer = document.createElement('div');
  const imageElement = document.createElement('img');

  imageElement.setAttribute('src', image.href);
  slideContainer.setAttribute('class', 'slideContainer');
  slideContainer.appendChild(imageElement);

  return slideContainer;
}

/**
* Add/remove active class to navigate between slides
*/
function showSlides (direction){
  let activeSlideArray = document.getElementsByClassName('active');
  let activeSlide = activeSlideArray[0];
  let newActiveSlide;

  if (direction === 'left') {
    newActiveSlide = activeSlide.previousSibling;
  }

  if (direction === 'right') {
    newActiveSlide = activeSlide.nextSibling;
  }

  if (newActiveSlide == null || newActiveSlide.tagName !== 'DIV') {
    return;
  }

  activeSlide.classList.remove("active");
  newActiveSlide.classList.add("active");
}

/**
* Exporting for testing using Mocha
*/
module.exports.createDetailItem = createDetailItem;
module.exports.getImageDiv = getImageDiv;
module.exports.getNameDiv = getNameDiv;
module.exports.getPriceDiv = getPriceDiv;
module.exports.showSlides = showSlides;
module.exports.getRightArrow = getRightArrow;
module.exports.getLeftArrow = getLeftArrow;
