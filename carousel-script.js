
document.addEventListener("DOMContentLoaded", () => {
  const trendingProducts = [
    { id: 1, name: 'Wireless Charger', Image1: 'images/jacket.png', price: 10.00 },
    { id: 2, name: 'Nintendo lite', Image1: 'images/p.png', price: 180.00 },
    { id: 3, name: 'Elf Mini Kit', Image1: 'images/hoodie.png', price: 35.00 },
    { id: 4, name: 'Night-stand Drawer', Image1: 'images/shirt.png', price: 90.00 },
    { id: 5, name: 'Floor Lamp', Image1: 'images/airnike.png', price: 95.00 },
    { id: 6, name: 'Knife Set', Image1: 'images/sweat.png', price: 100.00 },
    { id: 7, name: 'Accent Stand', Image1: 'images/tank.png', price: 100.00 },
    { id: 8, name: 'Jabel Leather', Image1: 'images/max.png', price: 100.00 },
    { id: 9, name: 'Shoe Bench', Image1: 'images/track.png', price: 30.00 },
    { id: 10, name: 'Weave cotton', Image1: 'images/tantum.png', price: 10.00 },
  ];

  let trendingProductsHTML = '';

  trendingProducts.forEach((product) => {
    trendingProductsHTML += `
      <div class="trending-products">
        <a href="categories.html">
          <div class="trending-products-image">
            <img src="${product.Image1}">
          </div>
          <div class="trending-products-name">
            <h4>${product.name}</h4>
          </div>
          <div class="trending-products-price">
            <p>$ ${product.price}</p>
          </div>
        </a>
      </div>`;
  });

  document.querySelector('.js-trending-products-container').innerHTML = trendingProductsHTML;

  const leftArrow = document.querySelector(".left");
  const rightArrow = document.querySelector(".right");
  const slider = document.querySelector(".sliderr");
  const items = document.querySelectorAll(".trending-products");

  let slideIndex = 0;
  const itemWidth = 220; // 200px + 20px gap

  const nextSlide = () => {
    if (slideIndex < items.length - 1) {
      slideIndex++;
      slider.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      slideIndex--;
      slider.style.transform = `translateX(-${slideIndex * itemWidth}px)`;
    }
  };

  rightArrow.addEventListener('click', nextSlide);
  leftArrow.addEventListener('click', prevSlide);
});