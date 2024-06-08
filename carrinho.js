function addToCart(productName, quantity, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productName]) {
        alert(`O produto "${productName}" já está no carrinho.`);
    } else {
        cart[productName] = { quantity: quantity, price: price };
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`O produto "${productName}" foi adicionado ao carrinho.`);
        displayCart();
    }
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let totalPrice = 0;

    for (let product in cart) {
        let item = cart[product];
        totalPrice += item.price * item.quantity;

        let listItem = document.createElement('li');
        listItem.className = 'cart-item';
        listItem.innerHTML = `
            ${product}: ${item.quantity} unidade(s) - R$${item.price} cada
            <button class="quantity-button plus" onclick="changeQuantity('${product}', 1)">+</button>
            <button class="quantity-button minus" onclick="changeQuantity('${product}', -1)">-</button>
            <button class="remove-button" onclick="removeFromCart('${product}')">Remover</button>
        `;
        cartElement.appendChild(listItem);
    }

    let totalPriceElement = document.getElementById('total-price');
    if (!totalPriceElement) {
        totalPriceElement = document.createElement('div');
        totalPriceElement.id = 'total-price';
        document.querySelector('.cart-summary').insertBefore(totalPriceElement, document.getElementById('comprar'));
    }
    totalPriceElement.innerHTML = `Total: R$${totalPrice.toFixed(2)}`;
}

function changeQuantity(productName, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productName]) {
        cart[productName].quantity += change;
        if (cart[productName].quantity <= 0) {
            delete cart[productName];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};

    if (cart[productName]) {
        delete cart[productName];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }
}

function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
}

window.onload = function() {
    displayCart();
};
