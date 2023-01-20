function btnToTop() {
    const btnTop = document.querySelector('.btn-to-top');

    function btnToTopShow() {
        if (window.pageYOffset !== 0) {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    }

    if (btnTop) {
        window.addEventListener('scroll', btnToTopShow);
    
        btnTop?.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
export default btnToTop;