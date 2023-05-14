function buttonsJs() {
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

    const showPricelistBtn = document.querySelector('.show__pricelist');
    const priceList = document.getElementById('pricelist');

    if (showPricelistBtn && priceList) {
        showPricelistBtn.addEventListener('click', () => {
            priceList.classList.toggle('opened');
            if (priceList.classList.contains('opened')) {
                showPricelistBtn.innerHTML = "Свернуть прайслист"
            } else {
                showPricelistBtn.innerHTML = "Развернуть прайслист"
            }
        })
    }

    const showCalculatorBtn = document.querySelector('.show__calculator');
    const calculator = document.querySelector('.calculating__inner');

    if (showPricelistBtn && calculator) {
        showCalculatorBtn.addEventListener('click', () => {
            calculator.classList.toggle('opened');
            if (calculator.classList.contains('opened')) {
                showCalculatorBtn.innerHTML = "Свернуть калькулятор"
                
            } else {
                showCalculatorBtn.innerHTML = "Развернуть калькулятор"
                window.scrollTo({
                    top: document.querySelector('.calculating').offsetTop,
                    behavior: "smooth"
                });
            }
        })
    }
}
export default buttonsJs;