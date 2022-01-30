/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/imports/addToCart.js":
/*!********************************************!*\
  !*** ./assets/src/js/imports/addToCart.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function handleAddToCart() {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".js-add-to-cart") || event.target.closest(".js-add-to-cart")) {
      event.preventDefault();
      var btn = event.target;
      var btnType = btn.dataset.type;
      var productId = btn.dataset.productId;
      var quantityInput = document.querySelector(".quantity-input");
      var quantity = 1;

      if (quantityInput) {
        quantity = parseInt(quantityInput.value);
      }

      btn.classList.add("loading");
      addToCartLocalStorage(productId, quantity);
      var customEvent = new CustomEvent("added-to-cart", {
        productId: productId,
        quantity: quantity
      });
      window.setTimeout(function () {
        btn.classList.remove("loading");

        if (btnType === "buy-now") {
          window.location.assign("/cart.html");
          return;
        } else {
          document.body.dispatchEvent(customEvent);
        }
      }, 2000);
    }
  });
}

function updateCartTotals() {
  var carItemsTotals = document.querySelectorAll(".js-cart-total-items");

  var _iterator = _createForOfIteratorHelper(carItemsTotals),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cartTotal = _step.value;
      cartTotal.innerHTML = getTotalCartItems().toString();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function handleOnAddedToCart() {
  document.body.addEventListener("added-to-cart", function (ev) {
    var popup = document.querySelector(".popup-added-to-cart");
    popup.classList.add("visible");
    updateCartTotals();
    window.setTimeout(function () {
      popup.classList.remove("visible");
    }, 3500);
  });
}

function getCartLocalStorage() {
  return localStorage.getItem("user-cart-object");
}

function getItemsInCart() {
  var cartObjectStorage = getCartLocalStorage();
  var cartObject;

  if (!cartObjectStorage) {
    return [];
  } else {
    cartObject = JSON.parse(cartObjectStorage);
    var items = cartObject.items;

    if (!items || items.length < 1) {
      return [];
    }

    return items;
  }
}

function addToCartLocalStorage(productId, quantity) {
  var cartObjectStorage = getCartLocalStorage();
  var cartObject;

  if (!cartObjectStorage) {
    cartObject = {
      items: [{
        productId: productId,
        quantity: quantity
      }]
    };
    localStorage.setItem("user-cart-object", JSON.stringify(cartObject));
  } else {
    cartObject = JSON.parse(cartObjectStorage);
    var items = cartObject.items;
    var itemAlreadyInCart = items.find(function (item) {
      if (item.productId === productId) {
        item.quantity += quantity;
      }

      return item.productId === productId;
    });

    if (!itemAlreadyInCart) {
      cartObject.items.push({
        productId: productId,
        quantity: quantity
      });
    }

    localStorage.setItem("user-cart-object", JSON.stringify(cartObject));
  }
}

function getTotalCartItems() {
  var cartObjectStorage = getCartLocalStorage();

  if (!cartObjectStorage) {
    return 0;
  }

  var cartObject = JSON.parse(cartObjectStorage);
  var items = cartObject.items;

  if (!items) {
    return 0;
  }

  var totalItems = 0;
  items.forEach(function (item) {
    totalItems += parseInt(item.quantity);
  });
  return totalItems;
}

function init() {
  handleOnAddedToCart();
  handleAddToCart();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  updateCartTotals: updateCartTotals,
  init: init,
  getTotalCartItems: getTotalCartItems,
  getItemsInCart: getItemsInCart,
  getCartLocalStorage: getCartLocalStorage
});

/***/ }),

