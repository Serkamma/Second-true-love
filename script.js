document.addEventListener('DOMContentLoaded', () => {
    // Form Submission Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate form submission with a more engaging message
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: `Thank you, ${name}. We will review your message and get back to you soon.`,
                confirmButtonColor: '#1a5f7a'
            });

            this.reset();
        });
    }

    // Smooth Scrolling
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax-like Effect for Hero Section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }

    // Animate Section Entries
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-content').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Optional: Sweet Alert for more engaging notifications
// Note: In a real implementation, you'd include the Sweet Alert library
function initSweetAlert() {
    if (typeof Swal === 'undefined') {
        console.warn('Sweet Alert library not loaded');
    }
}
