function handleAddToCart() {
    document.body.addEventListener("click", (event) => {

        if (event.target.matches(".js-add-to-cart") || event.target.closest(".js-add-to-cart")) {
            event.preventDefault();
            const btn = event.target;
            const btnType = btn.dataset.type;
            const productId = btn.dataset.productId;
            const quantityInput = document.querySelector(".quantity-input");
            let quantity = 1;
            if (quantityInput) {
                quantity = parseInt(quantityInput.value);
            }
            btn.classList.add("loading");
            addToCartLocalStorage(productId, quantity);
            const customEvent = new CustomEvent("added-to-cart", {
                productId,
                quantity
            });
            window.setTimeout(() => {
                btn.classList.remove("loading");
                if (btnType === "buy-now") {
                    window.location.assign("/cart.html");
                    return;
                } else {
                    document.body.dispatchEvent(customEvent);
                }
            }, 2000);
        }
    })
}


function updateCartTotals() {
    const carItemsTotals = document.querySelectorAll(".js-cart-total-items");
    for (let cartTotal of carItemsTotals) {
        cartTotal.innerHTML = getTotalCartItems().toString();
    }
}

function handleOnAddedToCart() {
    document.body.addEventListener("added-to-cart", (ev) => {
        const popup = document.querySelector(".popup-added-to-cart");
        popup.classList.add("visible");
        updateCartTotals();
        window.setTimeout(() => {
            popup.classList.remove("visible");
        }, 3500);
    })
}

function getCartLocalStorage() {
    return localStorage.getItem("user-cart-object");

}

function getItemsInCart() {
    let cartObjectStorage = getCartLocalStorage();
    let cartObject;
    if (!cartObjectStorage) {
        return [];
    } else {
        cartObject = JSON.parse(cartObjectStorage);
        const items = cartObject.items;
        if (!items || items.length < 1) {
            return [];
        }
        return items;
    }
}

function addToCartLocalStorage(productId, quantity) {
    let cartObjectStorage = getCartLocalStorage();
    let cartObject;

    if (!cartObjectStorage) {
        cartObject = {
            items: [
                {
                    productId,
                    quantity
                }
            ]
        }
        localStorage.setItem("user-cart-object", JSON.stringify(cartObject))
    } else {
        cartObject = JSON.parse(cartObjectStorage);
        const items = cartObject.items;

        const itemAlreadyInCart = items.find((item) => {
            if (item.productId === productId) {
                item.quantity += quantity;
            }
            return item.productId === productId;
        });

        if (!itemAlreadyInCart) {
            cartObject.items.push({
                productId,
                quantity
            })
        }
        localStorage.setItem("user-cart-object", JSON.stringify(cartObject));
    }
}

function getTotalCartItems() {
    let cartObjectStorage = getCartLocalStorage();
    if (!cartObjectStorage) {
        return 0;
    }
    let cartObject = JSON.parse(cartObjectStorage);
    const items = cartObject.items;
    if (!items) {
        return 0;
    }
    let totalItems = 0;
    items.forEach((item) => {
        totalItems += parseInt(item.quantity);
    });
    return totalItems;
}

function init() {
    handleOnAddedToCart();
    handleAddToCart();
}

export default {
    updateCartTotals,
    init,
    getTotalCartItems,
    getItemsInCart,
    getCartLocalStorage
}