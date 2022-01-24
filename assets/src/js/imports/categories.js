import productsGrid from "./productsGrid";
import getCategories from "./getCategories";

function handleCategoryPages() {
    if (window.location.pathname.indexOf("product_category.html") < 0) {
        return;
    }

    const productsPlaceholder = document.querySelector(".js-render-category-products");
    const search = window.location.search.substring(1);
    const params = new URLSearchParams(search);
    const categoryName = params.get("name");

    if (!categoryName) {
        return;
    }

    fetch(`https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product?filter[product_category]=${categoryName}&_embed`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            productsGrid.render({
                anchor: productsPlaceholder,
                products: data,
            });
            console.log(data);
        })
}

function handleCategoryLinks() {
    const anchor = document.querySelector(".js-render-category-links");
    if (!anchor) {
        return
    }
    const categoryLinks = document.createElement("div");
    categoryLinks.classList.add("category-links");
    getCategories().then((categories) => {
        if (categories.length < 1) {
            return;
        }
        for (let category of categories) {
            const item = `
               <a class="category-link" data-slug="${category.slug}" href="/product_category.html?name=${category.slug}">${category.name}</a>
        `;
            categoryLinks.innerHTML += item;
        }

        anchor.insertAdjacentElement("afterend", categoryLinks);
        anchor.remove();
    })
}

export default function () {
    handleCategoryPages();
    handleCategoryLinks();
}