function pageScrollAnimation() {
  const sections = document.querySelectorAll('section');
  const priceItems = document.querySelectorAll('.pricelist__item');
  const howtoIcons = document.querySelectorAll('.howto__icon');

  // добавить линии каждому прайс элементу
  if (priceItems && priceItems.length > 0) {
    priceItems.forEach(item => {
      const bottomLine = document.createElement('div');
      bottomLine.classList.add('pricelist__item-border');
      item.append(bottomLine);
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
        if (id === 'pricelist' && priceItems?.length > 0) {
          for (let i = 0; i < priceItems.length; i++) {
            priceItems[i].lastChild.style.animationDelay = i/10 + 's';
            priceItems[i].lastChild.classList.add('scroll-animation');
          }
        }
        // анимации иконок в howto steps
        if (id === 'howto' && howtoIcons?.length > 0) {
          for (let i = 0; i < howtoIcons.length; i++) {
            howtoIcons[i].style.animationDelay = i/5 + 's';
            howtoIcons[i].classList.add('scroll-animation');
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