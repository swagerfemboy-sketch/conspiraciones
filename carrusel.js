const carrusel = document.querySelector('.carrusel-container');
const items = document.querySelectorAll('.carrusel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
const total = items.length;

function mostrarSlide(n) {
  if (n >= total) index = 0;
  else if (n < 0) index = total - 1;
  else index = n;

  carrusel.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  mostrarSlide(index + 1);
  resetAuto();
});

prevBtn.addEventListener('click', () => {
  mostrarSlide(index - 1);
  resetAuto();
});

let autoSlide = setInterval(() => {
  mostrarSlide(index + 1);
}, 4000);

function resetAuto() {
  clearInterval(autoSlide);
  autoSlide = setInterval(() => {
    mostrarSlide(index + 1);
  }, 4000);
}
