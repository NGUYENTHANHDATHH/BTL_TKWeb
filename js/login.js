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