/***/ "./assets/src/js/imports/adminPanel.js":
/*!*********************************************!*\
  !*** ./assets/src/js/imports/adminPanel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./assets/src/js/imports/login.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./assets/src/js/imports/api.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function onPageLoad() {
  _login__WEBPACK_IMPORTED_MODULE_0__["default"].checkIsLoggedIn().then(function (resp) {
    if (!resp.loggedIn) {
      window.location.assign("/login.html");
    }
  });
}

function handleAddNewProduct() {
  var form = document.querySelector(".form-add-new-product");
  var inputTitle = form.querySelector(".product-title");
  var inputPrice = form.querySelector(".product-price");
  var inputFeatured = form.querySelector(".product-featured");
  var textareaContent = form.querySelector(".product-content");
  var messages = form.querySelector(".messages");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    messages.innerHTML = "";
    var url = "".concat(_api__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl, "/product");
    var featured;

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
        "Authorization": "Bearer ".concat(localStorage.getItem("wp-token")),
        "Content-Type": "application/json"
      }
    }).then(function (resp) {
      if (resp.ok) {
        messages.innerHTML = "Product has been successfully added";
      }
    }).then(function (data) {
      console.log(data);
    });
  });
}

function handleToggleSection() {
  var toggleBtns = document.querySelectorAll(".js-toggle-section");

  var _iterator = _createForOfIteratorHelper(toggleBtns),
      _step;

  try {
    var _loop = function _loop() {
      var btn = _step.value;
      btn.addEventListener("click", function (ev) {
        var sectionToToggle = btn.nextElementSibling;
        sectionToToggle.classList.toggle("visible");
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function generateProductsList() {
  var productsList = document.querySelector(".js-products-list");
  productsList.innerHTML = "";
  var url = "https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product?_embed&per_page=99";
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (products) {
    console.log(products);

    var _iterator2 = _createForOfIteratorHelper(products),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var productData = _step2.value;
        var hasImage = false;
        var image = void 0;

        if (productData._embedded && productData._embedded["wp:featuredmedia"]) {
          var imgUrl = productData._embedded["wp:featuredmedia"][0].source_url;

          if (imgUrl) {
            hasImage = true;
            image = new Image();
            image.src = imgUrl;
          }
        }

        var title = productData.title.rendered;
        var price = productData.acf.price;
        var featured = productData.acf.featured;
        var id = productData.id;
        var content = productData.content.rendered;
        var productItem = document.createElement("article");
        productItem.classList.add("product-item");
        productItem.dataset.title = title;
        productItem.dataset.price = price;
        productItem.dataset.content = content;
        productItem.dataset.featured = featured;
        productItem.dataset.id = id;
        productItem.innerHTML = "\n                <div class=\"img-wrap\"></div>\n                <h4 class=\"product-title\">".concat(title, "</h4>\n                <div class=\"price\">$").concat(price, "</div>\n                <div class=\"actions\">\n                    <button class=\"js-edit-product\">Edit product</button>\n                    <button class=\"js-remove-product\">Remove  product</button>\n                </div>\n                       ");

        if (hasImage) {
          productItem.querySelector(".img-wrap").appendChild(image);
        }

        productsList.appendChild(productItem);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  });
}

function handleEditProduct() {
  var editPopup = document.querySelector(".popup-form-edit");
  var form = document.querySelector(".form-edit-product");
  var inputTitle = form.querySelector(".product-title");
  var inputPrice = form.querySelector(".product-price");
  var inputFeatured = form.querySelector(".product-featured");
  var inputProductId = form.querySelector(".product-id");
  var textareaContent = form.querySelector(".product-content");
  var messages = form.querySelector(".messages");

  function resetEditForm() {
    inputTitle.value = "";
    inputPrice.value = "";
    inputFeatured.checked = false;
    inputProductId.value = "";
    textareaContent.value = "";
  }

  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-edit-product")) {
      return;
    }

    messages.classList.remove("success");
    messages.innerHTML = "";
    var btn = ev.target;
    var productItem = btn.closest(".product-item");
    var title = productItem.dataset.title;
    var price = productItem.dataset.price;
    var content = productItem.dataset.content;
    var featured = productItem.dataset.featured;
    var id = productItem.dataset.id;
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
  });
  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-close-edit-popup")) {
      return;
    }

    var btn = ev.target;
    var popup = btn.closest(".popup-form-edit");
    resetEditForm();
    popup.classList.remove("visible");
  });
  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-submit-form-edit")) {
      return;
    }

    ev.preventDefault();
    var btn = ev.target;
    var title = inputTitle.value;
    var price = inputPrice.value;
    var content = textareaContent.value;
    var featured = false;

    if (inputFeatured.checked) {
      featured = true;
    }

    var id = inputProductId.value;
    var url = "".concat(_api__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl, "/product/").concat(id);
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
        fields: {
          price: price,
          featured: featured
        }
      }),
      headers: {
        "Authorization": "Bearer ".concat(localStorage.getItem("wp-token")),
        "Content-Type": "application/json"
      }
    }).then(function (resp) {
      if (resp.ok) {
        messages.classList.add("success");
        messages.innerHTML = "Product has been successfully modified";
        generateProductsList();
      } else {
        messages.innerHTML = "Product has not been modified, try again";
      }
    }).then(function (data) {
      console.log(data);
    });
  });
}

function handleRemoveProduct() {
  var popup = document.querySelector(".popup-remove-product");
  var form = document.querySelector(".form-remove-product");
  var divTitle = form.querySelector(".product-title");
  var inputProductId = form.querySelector(".product-id");
  var messages = form.querySelector(".messages");

  function resetForm() {
    divTitle.innerHTML = "";
    inputProductId.value = "";
  }

  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-remove-product")) {
      return;
    }

    ev.preventDefault();
    var btn = ev.target;
    var productItem = btn.closest(".product-item");
    var title = productItem.dataset.title;
    var id = productItem.dataset.id;
    divTitle.innerHTML = title;
    inputProductId.value = id;
    popup.classList.add("visible");
  });
  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-submit-form-remove")) {
      return;
    }

    ev.preventDefault();
    var id = inputProductId.value;
    var url = "".concat(_api__WEBPACK_IMPORTED_MODULE_1__["default"].apiUrl, "/product/").concat(id);
    return fetch(url, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer ".concat(localStorage.getItem("wp-token")),
        "Content-Type": "application/json"
      }
    }).then(function (resp) {
      if (resp.ok) {
        messages.classList.add("success");
        messages.innerHTML = "Product has been successfully removed";
        generateProductsList();
      } else {
        messages.innerHTML = "Product has not been modified, try again";
      }
    }).then(function (data) {
      console.log(data);
    });
  });
  document.body.addEventListener("click", function (ev) {
    if (!ev.target.matches(".js-close-remove-popup")) {
      return;
    }

    var btn = ev.target;
    var popup = btn.closest(".popup-remove-product");
    resetForm();
    popup.classList.remove("visible");
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
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

/***/ }),

