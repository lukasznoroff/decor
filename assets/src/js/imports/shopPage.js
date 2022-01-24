import productsGrid from "./productsGrid";

let container, url, paramsEncoded, searchInput, formSearch;
const defaultParamsObj = {
    "_embed": "",
    "per_page": 99,
}

function onLoad() {
    loadProducts();
}

function loadProducts(paramsObj = null) {
    container.innerHTML = "";
    container.classList.add("loading");
    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.innerHTML = "Loading...";
    container.appendChild(loader);
    url = new URL("https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product");
    let searchParams;
    if (!paramsObj) {
        searchParams = defaultParamsObj;
    } else {
        searchParams = {
            ...defaultParamsObj,
            ...paramsObj
        }
    }

    paramsEncoded = new URLSearchParams(searchParams);
    url.search = paramsEncoded;

    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            container.classList.remove("loading");
            productsGrid.render({
                container,
                products: data,
            });
            console.log(data);
        })
}

function clearNotices(container) {
    const prevNotices = container.querySelectorAll(".notice");
    for (let preNotice of prevNotices) {
        preNotice.remove();
    }
}

function showNotice(msg, container) {
    clearNotices(container);
    const notice = document.createElement("p")
    notice.classList.add("notice");
    notice.innerHTML = msg;
    container.insertAdjacentElement("beforeend", notice);
}

function handleSearch() {
    formSearch = document.querySelector(".js-form-search-products");
    searchInput = formSearch.querySelector(".search-input");
    formSearch.addEventListener("submit", (ev) => {
        ev.preventDefault();
        const searchTerm = searchInput.value;
        if (!searchTerm) {
            showNotice("Please enter term", formSearch);
            return;
        }
        resetFilters();
        loadProducts({
            search: searchTerm
        })
            .then(() => {
                const activeSearchDiv = document.createElement("div");
                activeSearchDiv.classList.add("active-search");
                activeSearchDiv.innerHTML = `
                    <p class="label">Active search:</p>
                    <button class="js-reset-search">${searchTerm}<span class="close">&times;</span></button>
                    
                `;
                formSearch.appendChild(activeSearchDiv);
            })
    })
}

function handleResetSearch() {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches(".js-reset-search") || event.target.closest(".js-reset-search")) {
            loadProducts()
                .then(() => {
                    resetFilters();
                })
        }
    });
}

function handleFilterCategories() {
    document.body.addEventListener("click", (event) => {
        if (event.target.matches(".category-link") || event.target.closest(".category-link")) {
            event.preventDefault();
            resetFilters();
            event.target.classList.add("active")
            const slug = event.target.dataset.slug;
            if (!slug) {
                return;
            }
            loadProducts({
                "filter[product_category]": slug
            })
        }
    })
}


function resetFilters() {
    clearNotices(formSearch);
    searchInput.value = "";
    const activeSearch = formSearch.querySelector(".active-search");
    if (activeSearch) {
        activeSearch.remove();
    }
    const categoryLinks = document.querySelectorAll(".category-link");
    for (let link of categoryLinks) {
        link.classList.remove("active");
    }
}

export default function () {
    if (!document.body.matches(".products-page")) {
        return;
    }
    container = document.querySelector(".js-products-container");
    if (!container) {
        return;
    }
    handleSearch();
    onLoad();
    handleFilterCategories();
    handleResetSearch();
}

