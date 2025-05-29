
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;


for (let i = 0; i < length; i++) {
	const div = document.createElement("div");
	div.className = "button";
	bottom.appendChild(div)
}

const buttons = document.querySelectorAll('.button')
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
	buttons.forEach((button) => {
		button.style.backgroundColor = "transparent";
	});
};


buttons.forEach((button, i) => {
	button.addEventListener("click", () => {
		resetBg()
		slideNumber = i + 1;	
		slider.style.transform = `translateX(-${i * 100}%)`;
		button.style.backgroundColor = 'white';
	});
});

const nextSlide = ()=> {
	slider.style.transform = `translateX(-${slideNumber * 100}%)`;
	slideNumber++;
};

const prevSlide = ()=> {
	slider.style.transform = `translateX(-${(slideNumber-2) * 100}%)`;
	slideNumber--;
};

const getFirstSlide = ()=> {
	slider.style.transform = `translateX(0px)`;
	slideNumber = 1;
};

const getLastSlide = ()=> {
	slider.style.transform = `translateX(-${(length - 1) * 100}%)`;
	slideNumber = length; 
};

const changeColor = () => {
	resetBg()
	buttons[slideNumber-1].style.backgroundColor = "white";
}

right.addEventListener("click", ()=> {
	/*if (slideNumber < length) {
		getFirstSlide()
	} else {
		getLastSlide();
	}
	alternative way to write if statement*/
	slideNumber < length ? nextSlide() : getFirstSlide();
	changeColor();
});


left.addEventListener("click", ()=> {
	slideNumber > 1 ? prevSlide() : getLastSlide();
	changeColor();
});

// Automatically move slides every 3 seconds
setInterval(() => {
    slideNumber < length ? nextSlide() : getFirstSlide();
    changeColor();
}, 3000); // 3000 milliseconds = 3 seconds


const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        // Remove the 'active' class from all accordions
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove('active');
            }
        });
        // Toggle the 'active' class on the clicked accordion
        faq.classList.toggle('active');
    });
});


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
};

window.addEventListener('scroll', scrollUp);