/***/ "./assets/src/js/imports/api.js":
/*!**************************************!*\
  !*** ./assets/src/js/imports/api.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var apiUrl = "https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  apiUrl: apiUrl
});

/***/ }),

/***/ "./assets/src/js/imports/cartPage.js":
/*!*******************************************!*\
  !*** ./assets/src/js/imports/cartPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addToCart */ "./assets/src/js/imports/addToCart.js");
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function onLoad() {
  updateAfterPageTitle();
  handleCartItems();
}

function updateAfterPageTitle() {
  var afterPageTitle = document.querySelector(".js-after-cart-page-title");
  var totalCartItems = _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].getTotalCartItems();
  afterPageTitle.innerHTML = "".concat(totalCartItems, " product").concat(totalCartItems > 1 || totalCartItems === 0 ? "s" : "", " in your cart.");
}

function updateCartTotal(total) {
  var cartTotals = document.querySelectorAll(".js-display-cart-total");

  var _iterator = _createForOfIteratorHelper(cartTotals),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var cartTotal = _step.value;
      cartTotal.innerHTML = total.toFixed(2);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function handleCartItems() {
  var renderCartWrap = document.querySelector(".js-render-cart");
  var totalCartItems = _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].getTotalCartItems();

  if (totalCartItems === 0) {
    var emptyCartDiv = document.createElement("div");
    emptyCartDiv.classList.add("empty-cart");
    emptyCartDiv.innerHTML = "\n            <p class=\"text\">Your cart is currently empty.</p> \n            <a class=\"btn-2\" href=\"/products.html\">Start shopping</a>\n        ";
    renderCartWrap.innerHTML = "";
    renderCartWrap.appendChild(emptyCartDiv);
  } else {
    var cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-details");
    cartDetails.innerHTML = "\n            <div class=\"items js-display-cart-items\">\n            </div>\n     \n        ";
    var itemsWrap = cartDetails.querySelector(".js-display-cart-items");
    var itemsInCart = _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].getItemsInCart();
    var productIds = [];

    var _iterator2 = _createForOfIteratorHelper(itemsInCart),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var item = _step2.value;
        productIds.push(item.productId);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var productIdsString = productIds.join(",");
    var url = "https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product/?_embed&include=".concat(productIdsString);
    fetch(url).then(function (res) {
      return res.json();
    }).then(function (products) {
      console.log(products);
      var cartTotal = 0;

      var _iterator3 = _createForOfIteratorHelper(products),
          _step3;

      try {
        var _loop = function _loop() {
          var product = _step3.value;
          var productId = product.id.toString();
          var price = parseFloat(product.acf.price);
          var quantity = itemsInCart.find(function (item) {
            return item.productId === productId;
          }).quantity;
          var totalForProduct = parseInt(quantity) * price;
          cartTotal += totalForProduct;
          console.log(quantity);
          var itemDiv = document.createElement("div");
          itemDiv.classList.add("item");
          itemDiv.innerHTML = "\n                <div class=\"img-wrap\">\n                   <img src=\"".concat(product._embedded["wp:featuredmedia"][0].source_url, "\" alt=\"").concat(product.title.rendered, "\"> \n                </div>\n                <div class=\"content-wrap\">\n                    <h3 class=\"product-title\">").concat(product.title.rendered, "</h3>\n                    <div class=\"price\">$").concat(product.acf.price, "</div>\n                    <div class=\"quantity\">Quantity: <span class=\"number\">").concat(quantity, "</span></div>\n                    <button class=\"remove js-remove-cart-item\" data-product-id=\"").concat(productId, "\">Remove</button>\n                </div> ");
          itemsWrap.appendChild(itemDiv);
        };

        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      renderCartWrap.innerHTML = "";
      renderCartWrap.appendChild(cartDetails);
      updateCartTotal(cartTotal);
    });
  }
}

