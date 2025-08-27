function Swiper(selector = {}) {
  const container = document.querySelector(selector);
  if (!container) return;

  const wrapper = container.querySelector(".swiper-wrapper");
  const slides = container.querySelectorAll(".swiper-slide");

  const nextBtn = container.querySelector(".swiper-button-next");
  const prevBtn = container.querySelector(".swiper-button-prev");
  
  let current = 0;
  const total = slides.length;

  function update() {
    wrapper.style.transform = `translateX(-${current * 100}%)`;
  }

  function next() {
    if (current < total - 1) {
      current++;
    }
    update();
  }

  function prev() {
    if (current > 0) {
      current--;
    }
    update();
  }

  nextBtn?.addEventListener("click", next);
  prevBtn?.addEventListener("click", prev);

  update();
}

export default Swiper;
