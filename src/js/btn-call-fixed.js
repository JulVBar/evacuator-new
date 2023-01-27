function btnCallFixed() {
    const btnCallFixed = document.querySelector('.btn-call-fixed');
    function btnCallFixedShow() {
        if (window.pageYOffset !== 0) {
            btnCallFixed.classList.add('active');
        } else {
            btnCallFixed.classList.remove('active');
        }
    }

    if (btnCallFixed) {
        window.addEventListener('scroll', btnCallFixedShow);
        
    }
}
export default btnCallFixed;