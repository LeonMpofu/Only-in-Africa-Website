document.querySelector('.cta').addEventListener('click', () => {
    window.location.href = '#shop';
});

// Simple alert for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert('Added to cart!');
    });
});
