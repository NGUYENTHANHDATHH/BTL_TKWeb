document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-popup-btn");
    const popup = document.querySelector(".Popup");
    const closeBtn = document.querySelector(".btn-close");

    openBtn.addEventListener("click", function () {
        popup.classList.add("active");
        document.querySelector('.BG-color').classList.add('active');
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
        document.querySelector('.BG-color').classList.remove('active');
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-popup-sign");
    const popup = document.getElementById("Popup-sign");
    const closeBtn = document.getElementById("btn-close");

    openBtn.addEventListener("click", function () {
        popup.classList.add("active");
        document.querySelector('.BG-color').classList.add('active');
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
        document.querySelector('.BG-color').classList.remove('active');
    });
});
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Kiểm tra nếu sản phẩm đã có thì tăng số lượng
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
  }

// slideshow
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;

    // Tạo dots
    slides.forEach((_, i) => {
    const dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => goToSlide(i));
    });

    function goToSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
    document.querySelector('.slides').style.transform = `translateX(-${n * 100}%)`;

    const dots = document.querySelectorAll('.dots span');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');

    currentSlide = n;
    }

    document.querySelector('.next').onclick = () => {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
    };

    document.querySelector('.prev').onclick = () => {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prev);
    };
});