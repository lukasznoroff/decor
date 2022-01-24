import addToCart from "./addToCart";
import productsGrid from "./productsGrid";

function onLoad() {
    updateAfterPageTitle();
    handleCartItems();
}

function updateAfterPageTitle() {
    const afterPageTitle = document.querySelector(".js-after-cart-page-title");
    const totalCartItems = addToCart.getTotalCartItems();
    afterPageTitle.innerHTML = `${totalCartItems} product${totalCartItems > 1 || totalCartItems === 0 ? "s" : ""} in your cart.`;
}

function updateCartTotal(total) {
    const cartTotals = document.querySelectorAll(".js-display-cart-total");
    for (let cartTotal of cartTotals) {
        cartTotal.innerHTML = total.toFixed(2);
    }
}

function handleCartItems() {
    const renderCartWrap = document.querySelector(".js-render-cart");
    const totalCartItems = addToCart.getTotalCartItems();
    if (totalCartItems === 0) {
        const emptyCartDiv = document.createElement("div");
        emptyCartDiv.classList.add("empty-cart");
        emptyCartDiv.innerHTML = `
            <p class="text">Your cart is currently empty.</p> 
            <a class="btn-2" href="/products.html">Start shopping</a>
        `;
        renderCartWrap.innerHTML = "";
        renderCartWrap.appendChild(emptyCartDiv);
    } else {
        const cartDetails = document.createElement("div");
        cartDetails.classList.add("cart-details");
        cartDetails.innerHTML = `
            <div class="items js-display-cart-items">
            </div>
            <div class="order-notes">
                <textarea class="order-notes-textarea" placeholder="Special instructions for seller"></textarea>
            </div>
            <div class="cart-totals">
                <h2 class="cart-total-title">Total: <span class="value">$<span class="js-display-cart-total"></span></span></h2>
                <p class="after-cart-total">Shipping & taxes calculated at checkout</p>
                <a class="btn-2 checkout-btn" href="/checkout.html">Checkout</a>
            </div>
        `;
        const itemsWrap = cartDetails.querySelector(".js-display-cart-items");
        const itemsInCart = addToCart.getItemsInCart();
        let productIds = [];

        for (let item of itemsInCart) {
            productIds.push(item.productId);
        }
        const productIdsString = productIds.join(",");
        const url = `https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product/?_embed&include=${productIdsString}`;

        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((products) => {
                console.log(products);
                let cartTotal = 0;
                for (let product of products) {
                    const productId = product.id.toString();
                    const price = parseFloat(product.acf.price);
                    const quantity = itemsInCart.find((item) => {
                        return item.productId === productId;
                    }).quantity;
                    const totalForProduct = parseInt(quantity) * price;
                    cartTotal += totalForProduct;
                    console.log(quantity)

                    const itemDiv = document.createElement("div");
                    itemDiv.classList.add("item");
                    itemDiv.innerHTML = `
                <div class="img-wrap">
                   <img src="${product._embedded["wp:featuredmedia"][0].source_url}" alt="${product.title.rendered}"> 
                </div>
                <div class="content-wrap">
                    <h3 class="product-title">${product.title.rendered}</h3>
                    <div class="price">$${product.acf.price}</div>
                    <div class="quantity">Quantity: <span class="number">${quantity}</span></div>
                    <button class="remove js-remove-cart-item" data-product-id="${productId}">Remove</button>
                </div> `;
                    itemsWrap.appendChild(itemDiv);
                }
                renderCartWrap.innerHTML = "";
                renderCartWrap.appendChild(cartDetails);
                updateCartTotal(cartTotal);
            })

    }
}

function handleOnRemove() {
    document.body.addEventListener("click", (ev) => {
        if (ev.target.matches(".js-remove-cart-item")) {
            const productId = ev.target.dataset.productId;
            const cartLocal = addToCart.getCartLocalStorage();
            const cartObject = JSON.parse(cartLocal);
            if (!cartObject) {
                return;
            }
            let itemsInCart = addToCart.getItemsInCart();
            if (!itemsInCart || itemsInCart.length < 1) {
                return;
            }
            itemsInCart = itemsInCart.filter((item) => {
                return item.productId.toString() !== productId;

            });
            cartObject.items = itemsInCart;
            localStorage.setItem("user-cart-object", JSON.stringify(cartObject));
            handleCartItems();
            addToCart.updateCartTotals();
            updateAfterPageTitle();
        }
    })
}

export default function () {
    if (!document.body.matches(".cart")) {
        return;
    }
    onLoad();
    handleOnRemove();
}