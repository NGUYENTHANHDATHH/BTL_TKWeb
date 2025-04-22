document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-popup-btn");
    const popup = document.querySelector(".Popup");
    const closeBtn = document.querySelector(".btn-close");

    openBtn.addEventListener("click", function () {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById("open-popup-sign");
    const popup = document.getElementById("Popup-sign");
    const closeBtn = document.getElementById("btn-close");

    openBtn.addEventListener("click", function () {
        popup.classList.add("active");
    });

    closeBtn.addEventListener("click", function () {
        popup.classList.remove("active");
    });
});
