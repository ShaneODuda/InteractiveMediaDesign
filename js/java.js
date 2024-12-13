document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Logic
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");

    // Simulate loading process
    setTimeout(() => {
      splashScreen.style.display = "none"; // Hide splash screen
      mainContent.style.display = "block"; // Show main content
      document.body.style.overflow = "auto"; // Allow scrolling
    }, 3000); // 3-second delay

    // Form Submission Logic
    const contactForm = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission
      successMessage.style.display = "block"; // Show the success message
      contactForm.reset(); // Clear the form fields
    });

    // Offcanvas Navbar Toggle Logic
    const navbarToggler = document.querySelector('.navbar-toggler');
    const offcanvas = document.getElementById('offcanvasDarkNavbar');
    const closeButton = offcanvas.querySelector('.btn-close'); // Close button inside offcanvas

    // Toggle navbar on button click (open/close)
    navbarToggler.addEventListener('click', function() {
      offcanvas.classList.toggle('show');
    });

    // Close navbar when close button is clicked
    closeButton.addEventListener('click', function() {
      offcanvas.classList.remove('show');
    });

    const modalElement = document.querySelector('#ContactModal');
    if (!modalElement) {
        console.error('Modal element not found!');
    }
});