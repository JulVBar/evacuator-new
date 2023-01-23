function preloader() {
    document.body.onload = function() {
    
        const secondSection = document.querySelector('.prices');
        const animatedElems = document.querySelectorAll('[data-animation]');
        
        if (animatedElems && animatedElems?.length > 0) {
            if (window.pageYOffset === 0) {
                animatedElems.forEach(item=>item.classList.add('start-animation'));
            }
        }

        if (secondSection) {
            if (window.pageYOffset === 0) {
                secondSection.classList.add('start-animation');
            }
        }

        // document.body.style.overflow = 'hidden';
        
        // setTimeout(function() {
        //     let preloader = document.querySelector('.preloader');
    
        //     if (preloader && !preloader.classList.contains('done')) {
        //         preloader.classList.add('done');
        //         document.body.style.overflow = '';
        //     }

        //     document.querySelectorAll('[data-animation]').forEach(item=>item.classList.add('start-animation'));
            
        // }, 0);
    };
    
}

export default preloader;