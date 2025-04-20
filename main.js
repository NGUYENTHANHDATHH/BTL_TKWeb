document.querySelectorAll('.heart-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.fa-heart');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});