function nav() {
    const navLinks = document.querySelectorAll('a[href^="#"');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href),
                topOffset = document.querySelector('header')?.offsetHeight,
                elementPosition = scrollTarget?.getBoundingClientRect().top,
                offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
            // Close Burger
            document.querySelectorAll('.burger__nav ul li a')?.forEach(a => a.classList.remove('animate'));
            document.querySelector('.burger')?.classList.remove('open');
        });
    });
}
export default nav;