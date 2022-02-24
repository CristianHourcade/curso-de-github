const drawTotalCart = (cart) => {
    const DOMCartTotal = document.getElementById("cart-total");
    DOMCartTotal.innerHTML = `$${cart.total.toFixed(2)}`;
};