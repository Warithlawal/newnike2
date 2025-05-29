// Get DOM elements for navigation
const navMenu = document.getElementById('nav_menu'),
    navOpen = document.getElementById('nav_open'),
    navClose = document.getElementById('nav_close'),
    overlay = document.getElementById('overlay'), // Assuming overlay is defined in your HTML
    body = document.body, // To control body scrolling
    navLinks = navMenu.querySelectorAll('a'); // Select all the links inside the nav menu

// Function to open the menu and handle overlay and scroll
function openmenu() {
    navMenu.style.right = "0"; // Show the menu
    overlay.style.display = "block"; // Show overlay
    body.classList.add('no-scroll'); // Prevent scrolling
}

// Function to close the menu and handle overlay and scroll
function closemenu() {
    navMenu.style.right = "-100%"; // Hide the menu
    overlay.style.display = "none"; // Hide overlay
    body.classList.remove('no-scroll'); // Restore scrolling
}

// Add event listeners for opening and closing the menu
if (navOpen) {
    navOpen.addEventListener('click', openmenu);
}

if (navClose) {
    navClose.addEventListener('click', closemenu);
}

// Close menu when overlay is clicked
if (overlay) {
    overlay.addEventListener('click', closemenu);
}

// Close menu when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closemenu);
});















const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message'),
      application = document.getElementById('form_container');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z9qmtdb', 'template_8ifntjk', contactForm, 'tFHZdzA5f4l6RAJrO')
    .then(() => {
        application.style.display = 'none';  // Hide the form
        contactMessage.style.display = 'block'; // Show the message

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.textContent = ''; // Clear the message text
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show the message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message text
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);
