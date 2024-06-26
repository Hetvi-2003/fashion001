
document.addEventListener("DOMContentLoaded", () => {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');
    const checkoutSection = document.querySelector('.checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const applyFiltersButton = document.getElementById('apply-filters');

    let cart = [];
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productElement = button.parentElement;
            const product = {
                name: productElement.getAttribute('data-name'),
                price: parseFloat(productElement.getAttribute('data-price'))
            };
            cart.push(product);
            updateCart();
        });
    });

    applyFiltersButton.addEventListener('click', () => {
        const selectedBrand = document.getElementById('brand-select').value;
        const selectedCategory = document.getElementById('category-select').value;
        filterProducts(selectedBrand, selectedCategory);
    });

    function filterProducts(brand, category) {
        const products = document.querySelectorAll('.product');
        products.forEach(product => {
            const productBrand = product.getAttribute('data-brand');
            const productCategory = product.getAttribute('data-category');
            if ((brand === '' || productBrand === brand) && (category === '' || productCategory === category)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    }

    function updateCart() {
        cartItemsElement.innerHTML = '';
        total = 0;
        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(listItem);
            total += item.price;
        });
        totalPriceElement.textContent = `Total: $${total}`;
    }
});
