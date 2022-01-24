import login from "./login";
import api from "./api";

function onPageLoad() {
    login.checkIsLoggedIn().then(resp => {
        if (!resp.loggedIn) {
            window.location.assign("/login.html");
        }
    })
}

function handleAddNewProduct() {
    const form = document.querySelector(".form-add-new-product");
    const inputTitle = form.querySelector(".product-title");
    const inputPrice = form.querySelector(".product-price");
    const inputFeatured = form.querySelector(".product-featured");
    const textareaContent = form.querySelector(".product-content");
    const messages = form.querySelector(".messages");

    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        messages.innerHTML = "";
        let url = `${api.apiUrl}/product`;
        let featured;

        if (inputFeatured.checked) {
            featured = true;
        } else {
            featured = false;
        }
        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title: inputTitle.value,
                status: "publish",
                content: textareaContent.value,
                fields: {
                    "price": parseFloat(inputPrice.value),
                    "featured": featured
                }
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("wp-token")}`,
                "Content-Type": "application/json"
            }

        }).then(resp => {
            if (resp.ok) {
                messages.innerHTML = "Product has been successfully added";
            }
        }).then(data => {
            console.log(data);
        })
    })
}

function handleToggleSection() {
    const toggleBtns = document.querySelectorAll(".js-toggle-section");
    for (let btn of toggleBtns) {
        btn.addEventListener("click", (ev) => {
            const sectionToToggle = btn.nextElementSibling;
            sectionToToggle.classList.toggle("visible");
        })
    }
}

function generateProductsList() {
    const productsList = document.querySelector(".js-products-list");
    productsList.innerHTML = "";
    const url = `https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product?_embed&per_page=99`;
    return fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((products) => {
            console.log(products);
            for (let productData of products) {
                let hasImage = false;
                let image;
                if (productData._embedded && productData._embedded["wp:featuredmedia"]) {

                    const imgUrl = productData._embedded["wp:featuredmedia"][0].source_url;
                    if (imgUrl) {
                        hasImage = true;
                        image = new Image;
                        image.src = imgUrl;
                    }
                }

                const title = productData.title.rendered;
                const price = productData.acf.price;
                const featured = productData.acf.featured;
                const id = productData.id;
                const content = productData.content.rendered;
                const productItem = document.createElement("article");
                productItem.classList.add("product-item");
                productItem.dataset.title = title;
                productItem.dataset.price = price;
                productItem.dataset.content = content;
                productItem.dataset.featured = featured;
                productItem.dataset.id = id;
                productItem.innerHTML = `
                <div class="img-wrap"></div>
                <h4 class="product-title">${title}</h4>
                <div class="price">$${price}</div>
                <div class="actions">
                    <button class="js-edit-product">Edit product</button>
                    <button class="js-remove-product">Remove  product</button>
                </div>
                       `;
                if (hasImage) {
                    productItem.querySelector(".img-wrap").appendChild(image);
                }
                productsList.appendChild(productItem);
            }
        })
}


function handleEditProduct() {
    const editPopup = document.querySelector(".popup-form-edit");
    const form = document.querySelector(".form-edit-product");
    const inputTitle = form.querySelector(".product-title");
    const inputPrice = form.querySelector(".product-price");
    const inputFeatured = form.querySelector(".product-featured");
    const inputProductId = form.querySelector(".product-id");
    const textareaContent = form.querySelector(".product-content");
    const messages = form.querySelector(".messages");

    function resetEditForm() {
        inputTitle.value = "";
        inputPrice.value = "";
        inputFeatured.checked = false;
        inputProductId.value = "";
        textareaContent.value = "";
    }

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-edit-product")) {
            return;
        }
        messages.classList.remove("success");
        messages.innerHTML = "";
        const btn = ev.target;
        const productItem = btn.closest(".product-item");
        const title = productItem.dataset.title;
        const price = productItem.dataset.price;
        const content = productItem.dataset.content;
        const featured = productItem.dataset.featured;
        const id = productItem.dataset.id;


        inputTitle.value = title;
        inputPrice.value = price;
        textareaContent.value = content;
        if (featured === "true") {
            inputFeatured.checked = true;
        } else {
            inputFeatured.checked = false;
        }
        inputProductId.value = id;
        editPopup.classList.add("visible");


    })

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-close-edit-popup")) {
            return;
        }
        const btn = ev.target;
        const popup = btn.closest(".popup-form-edit");
        resetEditForm();
        popup.classList.remove("visible");
    })

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-submit-form-edit")) {
            return;
        }
        ev.preventDefault();
        const btn = ev.target;
        const title = inputTitle.value;
        const price = inputPrice.value;
        const content = textareaContent.value;
        let featured = false;
        if (inputFeatured.checked) {
            featured = true;
        }
        const id = inputProductId.value;
        let url = `${api.apiUrl}/product/${id}`;

        return fetch(url, {
            method: "POST",
            body: JSON.stringify({
                title,
                content,
                fields: {
                    price,
                    featured
                }
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("wp-token")}`,
                "Content-Type": "application/json"
            }

        }).then(resp => {
            if (resp.ok) {
                messages.classList.add("success");
                messages.innerHTML = "Product has been successfully modified";
                generateProductsList();
            } else {
                messages.innerHTML = "Product has not been modified, try again";
            }
        }).then(data => {
            console.log(data);
        })
    })
}

function handleRemoveProduct() {
    const popup = document.querySelector(".popup-remove-product");
    const form = document.querySelector(".form-remove-product");
    const divTitle = form.querySelector(".product-title");
    const inputProductId = form.querySelector(".product-id");

    const messages = form.querySelector(".messages");

    function resetForm() {
        divTitle.innerHTML = "";
        inputProductId.value = "";
    }

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-remove-product")) {
            return;
        }
        ev.preventDefault();
        const btn = ev.target;
        const productItem = btn.closest(".product-item");
        const title = productItem.dataset.title;
        const id = productItem.dataset.id;
        divTitle.innerHTML = title;
        inputProductId.value = id;
        popup.classList.add("visible");
    })

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-submit-form-remove")) {
            return;
        }
        ev.preventDefault();
        const id = inputProductId.value;
        let url = `${api.apiUrl}/product/${id}`;

        return fetch(url, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("wp-token")}`,
                "Content-Type": "application/json"
            }

        }).then(resp => {
            if (resp.ok) {
                messages.classList.add("success");
                messages.innerHTML = "Product has been successfully removed";
                generateProductsList();
            } else {
                messages.innerHTML = "Product has not been modified, try again";
            }
        }).then(data => {
            console.log(data);
        })
    })

    document.body.addEventListener("click", (ev) => {
        if (!ev.target.matches(".js-close-remove-popup")) {
            return;
        }
        const btn = ev.target;
        const popup = btn.closest(".popup-remove-product");
        resetForm();
        popup.classList.remove("visible");
    })
}

export default function () {
    if (!document.body.matches(".admin-panel")) {
        return;
    }
    onPageLoad();
    handleAddNewProduct();
    handleToggleSection();
    generateProductsList();
    handleEditProduct();
    handleRemoveProduct();
}