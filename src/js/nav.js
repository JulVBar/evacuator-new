function nav() {
    const navLinks = document.querySelectorAll('a[href^="#"'),
        sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href),
                topOffset = document.querySelector('.header').offsetHeight,
                elementPosition = scrollTarget.getBoundingClientRect().top,
                offsetPosition = elementPosition - topOffset;
            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}
export default nav;