function handleOnRemove() {
  document.body.addEventListener("click", function (ev) {
    if (ev.target.matches(".js-remove-cart-item")) {
      var productId = ev.target.dataset.productId;
      var cartLocal = _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].getCartLocalStorage();
      var cartObject = JSON.parse(cartLocal);

      if (!cartObject) {
        return;
      }

      var itemsInCart = _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].getItemsInCart();

      if (!itemsInCart || itemsInCart.length < 1) {
        return;
      }

      itemsInCart = itemsInCart.filter(function (item) {
        return item.productId.toString() !== productId;
      });
      cartObject.items = itemsInCart;
      localStorage.setItem("user-cart-object", JSON.stringify(cartObject));
      handleCartItems();
      _addToCart__WEBPACK_IMPORTED_MODULE_0__["default"].updateCartTotals();
      updateAfterPageTitle();
    }
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.body.matches(".cart")) {
    return;
  }

  onLoad();
  handleOnRemove();
}

/***/ }),

/***/ "./assets/src/js/imports/categories.js":
/*!*********************************************!*\
  !*** ./assets/src/js/imports/categories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");
/* harmony import */ var _getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCategories */ "./assets/src/js/imports/getCategories.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function handleCategoryPages() {
  if (window.location.pathname.indexOf("product_category.html") < 0) {
    return;
  }

  var productsPlaceholder = document.querySelector(".js-render-category-products");
  var search = window.location.search.substring(1);
  var params = new URLSearchParams(search);
  var categoryName = params.get("name");

  if (!categoryName) {
    return;
  }

  fetch("https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product?filter[product_category]=".concat(categoryName, "&_embed")).then(function (res) {
    return res.json();
  }).then(function (data) {
    _productsGrid__WEBPACK_IMPORTED_MODULE_0__["default"].render({
      anchor: productsPlaceholder,
      products: data
    });
    console.log(data);
  });
}

function handleCategoryLinks() {
  var anchor = document.querySelector(".js-render-category-links");

  if (!anchor) {
    return;
  }

  var categoryLinks = document.createElement("div");
  categoryLinks.classList.add("category-links");
  (0,_getCategories__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (categories) {
    if (categories.length < 1) {
      return;
    }

    var _iterator = _createForOfIteratorHelper(categories),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var category = _step.value;
        var item = "\n               <a class=\"category-link\" data-slug=\"".concat(category.slug, "\" href=\"/product_category.html?name=").concat(category.slug, "\">").concat(category.name, "</a>\n        ");
        categoryLinks.innerHTML += item;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    anchor.insertAdjacentElement("afterend", categoryLinks);
    anchor.remove();
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  handleCategoryPages();
  handleCategoryLinks();
}

/***/ }),

