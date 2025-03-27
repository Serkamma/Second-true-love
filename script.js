// Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    this.reset();
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add some simple animations
document.addEventListener('DOMContentLoaded', () => {
    const resourceCards = document.querySelectorAll('.resource-card');
    
    resourceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});
