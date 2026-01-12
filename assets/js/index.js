// index.js - JavaScript for index.html
document.addEventListener('DOMContentLoaded', function() {
    console.log('index.js loaded');

    // Add scroll to top button
    addScrollToTop();

    // Add smooth scrolling
    addSmoothScrolling();

    // Add header scroll effect
    addHeaderScrollEffect();

    // Home page specific: Add click tracking for main content
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
        mainContent.addEventListener('click', function() {
            console.log('Main content clicked');
        });
    }
});

// Scroll to top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #d71400;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
    `;
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Header scroll effect
function addHeaderScrollEffect() {
    const header = document.querySelector('#header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
                header.style.transition = 'background 0.3s ease';
            } else {
                header.style.background = '';
            }
        });
    }
}