import header from "./imports/header";
import featureProductsGrid from "./imports/featureProductsGrid";
import categories from "./imports/categories";
import shopPage from "./imports/shopPage";
import productPage from "./imports/productPage";
import quantityWrap from "./imports/quantityWrap";
import addToCart from "./imports/addToCart";
import footer from "./imports/footer";
import cartPage from "./imports/cartPage";
import login from "./imports/login";
import adminPanel from "./imports/adminPanel";


window.addEventListener("DOMContentLoaded", () => {
    header();
    footer();
    featureProductsGrid();
    categories();
    shopPage();
    productPage();
    quantityWrap();
    addToCart.init();
    cartPage();
    login.init();
    adminPanel();
})




