import productsGrid from "./productsGrid";
import getCategories from "./getCategories";
import addToCart from "./addToCart";

function renderHeader() {
    const headerPlaceholder = document.querySelector(".js-render-header");
    if (!headerPlaceholder) {
        return;
    }
    const header = document.createElement("header");
    header.classList.add("main-header");
    getCategories().then((categories) => {
        if (categories.length < 1) {
            return;
        }


        header.innerHTML = `
        <div class="container">
         <a class="logo" href="/"><img src="/assets/images/logo-interior.svg" alt="logo"></a>
         <nav>
            <ul class="main-menu">
                <li class="menu-item"><a href="/">Home</a></li>
                <li class="menu-item submenu-links"><a href="/products.html">Products</a></li>
                <li class="menu-item"><a href="/about.html">About</a></li>
                <li class="menu-item"><a href="/contact.html">Contact</a></li>
                <li class="menu-item"><a href="/login.html">Login</a></li>
                <li class="menu-item cart-item">
                    <a href="/cart.html">
                    <span class="js-cart-total-items">1</span>
                         <svg version="1.1" class="svg cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27; width: 24px; height: 20px;" xml:space="preserve"><g><path d="M0,6v21h24V6H0z M22,25H2V8h20V25z"></path></g><g><path d="M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z"></path></g></svg>
                    </a></li>
            </ul>
        </nav>
        <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
       </div>`;
        headerPlaceholder.insertAdjacentElement("afterend", header);
        headerPlaceholder.remove();
        addToCart.updateCartTotals();

        handleHamburger();
    })
}

function handleHamburger() {
    const hamburger = document.querySelector(".hamburger");
    const mainMenu = document.querySelector(".main-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("open");
        mainMenu.classList.toggle("open");
    })
}

export default function () {
    renderHeader();
}

