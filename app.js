document.addEventListener("DOMContentLoaded", function() {
  // Variables
  const menuBtn = document.getElementById("menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const menu = document.querySelector(".nav_links");
  const overlay = document.querySelector(".overlay");
  const mainThumbnail = document.querySelector(".main-thumbnail");
  const thumbMob = document.querySelector(".thumb-mob");
  const images = document.querySelectorAll(".preview img");
  const plusBtn = document.getElementById("plus");
  const minusBtn = document.getElementById("minus");
  const amount = document.querySelector(".amount");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("previous");
  const cartBtn = document.querySelector(".cart-btn");
  const cart = document.querySelector(".cart-wrp");
  const closeLightboxBtn = document.querySelector(".close-lightbox");
  const lightbox = document.querySelector(".lightbox");
  const addBtn = document.querySelector(".add_btn");
  const indicator = document.querySelector(".indicator");
  const wrp = document.querySelector(".cart-content");

  let amountValue = 0;
  let currentImg = 1;

  // Functions
 

  function closeMenu() {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  }

  function handlePlus() {
    amountValue++;
    amount.textContent = amountValue;
  }

  function handleMinus() {
    if (amountValue > 0) {
      amountValue--;
    }
    amount.textContent = amountValue;
  }

  function nextImage() {
    currentImg = (currentImg % 4) + 1;
    thumbMob.src = `image-product-${currentImg}.jpg`;
  }

  function prevImage() {
    currentImg = (currentImg - 2 + 4) % 4 + 1;
    thumbMob.src = `image-product-${currentImg}.jpg`;
  }

  function toggleCart() {
    cart.classList.toggle("invisible");
  }

  function closeLightBox() {
    lightbox.classList.add("invisible");
  }

  function openLightBox() {
    lightbox.classList.remove("invisible");
  }

  function addItem() {
    if (amountValue > 0) {
      const total = 125.00 * amountValue;
      wrp.classList.remove("empty");
      wrp.innerHTML = `<div class="product">
        <div>
          <img src="image-product-1-thumbnail.jpg" class="product-img" alt="product">
          <div class="product-info">
            <p class="product-title">Fall Limited Edition Sneakers</p>
            <p><span>$125.00</span> × <span class="number">${amountValue}</span> <b>$${total}</b></p>
          </div>
          <button class="delete-btn" onclick="deleteItem()"><img src="icon-delete.svg" alt="delete"></button>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>`;
      indicator.style.display = "block";
      indicator.textContent = amountValue;
    }
  }

  function deleteItem() {
    wrp.classList.add("vide");
    wrp.innerHTML = "<p>Your cart is empty</p>";
    indicator.style.display = "none";
  }

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      images.forEach(function(img) {
        img.classList.remove("selected");
      });
      this.classList.add("selected");
      const src = this.getAttribute("src").replace("-thumbnail", "");
      mainThumbnail.src = src;
      thumbMob.src = src;
    });
  });

  // Event Listeners
  plusBtn.addEventListener("click", handlePlus);
  minusBtn.addEventListener("click", handleMinus);
  nextBtn.addEventListener("click", nextImage);
  prevBtn.addEventListener("click", prevImage);
  cartBtn.addEventListener("click", toggleCart);
  closeLightboxBtn.addEventListener("click", closeLightBox);
  mainThumbnail.addEventListener("click", openLightBox);
  addBtn.addEventListener("click", addItem);
});