/***/ "./assets/src/js/imports/featureProductsGrid.js":
/*!******************************************************!*\
  !*** ./assets/src/js/imports/featureProductsGrid.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var featureProductsWrap = document.querySelector(".feature-products-wrap");

  if (!featureProductsWrap) {
    return;
  }

  fetch("https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product?filter[meta_key]=featured&filter[meta_value]=1").then(function (res) {
    return res.json();
  }).then(function (data) {
    _productsGrid__WEBPACK_IMPORTED_MODULE_0__["default"].render({
      container: featureProductsWrap,
      products: data
    });
    console.log(data);
  });
}

/***/ }),

/***/ "./assets/src/js/imports/footer.js":
/*!*****************************************!*\
  !*** ./assets/src/js/imports/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var footer = document.createElement("footer");
  footer.classList.add("main-footer");
  var anchor = document.querySelector(".js-render-footer");

  if (!anchor) {
    return;
  }

  footer.innerHTML = "\n        <div class=\"popup-added-to-cart\">\n            <div class=\"icon-text-wrap\">\n                 <div class=\"icon\">\n                 <svg version=\"1.1\" class=\"svg cart\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 27\" style=\"enable-background:new 0 0 24 27; width: 24px; height: 20px;\" xml:space=\"preserve\"><g><path d=\"M0,6v21h24V6H0z M22,25H2V8h20V25z\"></path></g><g><path d=\"M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z\"></path></g></svg>\n            </div>\n             <div class=\"text\">\n                Item has been added to cart\n            </div>\n            </div>\n            <a class=\"btn-1 btn\" href=\"/cart.html\">Go to cart</a>\n        </div>";
  anchor.insertAdjacentElement("afterend", footer);
  anchor.remove();
}

/***/ }),

/***/ "./assets/src/js/imports/getCategories.js":
/*!************************************************!*\
  !*** ./assets/src/js/imports/getCategories.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  return fetch("https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product_category").then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
}

/***/ }),

/***/ "./assets/src/js/imports/header.js":
/*!*****************************************!*\
  !*** ./assets/src/js/imports/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");
/* harmony import */ var _getCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCategories */ "./assets/src/js/imports/getCategories.js");
/* harmony import */ var _addToCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToCart */ "./assets/src/js/imports/addToCart.js");




function renderHeader() {
  var headerPlaceholder = document.querySelector(".js-render-header");

  if (!headerPlaceholder) {
    return;
  }

  var header = document.createElement("header");
  header.classList.add("main-header");
  (0,_getCategories__WEBPACK_IMPORTED_MODULE_1__["default"])().then(function (categories) {
    if (categories.length < 1) {
      return;
    }

    header.innerHTML = "\n        <div class=\"container\">\n         <a class=\"logo\" href=\"/\"><img src=\"/assets/images/logo-interior.svg\" alt=\"logo\"></a>\n         <nav>\n            <ul class=\"main-menu\">\n                <li class=\"menu-item\"><a href=\"/\">Home</a></li>\n                <li class=\"menu-item submenu-links\"><a href=\"/products.html\">Products</a></li>\n                <li class=\"menu-item\"><a href=\"/about.html\">About</a></li>\n                <li class=\"menu-item\"><a href=\"/contact.html\">Contact</a></li>\n                <li class=\"menu-item\"><a href=\"/login.html\">Login</a></li>\n                <li class=\"menu-item cart-item\">\n                    <a href=\"/cart.html\">\n                    <span class=\"js-cart-total-items\">1</span>\n                         <svg version=\"1.1\" class=\"svg cart\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 27\" style=\"enable-background:new 0 0 24 27; width: 24px; height: 20px;\" xml:space=\"preserve\"><g><path d=\"M0,6v21h24V6H0z M22,25H2V8h20V25z\"></path></g><g><path d=\"M12,2c3,0,3,2.3,3,4h2c0-2.8-1-6-5-6S7,3.2,7,6h2C9,4.3,9,2,12,2z\"></path></g></svg>\n                    </a></li>\n            </ul>\n        </nav>\n        <div class=\"hamburger\">\n            <div class=\"line1\"></div>\n            <div class=\"line2\"></div>\n            <div class=\"line3\"></div>\n        </div>\n       </div>";
    headerPlaceholder.insertAdjacentElement("afterend", header);
    headerPlaceholder.remove();
    _addToCart__WEBPACK_IMPORTED_MODULE_2__["default"].updateCartTotals();
    handleHamburger();
  });
}

