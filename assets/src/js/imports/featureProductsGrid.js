import productsGrid from "./productsGrid";

export default function () {
    const featureProductsWrap = document.querySelector(".feature-products-wrap");

    if (!featureProductsWrap) {
        return;
    }

    fetch("https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product?filter[meta_key]=featured&filter[meta_value]=1")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            productsGrid.render({
                container: featureProductsWrap,
                products: data,
            });
            console.log(data);
        })
}
