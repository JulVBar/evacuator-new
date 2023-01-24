function accordion() {

  const accordionItems = document.querySelectorAll('.accordion__item');

  if(accordionItems) {
      accordionItems.forEach(el => {
          el.addEventListener('click', (e) => {
              const self = e.currentTarget;
              const accordionHeader = self.querySelector('.accordion__header');
              const accordionBody = self.querySelector('.accordion__body');

              self.classList.toggle('open');

              if(self.classList.contains('open')) {
                  accordionHeader.setAttribute('aria-expanded', true);
                  accordionBody.setAttribute('aria-hidden', false);
                  accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
              } else {
                  accordionHeader.setAttribute('aria-expanded', false);
                  accordionBody.setAttribute('aria-hidden', true);
                  accordionBody.style.maxHeight = null;
              }
          });
      });
  }
}

export default accordion;