function handleHamburger() {
  var hamburger = document.querySelector(".hamburger");
  var mainMenu = document.querySelector(".main-menu");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    mainMenu.classList.toggle("open");
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  renderHeader();
}

/***/ }),

/***/ "./assets/src/js/imports/helper.js":
/*!*****************************************!*\
  !*** ./assets/src/js/imports/helper.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function getQueryParam(key) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getQueryParam: getQueryParam
});

/***/ }),

/***/ "./assets/src/js/imports/login.js":
/*!****************************************!*\
  !*** ./assets/src/js/imports/login.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./assets/src/js/imports/api.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function handleLoginForm() {
  var loginForm = document.querySelector(".login-form");
  var inputUser = loginForm.querySelector(".user");
  var inputPassword = loginForm.querySelector(".password");
  loginForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    resetErrorMsg();
    var errors = {};

    if (inputUser.value.length < 1) {
      errors["user"] = "Username is empty";
    }

    if (inputPassword.value.length < 1) {
      errors["password"] = "Password is empty";
    }

    if (Object.keys(errors).length) {
      for (var error in errors) {
        var field = loginForm.querySelector(".".concat(error));
        var errorEl = document.createElement("p");
        errorEl.classList.add("msg-err");
        errorEl.innerHTML = errors[error];
        field.insertAdjacentElement("afterend", errorEl);
      }
    } else {
      var username = inputUser.value;
      var password = inputPassword.value;
      getTokenFromApi(username, password).then(function (resp) {
        if (resp.success) {
          window.location.assign("admin-panel.html");
        } else {
          loginForm.querySelector(".messages").innerHTML = "Invalid username or password, please try again";
        }
      });
    }
  });

  function resetErrorMsg() {
    var messages = loginForm.querySelectorAll(".msg-err");

    var _iterator = _createForOfIteratorHelper(messages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var msg = _step.value;
        msg.remove();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function onLoginPageLoad() {
  checkIsLoggedIn().then(function (resp) {
    if (typeof resp.loggedIn !== "undefined") {
      if (resp.loggedIn) {
        window.location.assign("/admin-panel.html");
      }
    }
  });
}

function checkIsLoggedIn() {
  if (localStorage.getItem("wp-token") === null) {
    return new Promise(function (resolve, reject) {
      resolve({
        loggedIn: false
      });
    });
  } else {
    var token = localStorage.getItem("wp-token");
    return fetch("https://decor-api.lukaswebdeveloper.com/wp-json/jwt-auth/v1/token/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ".concat(token)
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.data.status === 200) {
        return {
          loggedIn: true
        };
      }

      return {
        loggedIn: false
      };
    });
  }
}

function getTokenFromApi(username, password) {
  return fetch("https://decor-api.lukaswebdeveloper.com/wp-json/jwt-auth/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (typeof data.token !== "undefined") {
      window.localStorage.setItem("wp-token", data.token);
      return {
        success: true
      };
    } else {
      return {
        success: false
      };
    }
  });
}

function init() {
  if (!document.body.matches(".login-page")) {
    return;
  }

  onLoginPageLoad();
  handleLoginForm();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init: init,
  checkIsLoggedIn: checkIsLoggedIn
});

/***/ }),

/***/ "./assets/src/js/imports/productPage.js":
/*!**********************************************!*\
  !*** ./assets/src/js/imports/productPage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ "./assets/src/js/imports/helper.js");
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");



function loadProduct() {
  var productId = _helper__WEBPACK_IMPORTED_MODULE_0__["default"].getQueryParam("product-id");

  if (!productId) {
    window.location = "/";
    return;
  }

  var url = "https://decor-api.lukaswebdeveloper.com/wp-json/wp/v2/product/".concat(productId, "?_embed");
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (productData) {
    console.log(productData);
    var imgUrl = productData._embedded["wp:featuredmedia"][0].source_url;
    var image = new Image();
    image.src = imgUrl;
    document.querySelectorAll(".product-title").forEach(function (item) {
      item.innerHTML = productData.title.rendered;
    });
    document.querySelectorAll(".product-price").forEach(function (item) {
      item.innerHTML = "$" + productData.acf.price;
    });
    document.querySelectorAll(".js-add-to-cart").forEach(function (item) {
      item.dataset.productId = productData.id;
    });
    document.querySelector(".col-gallery").appendChild(image);
    document.querySelector(".product-summary").innerHTML = productData.content.rendered;
  });
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if (!document.body.matches(".product-page")) {
    return;
  }

  loadProduct();
}

/***/ }),

