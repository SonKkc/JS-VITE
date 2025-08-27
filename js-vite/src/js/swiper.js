function Swiper(selector, options = {}) {
    const container = document.querySelector(selector);
    if (!container) return;

    const wrapper = container.querySelector(".swiper-wrapper");
    const slides = container.querySelectorAll(".swiper-slide");
    const nextBtn = container.querySelector(".swiper-button-next");
    const prevBtn = container.querySelector(".swiper-button-prev");
    const pagination = container.querySelector(".swiper-pagination");
    const scrollbar = container.querySelector(".swiper-scrollbar");

    let current = 0;
    const total = slides.length;
    const loop = options.loop || false;
    let dots = [];

    if (pagination) {
        pagination.innerHTML = "";
        for (let i = 0; i < total; i++) {
            const dot = document.createElement("span");
            dot.className = "swiper-pagination-bullet";
            dot.addEventListener("click", () => {
                current = i;
                update();
            });
            pagination.appendChild(dot);
        }
        dots = pagination.querySelectorAll(".swiper-pagination-bullet");
    }

    function update() {
        wrapper.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    function next() {
        if (current < total - 1) {
            current++;
        } else if (loop) {
            current = 0;
        }
        update();
    }

    function prev() {
        if (current > 0) {
            current--;
        } else if (loop) {
            current = total - 1;
        }
        update();
    }

    nextBtn?.addEventListener("click", next);
    prevBtn?.addEventListener("click", prev);

    update();
}

export default Swiper;
