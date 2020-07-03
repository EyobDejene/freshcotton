
// accor info
let productInformation = document.querySelectorAll('.accor');

for (let i = 0; i < productInformation.length; i++) {
  productInformation[i].addEventListener('click', toggleClass);
}

function toggleClass() {
  let info = this.getElementsByClassName('info');
  let fold = this.getElementsByClassName('product-fold');
  fold[0].classList.toggle('margin')
  info[0].classList.toggle('open');
}


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
