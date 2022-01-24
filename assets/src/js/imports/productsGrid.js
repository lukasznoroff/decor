function render(config) {
    const container = config.container;
    const products = config.products;
    const grid = document.createElement("div");
    grid.classList.add("products-grid");
    grid.innerHTML = `
         <div class="items-wrap">
         </div>
    `;

    const itemsWrap = grid.querySelector(".items-wrap");

    for (let product of products) {
        const productUrl = `/product.html?product-id=${product.id}`;
        const productEl = document.createElement("a");
        productEl.href = productUrl;
        productEl.classList.add("product-item");

        let title = product.title;
        let featuredImageUrl = product.featured_image_url;
        let price = product.acf.price;
        let featured = product.acf.featured;


        const productHtml = `
            <figure class="img-wrap">
                 <img src="${featuredImageUrl}" alt="${title}">
            </figure>
            <div class="content-wrap">
                <div class="content-inner-wrap">
                    <h3 class="product-title"><span class="overflow">${title}</span></h3>
                    <div class="price"><span class="overflow">$${price}</span></div>
                </div>
                 <div class="arrow-down">
                    <span class="overflow"><img src="/assets/images/down-arrow.svg" alt="arrow"></span>
                </div>
            </div>
        `;

        productEl.innerHTML = productHtml;
        if (featured) {
            const featuredDiv = document.createElement("div");
            featuredDiv.classList.add("featured")
            featuredDiv.innerHTML = "Featured";
            productEl.insertAdjacentElement("afterbegin", featuredDiv);
        }
        itemsWrap.appendChild(productEl);
    }
    container.innerHTML = "";
    container.appendChild(grid);

}

export default {
    render
}