document.querySelectorAll('.heart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.fa-heart');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});

function toggleAccordion(element) {
    element.classList.toggle("open");
    const icon = element.querySelector(".icon");
    icon.textContent = element.classList.contains("open") ? "–" : "+";
  }
  document.querySelector('.register-btn').addEventListener('click', () => {
    window.open('https://example.com/register','_blank');
  });
  
  document.querySelector('.add-to-cart').addEventListener('click', () => {
    window.open('https://example.com/cart','_blank');
  });

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