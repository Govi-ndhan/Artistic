document.addEventListener('DOMContentLoaded', () => {
    const appName = 'Artistic';
    
    // Set page title
    const title = document.createElement('title');
    title.innerText = appName;
    document.head.appendChild(title);
    document.querySelector('.app-name').innerText = appName;

    // Handle loader
    const loader = document.querySelector('.loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
            // Remove loader from DOM after fade out
            setTimeout(() => loader.remove(), 300);
        }, 2500); // 3 seconds = 3 spins × 1 second each
    }

    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navBar = document.getElementById('nav');
    
    mobileMenu?.addEventListener('click', () => {
        navBar.style.display = navBar.style.display === 'block' ? 'none' : 'block';
    });
    
});

function show(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.toggle('show', page.id === pageId);
        
        // Reset and show loader for the newly shown page
        if (page.id === pageId) {
            const loader = page.querySelector('.loader');
            if (loader) {
                // Remove any existing hide class
                loader.classList.remove('hide');
                
                // Hide and remove loader after animation
                setTimeout(() => {
                    loader.classList.add('hide');
                    setTimeout(() => loader.style.display = 'none', 300);
                }, 2500); // 2.5 seconds for the animation
            }
        } else {
            // Reset loaders for hidden pages
            const loader = page.querySelector('.loader');
            if (loader) {
                loader.classList.remove('hide');
                loader.style.display = 'flex';
            }
        }
    });

    // Hide nav on mobile after page change
    if (document.documentElement.clientWidth < 768) {
        document.getElementById('nav').style.display = 'none';
    }
}