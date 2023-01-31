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





    
    let screen = window.innerWidth;
    const showPricelistBtn = document.querySelector('.show__pricelist');
    const priceList = document.getElementById('pricelist');
    const height = priceList.clientHeight;
    const halfHeight = 0.5 * height;
    console.log(showPricelistBtn)

    window.addEventListener('resize', () => {
        screen = window.innerWidth;
        showcontent();
    })

    function showcontent () {
        if (showPricelistBtn && priceList) {
            if (screen < 768) {
                priceList.style.height = halfHeight + 'px';
                showPricelistBtn.addEventListener('click', () => {
                    if (priceList.clientHeight === height) {
                        priceList.style.height = halfHeight + 'px';
                    } else {
                        priceList.style.height = height + 'px';
                    }
                })
            } else {
                priceList.style.height = height + 'px';
            }
        }

        
        
    }
    showcontent();
    
}
export default btnCallFixed;