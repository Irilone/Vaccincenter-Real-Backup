/**
 * Vaccincenter Varvet Template Scripts
 * Version 2.1 - Refined for new template.html
 */

document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle (Leveraging Bootstrap 5) ---
    // Bootstrap 5 handles the toggling of the .collapse element via data-bs-toggle and data-bs-target.
    // Additional JS might be needed for custom animations or state management beyond Bootstrap's default.
    // For example, to change the hamburger icon appearance:
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            // Example: Toggle an 'is-active' class on the toggler itself for icon animation
            // this.classList.toggle('is-active'); 
            
            // Note: aria-expanded is handled by Bootstrap
        });
    }

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            try {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerOffset = document.querySelector('.header.sticky-top')?.offsetHeight || 56; // Get header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Optional: Focus on the target element after scrolling for accessibility
                    setTimeout(() => {
                        targetElement.setAttribute('tabindex', '-1'); // Ensure it can be focused
                        targetElement.focus({ preventScroll: true }); // preventScroll to avoid jump after smooth scroll
                    }, 500); // Adjust timeout as needed for scroll duration
                }
            } catch (error) {
                console.warn('Smooth scroll target not found or invalid selector:', targetId);
            }
        });
    });

    // --- Image Fade-in on Scroll (Placeholder) ---
    // Add class 'fade-in-image' to images you want to apply this effect to.
    // Requires Intersection Observer.
    const imagesToFadeIn = document.querySelectorAll('.fade-in-image');
    if (imagesToFadeIn.length > 0 && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -50px 0px' }); // Adjust rootMargin as needed

        imagesToFadeIn.forEach(img => {
            img.style.opacity = '0';
            img.style.transform = 'translateY(20px)';
            img.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            imageObserver.observe(img);
        });
    } else if (imagesToFadeIn.length > 0) {
        // Fallback for older browsers or if IntersectionObserver is not supported
        imagesToFadeIn.forEach(img => {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
        });
    }
    
    // --- Basic Keyboard Accessibility Enhancement: Focus Visible ---
    // Modern browsers have good default focus indicators. This is a fallback or enhancement.
    // Consider using :focus-visible pseudo-class in CSS for better performance and behavior.
    // This JS version is a more explicit way if needed.
    function handleFocus(e) {
        e.target.classList.add('keyboard-focus');
    }
    function handleBlur(e) {
        e.target.classList.remove('keyboard-focus');
    }
    const focusableElements = document.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    );
    focusableElements.forEach(el => {
        el.addEventListener('focus', handleFocus);
        el.addEventListener('blur', handleBlur);
    });
    // CSS for .keyboard-focus (add to your style.css)
    // .keyboard-focus {
    //   outline: 2px solid var(--color-primary);
    //   outline-offset: 2px;
    // }

    // --- Auto-update copyright year in footer ---
    const copyrightYearElement = document.querySelector('.footer .text-muted script');
    if (copyrightYearElement && copyrightYearElement.parentElement.textContent.includes('©')) {
        // The script tag in HTML already handles this. If not, uncomment below:
        // copyrightYearElement.parentElement.innerHTML = `&copy; ${new Date().getFullYear()} Praktikertjänst AB`;
    }

});
