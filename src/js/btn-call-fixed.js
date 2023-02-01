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
export default btnCallFixed;