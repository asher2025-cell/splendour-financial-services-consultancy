// Smooth scrolling for internal links (for example, in the navbar)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        // Scroll to the target section with smooth behavior
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Event listener for the email link click
document.querySelectorAll('a[href^="mailto:"]').forEach(emailLink => {
    emailLink.addEventListener('click', function() {
        console.log("Email link clicked!");
        // Here you can add tracking code or custom actions, like sending data to analytics
    });
});

// Event listener for the phone number link click
document.querySelectorAll('a[href^="tel:"]').forEach(phoneLink => {
    phoneLink.addEventListener('click', function() {
        console.log("Phone number clicked!");
        // Here you can add tracking code or custom actions, like sending data to analytics
    });
});
// Highlight active section in the navbar as the user scrolls
window.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');

    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});

// This function is used for showing/hiding the testimonial slider if needed
document.addEventListener('DOMContentLoaded', function () {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;

    function showNextTestimonial() {
        testimonialItems[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
        testimonialItems[currentTestimonial].classList.add('active');
    }

    // Start the slider functionality
setInterval(showNextTestimonial, 5000); // Change testimonial every 5 seconds
});

// For "Request Consultation" CTA button (optional)
document.querySelector('.request-consultation-btn')?.addEventListener('click', function() {
    alert("Thank you for requesting a consultation. We will get in touch with you shortly.");
});
