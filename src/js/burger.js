function burger() {
  const burger = document.querySelector('.burger');
  const burgerMenu = document.querySelector('.burger__menu');
  if (burger && burgerMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('opened');
      burgerMenu.classList.toggle('opened');
    })
  }
}
export default burger;