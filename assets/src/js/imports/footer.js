export default function () {
    const footer = document.createElement("footer");
    footer.classList.add("main-footer");
    const anchor = document.querySelector(".js-render-footer");
    if (!anchor) {
        return;
    }
    footer.innerHTML = `
        <div class="popup-added-to-cart">
            <div class="icon-text-wrap">
                 <div class="icon">
                 <svg version="1.1" class="svg cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 27" style="enable-background:new 0 0 24 27; width: 24px; height: 20px;" xml:space="preserve"><g><path d="M0,6v21h24V6H0z M22,25H2V8h20V25z"></path></g><g><path d="M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z"></path></g></svg>
            </div>
             <div class="text">
                Item has been added to cart
            </div>
            </div>
            <a class="btn-1 btn" href="/cart.html">Go to cart</a>
        </div>`;

    anchor.insertAdjacentElement("afterend", footer);
    anchor.remove();
}