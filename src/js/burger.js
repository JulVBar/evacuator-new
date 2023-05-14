function burger() {
  const burger = document.querySelector('.burger');
  const burgerNav = document.querySelectorAll('.burger__nav ul li a');
  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
      if (burgerNav) {
        burgerNav.forEach(link => {
          link.classList.toggle('animate');
        })
      }
    })
  }
}
export default burger;