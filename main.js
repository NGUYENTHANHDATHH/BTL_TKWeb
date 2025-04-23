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