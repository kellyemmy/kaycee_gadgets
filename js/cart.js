let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

    const product = cart.find(item => item.name === name);

    if(product){
        product.quantity += 1;
    } else {
        cart.push({
            name,
            price,
            image,
            quantity:1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge(){
    const badge = document.getElementById("cart-count");

    if(!badge) return;

    let total = cart.reduce((sum,item)=>sum + item.quantity,0);
    badge.textContent = total;
}

function loadCart(){

    const cartTable = document.getElementById("cart-items");

    if(!cartTable) return;

    cartTable.innerHTML = "";

    cart.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${item.name}</td>
        <td>₦${item.price}</td>
        <td>${item.quantity}</td>
        `;

        cartTable.appendChild(row);

    });

}

document.addEventListener("DOMContentLoaded", ()=>{
    updateCartBadge();
    loadCart();
});
