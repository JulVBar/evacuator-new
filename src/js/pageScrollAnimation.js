function pageScrollAnimation() {
  const sections = document.querySelectorAll('section');


  // Prices section lines
  const priceItems = document.querySelectorAll('.pricelist__item');
  if (priceItems && priceItems.length > 0) {
    priceItems.forEach(item => {
      const bottomLine = document.createElement('div');
      bottomLine.classList.add('pricelist__item-border');
      item.append(bottomLine);
    })
  }

  // Howto section lines
  const howtoSteps = document.querySelectorAll('.howto__step');
  if (howtoSteps && howtoSteps.length > 0) {
    howtoSteps.forEach(item => {
      const borderContainer = document.createElement('ul');
      borderContainer.classList.add('list-reset');
      borderContainer.classList.add('howto__step-border');
      item.append(borderContainer);
      for (let i = 0; i < 4; i++) {
        const borderLine = document.createElement('li');
        borderLine.classList.add('howto__step-border-line');
        borderContainer.append(borderLine);
      }
    })
   }
  

  function scrollAnimation() {
    sections.forEach(el => {
      let scroll = window.pageYOffset;
      let top = el.offsetTop - (0.5 * el.clientHeight);
      let bottom = el.offsetHeight + top;
      let id = el.getAttribute('id');

      if (scroll > top && scroll < bottom)  {
        // анимации линий каждого прайс элемента при скролле
        if (id === 'prices' && priceItems?.length > 0) {
          for (let i = 0; i < priceItems.length; i++) {
            priceItems[i].lastChild.style.animationDelay = i/10 + 's';
            priceItems[i].lastChild.classList.add('scroll-animation');
          }
        }
        // анимации бордера в howto steps
        if (id === 'howto' && howtoSteps?.length > 0) {
          for (let i = 0; i < howtoSteps.length; i++) {
            howtoSteps[i].lastChild.classList.add('scroll-animation');
          }
        }
      }
    });
  }

  if (sections?.length > 0) {
    window.addEventListener('scroll', scrollAnimation);
  }
}
export default pageScrollAnimation;