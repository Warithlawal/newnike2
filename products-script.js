const trendingProducts = [
{
    id: 1,
    name: 'Training socks',
    Image1: 'images/socksb.png',
    price: 10.00
  },
{
	id: 2,
    name: 'Dri-FIT ADV top',
    Image1: 'images/shirt.png',
    price: 180.00
  },
  {
    id: 3,
    name: 'Gift card',
    Image1: 'images/cardd.png',
    price: 35.00
  },
  {
    id: 4,
    name: 'Nike Leotard',
    Image1: 'images/leotard.png',
    price: 90.00
  },
  {
    id: 5,
    name: 'Football Gloves',
    Image1: 'images/glove.png',
    price: 95.00
  },
  {
    id: 6,
    name: 'Bucket Hat',
    Image1: 'images/hat.png',
    price: 100.00
  },

  {
    id: 7,
    name: 'Tennis Visor',
    Image1: 'images/visor.png',
    price: 100.00
  },
  {
    id: 8,
    name: 'Sunglasses',
    Image1: 'images/sunglasses.png',
    price: 100.00
  },
  {
    id: 9,
    name: 'Chung Bottle',
    Image1: 'images/bottle.png',
    price: 30.00
  },
  {
    id: 10,
    name: 'Nike Goggles',
    Image1: 'images/goggles.png',
    price: 10.00
  },

];


let trendingProductsHTML = '';

trendingProducts.forEach((trendingProducts) => {
	trendingProductsHTML += `
	<div class="trending-products">
    <a href ="#">
  		<div class="trending-products-image">
  			<img src="${trendingProducts.Image1}">
  		</div>
  		<div class="trending-products-name">
  			<h4>${trendingProducts.name}</h4>
  		</div>
  		<div class="trending-products-price">
  			
  		</div>
    </a>
	</div>`
});

document.querySelector('.js-trending-products-container').
innerHTML = trendingProductsHTML;


const leftbtn = document.querySelector(".left-btn");
const rightbtn = document.querySelector(".right-btn");
const slider2 = document.querySelector(".slider-2");
const item = document.querySelectorAll(".trending-products");

let slideNumber2 = 1;
const length2 = item.length;

const nextSlide2 = () => {
    if (slideNumber2 === 0) {
        getFirstSlide2();  // Reset if slideNumber2 reaches 6
    } else {
        slider2.style.transform = `translateX(-${slideNumber2 * 200}px)`;
        slideNumber2++;
    }
};

const prevSlide2 = () => {
    slider2.style.transform = `translateX(-${(slideNumber2 - 2) * 200}px)`;
    slideNumber2--;
};

const getFirstSlide2 = () => {
    slider2.style.transform = `translateX(0px)`;
    slideNumber2 = 1;
};

const getLastSlide2 = () => {
    slider2.style.transform = `translateX(${(length2 - 1) * 200}px)`;
    slideNumber2 = length2;
};

// Event listeners
rightbtn.addEventListener('click', () => {
    slideNumber2 < length2 ? nextSlide2() : getFirstSlide2();
});

leftbtn.addEventListener('click', () => {
    slideNumber2 > 1 ? prevSlide2() : getFirstSlide2();
});
