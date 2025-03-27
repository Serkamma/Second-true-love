document.addEventListener('DOMContentLoaded', () => {
    // Loading Overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => loadingOverlay.style.display = 'none', 500);
        }, 1000);
    });

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Interactive Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission with validation
        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name && email && message) {
            // Show success modal or notification
            Swal.fire({
                title: 'Message Sent!',
                text: 'We\'ll get back to you soon.',
                icon: 'success',
                confirmButtonText: 'Cool'
            });
            contactForm.reset();
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill in all fields.',
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    });

    // Floating Elements Animation
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach((icon, index) => {
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.animationDelay = `${index * 0.5}s`;
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('mobile-menu-open');
    });
});

// Optional: Include SweetAlert for beautiful notifications
document.write('<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>');
