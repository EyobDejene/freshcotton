

/**
 * Product information in accordion
 */
// accor info
let productInformation = document.querySelectorAll('.accor');
for (let i = 0; i < productInformation.length; i++) {
  productInformation[i].addEventListener('click', toggleClass);
}

// this function will toggle the visiblity of the information blocks
function toggleClass() {
  let info = this.querySelectorAll('.info');
  console.log(info);
  let fold = this.querySelectorAll('.product-fold');
  fold[0].classList.toggle('margin');
  info[0].classList.toggle('open');
}


/**
 * Add to cart
 */
// add to cart
let addBtn = document.querySelector('.addToCart');
addBtn.addEventListener('click', addToCart);

function addToCart() {
  let cart = document.querySelector('.bubble');
  cart.classList.add('scale');
  cart.innerHTML = '1';
  this.innerHTML = "TOEGEVOEGD AAN JE WINKELWAGEN";
  this.classList.add('added');
}


/**
 * Show all sizes in dropdown menu
 */
let dropdownBtn = document.querySelector('.dropdown');
let dropdownMenu = document.querySelector('.dropdown-menu');
dropdownBtn.addEventListener('click', dropdownSizes);
function dropdownSizes() {
  dropdownMenu.classList.toggle('not-visible');
}



/**
 * Replace size selected size
 */
//click on size stay on page
let sizes = document.querySelectorAll('.dropdown-menu a');
for (let i = 0; i < sizes.length; i++) {
  sizes[i].addEventListener('click', function(e) {
    e.preventDefault();
    let dropdownMenu = document.querySelector('.dropdown-menu');
    let element = this.querySelectorAll('.sizeName');
    let dropdownBtnSize = document.querySelector('.dropdown .selected');
    let sizeSelected = element[0].getAttribute('data-size');
    dropdownBtnSize.innerHTML = sizeSelected;
    dropdownMenu.classList.add('not-visible');
  });
}




/**
 * Thumbnail slider using splidejs will slide to selected image and will
 * diplay this in the center of the hero slider
 */
document.addEventListener( 'DOMContentLoaded', function () {
  var splide = new Splide( '#splide',{
    rewind     : true,
    pagination : false,
    focus      : 'center',
  } );
  var images = document.querySelectorAll( '.js-thumbnails li' );

  var activeImage;
  var activeClass = 'is-active';

  for ( let i = 0, len = images.length; i < len; i++ ) {
    var image = images[ i ];

    splide.on( 'click', function () {
      if ( activeImage !== image ) {
        splide.go( i );
      }else{
        splide.go( i );
      }

    }, image );
  }

  splide.on( 'mounted move', function ( newIndex ) {
    // newIndex will be undefined through the "mounted" event.
    var image = images[ newIndex !== undefined ? newIndex : splide.index ];

    if ( image && activeImage !== image ) {
      if ( activeImage ) {
        activeImage.classList.remove( activeClass );
      }

      image.classList.add( activeClass );
      activeImage = image;
    }
  } );

  splide.mount();
} );




/**
 * Lightbox functions
 */
// open lightbox
let slideItems = document.querySelectorAll('.splide__slide');
for (let i = 0; i < slideItems.length; i++) {
  slideItems[i].addEventListener("click",openLightbox);
}
function openLightbox(){
  // get image with target
  let imgTarget = this.querySelectorAll('img');
  let imgSource = imgTarget[0].getAttribute('src');
  let lighboxImgSource = document.querySelector('.lightbox img');
  // replace target image with selected item
  lighboxImgSource.src = imgSource;
  console.log(imgSource)
  // open the lightbox
  let lightbox = document.querySelector('.lightbox');
  lightbox.classList.remove('not-visible');
}

// Close lightbox
let closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener("click",closeLightbox);

// this function will close the lightbox
function closeLightbox(){
  let lightbox = document.querySelector('.lightbox');
  lightbox.classList.add('not-visible');
}
