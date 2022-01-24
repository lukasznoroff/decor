import helper from "./helper";
import productsGrid from "./productsGrid";

function loadProduct() {
    const productId = helper.getQueryParam("product-id");
    if (!productId) {
        window.location = "/";
        return;
    }
    const url = `https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product/${productId}?_embed`
    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((productData) => {

            console.log(productData);
            const imgUrl = productData._embedded["wp:featuredmedia"][0].source_url;
            const image = new Image;
            image.src = imgUrl;
            document.querySelectorAll(".product-title").forEach((item) => {
                item.innerHTML = productData.title.rendered;
            })
            document.querySelectorAll(".product-price").forEach((item) => {
                item.innerHTML = "$" + productData.acf.price;
            })
            document.querySelectorAll(".js-add-to-cart").forEach((item) => {
                item.dataset.productId = productData.id;
            })
            document.querySelector(".col-gallery").appendChild(image);
            document.querySelector(".product-summary").innerHTML = productData.content.rendered;
        })
}

export default function () {
    if (!document.body.matches(".product-page")) {
        return;
    }
    loadProduct();
}