/***/ "./assets/src/js/imports/productsGrid.js":
/*!***********************************************!*\
  !*** ./assets/src/js/imports/productsGrid.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function render(config) {
  var container = config.container;
  var products = config.products;
  var grid = document.createElement("div");
  grid.classList.add("products-grid");
  grid.innerHTML = "\n         <div class=\"items-wrap\">\n         </div>\n    ";
  var itemsWrap = grid.querySelector(".items-wrap");

  var _iterator = _createForOfIteratorHelper(products),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var product = _step.value;
      var productUrl = "/product.html?product-id=".concat(product.id);
      var productEl = document.createElement("a");
      productEl.href = productUrl;
      productEl.classList.add("product-item");
      var title = product.title;
      var featuredImageUrl = product.featured_image_url;
      var price = product.acf.price;
      var featured = product.acf.featured;
      var productHtml = "\n            <figure class=\"img-wrap\">\n                 <img src=\"".concat(featuredImageUrl, "\" alt=\"").concat(title, "\">\n            </figure>\n            <div class=\"content-wrap\">\n                <div class=\"content-inner-wrap\">\n                    <h3 class=\"product-title\"><span class=\"overflow\">").concat(title, "</span></h3>\n                    <div class=\"price\"><span class=\"overflow\">$").concat(price, "</span></div>\n                </div>\n                 <div class=\"arrow-down\">\n                    <span class=\"overflow\"><img src=\"/assets/images/down-arrow.svg\" alt=\"arrow\"></span>\n                </div>\n            </div>\n        ");
      productEl.innerHTML = productHtml;

      if (featured) {
        var featuredDiv = document.createElement("div");
        featuredDiv.classList.add("featured");
        featuredDiv.innerHTML = "Featured";
        productEl.insertAdjacentElement("afterbegin", featuredDiv);
      }

      itemsWrap.appendChild(productEl);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  container.innerHTML = "";
  container.appendChild(grid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  render: render
});

/***/ }),

/***/ "./assets/src/js/imports/quantityWrap.js":
/*!***********************************************!*\
  !*** ./assets/src/js/imports/quantityWrap.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var wrap = document.querySelector(".quantity-wrap");

  if (!wrap) {
    return;
  }

  wrap.addEventListener("click", function (ev) {
    if (!ev.target.matches(".quantity-btn")) {
      return;
    }

    var type = ev.target.dataset.value;
    var currentValue = parseInt(wrap.querySelector(".quantity-input").value);

    if (type === "increase") {
      currentValue++;
    } else {
      if (currentValue === 1) {
        return;
      }

      currentValue--;
    }

    wrap.querySelector(".quantity-input").value = currentValue;
  });
}

/***/ }),

/***/ "./assets/src/js/imports/shopPage.js":
/*!*******************************************!*\
  !*** ./assets/src/js/imports/shopPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _productsGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsGrid */ "./assets/src/js/imports/productsGrid.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var container, url, paramsEncoded, searchInput, formSearch;
var defaultParamsObj = {
  "_embed": "",
  "per_page": 99
};

function onLoad() {
  loadProducts();
}

function loadProducts() {
  var paramsObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  container.innerHTML = "";
  container.classList.add("loading");
  var loader = document.createElement("div");
  loader.classList.add("loader");
  loader.innerHTML = "Loading...";
  container.appendChild(loader);
  url = new URL("https://decor-api.lukaswebdeveloper.com/wp-json/acf/v3/product");
  var searchParams;

  if (!paramsObj) {
    searchParams = defaultParamsObj;
  } else {
    searchParams = _objectSpread(_objectSpread({}, defaultParamsObj), paramsObj);
  }

  paramsEncoded = new URLSearchParams(searchParams);
  url.search = paramsEncoded;
  return fetch(url).then(function (res) {
    return res.json();
  }).then(function (data) {
    container.classList.remove("loading");
    _productsGrid__WEBPACK_IMPORTED_MODULE_0__["default"].render({
      container: container,
      products: data
    });
    console.log(data);
  });
}

