export default function () {
    return fetch(`https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product_category`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            return data;
        })
}