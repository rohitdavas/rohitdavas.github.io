// Load components
async function loadComponent(id, path) {
    try {
        const response = await fetch(`components/${path}`);
        const html = await response.text();
        const element = document.getElementById(id);
        if (!element) {
            console.warn(`Element with id '${id}' not found, skipping ${path}`);
            return;
        }
        element.innerHTML = html;
    } catch (error) {
        console.error(`Error loading ${path}:`, error);
    }
}

// Load all components
document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
        loadComponent('navbar-placeholder', 'navbar.html'),
        loadComponent('about-placeholder', 'about.html'),
        loadComponent('timeline-placeholder', 'timeline.html'),
        loadComponent('interests-placeholder', 'interests.html'),
        loadComponent('contact-placeholder', 'contact.html'),
        loadComponent('footer-placeholder', 'footer.html')
    ]);

    // Initialize navigation functionality
    initializeNavigation();
});

// Initialize navigation and other interactive features
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation to elements when they come into view
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Navigation bar color change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#fff';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.boxShadow = 'none';
        }
    });
}
