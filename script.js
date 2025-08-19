let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById("cart");

    let total = 0;
    let html = "<ul>";

    for (let i = 0; i < cart.length; i++) {
        const c = cart[i];
        html += `<li>
                    ${c.item} - $${c.price} 
                    <button onclick="removeFromCart(${i})">Remove</button>
                 </li>`;
        total += c.price;
    }
    html += "</ul>";
    html += `<p><strong>Total: $${total}</strong></p>`;
    cartDiv.innerHTML = html;
}