function clearNotices(container) {
  var prevNotices = container.querySelectorAll(".notice");

  var _iterator = _createForOfIteratorHelper(prevNotices),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var preNotice = _step.value;
      preNotice.remove();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function showNotice(msg, container) {
  clearNotices(container);
  var notice = document.createElement("p");
  notice.classList.add("notice");
  notice.innerHTML = msg;
  container.insertAdjacentElement("beforeend", notice);
}

function handleSearch() {
  formSearch = document.querySelector(".js-form-search-products");
  searchInput = formSearch.querySelector(".search-input");
  formSearch.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var searchTerm = searchInput.value;

    if (!searchTerm) {
      showNotice("Please enter term", formSearch);
      return;
    }

    resetFilters();
    loadProducts({
      search: searchTerm
    }).then(function () {
      var activeSearchDiv = document.createElement("div");
      activeSearchDiv.classList.add("active-search");
      activeSearchDiv.innerHTML = "\n                    <p class=\"label\">Active search:</p>\n                    <button class=\"js-reset-search\">".concat(searchTerm, "<span class=\"close\">&times;</span></button>\n                    \n                ");
      formSearch.appendChild(activeSearchDiv);
    });
  });
}

function handleResetSearch() {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".js-reset-search") || event.target.closest(".js-reset-search")) {
      loadProducts().then(function () {
        resetFilters();
      });
    }
  });
}

function handleFilterCategories() {
  document.body.addEventListener("click", function (event) {
    if (event.target.matches(".category-link") || event.target.closest(".category-link")) {
      event.preventDefault();
      resetFilters();
      event.target.classList.add("active");
      var slug = event.target.dataset.slug;

      if (!slug) {
        return;
      }

      loadProducts({
        "filter[product_category]": slug
      });
    }
  });
}

function resetFilters() {
  clearNotices(formSearch);
  searchInput.value = "";
  var activeSearch = formSearch.querySelector(".active-search");

  if (activeSearch) {
    activeSearch.remove();
  }

  var categoryLinks = document.querySelectorAll(".category-link");

  var _iterator2 = _createForOfIteratorHelper(categoryLinks),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var link = _step2.value;
      link.classList.remove("active");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./assets/src/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports/header */ "./assets/src/js/imports/header.js");
/* harmony import */ var _imports_featureProductsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imports/featureProductsGrid */ "./assets/src/js/imports/featureProductsGrid.js");
/* harmony import */ var _imports_categories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imports/categories */ "./assets/src/js/imports/categories.js");
/* harmony import */ var _imports_shopPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imports/shopPage */ "./assets/src/js/imports/shopPage.js");
/* harmony import */ var _imports_productPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imports/productPage */ "./assets/src/js/imports/productPage.js");
/* harmony import */ var _imports_quantityWrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imports/quantityWrap */ "./assets/src/js/imports/quantityWrap.js");
/* harmony import */ var _imports_addToCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imports/addToCart */ "./assets/src/js/imports/addToCart.js");
/* harmony import */ var _imports_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imports/footer */ "./assets/src/js/imports/footer.js");
/* harmony import */ var _imports_cartPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imports/cartPage */ "./assets/src/js/imports/cartPage.js");
/* harmony import */ var _imports_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imports/login */ "./assets/src/js/imports/login.js");
/* harmony import */ var _imports_adminPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imports/adminPanel */ "./assets/src/js/imports/adminPanel.js");











window.addEventListener("DOMContentLoaded", function () {
  (0,_imports_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_imports_footer__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_imports_featureProductsGrid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_imports_categories__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_imports_shopPage__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_imports_productPage__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_imports_quantityWrap__WEBPACK_IMPORTED_MODULE_5__["default"])();
  _imports_addToCart__WEBPACK_IMPORTED_MODULE_6__["default"].init();
  (0,_imports_cartPage__WEBPACK_IMPORTED_MODULE_8__["default"])();
  _imports_login__WEBPACK_IMPORTED_MODULE_9__["default"].init();
  (0,_imports_adminPanel__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map