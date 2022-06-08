# Decor-Interior Semester Project


 ![Front-End Developer](https://github.com/lukasznoroff/decor/blob/main/semester-project-2.jpeg)


---

This is a home furnishings e-commerce site that has both customer and admin sections. For my backend I chose WordPress whit Custom Post Type UI plugin, this allowed me to create the necessary fields for the products.


The app has the following pages:

### Home

A hero banner with an image uploaded to Wordpress. 
A list of featured products. On Wordpress, products can be marked as "featured". When a product is marked as "featured", it should be displayed on the home page. 

## Product page


A list of all products added to Wordpress. Each product includes a title, price, and image. Product is linked to its details page.
Search text box. During search only products which contain search text in title or description will be listed.


## Product details page
This page is accessed by clicking on the product on the product listing page. The product details page contains:

- title
- description
- image
- price
an "add to cart" button. This switches the product to and from the cart array stored in the local warehouse.

## Cart page
The shopping cart page displays a list of all products added to the cart. Products are saved in the local storage and displayed on the page. If the cart is empty, display a message indicating this.

Each product in the cart display:

- title
- price
- a link to the product view page
- image
after the list of products, display the total price of all the products in the cart.


### Detail

Here a parameter is taken from the URL and is used to call the API to retrieve one element.


## Admin section 

Is only available to logged in admin users and contains the following functions.

- Login/Logout
Admin login form, the user data is stored in the local storage
A form to login admin and store his data in local storage.

- Add/edit products
A form that allows the admin to add and edit products. The form allows the user to toggle whether a given product is highlighted.


### Login and Password
Login: dnmbwl

Password: ,hZdZKBW7ql4

---
## Built With

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SASS](https://sass-lang.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Wordpress](https://wordpress.org/)


---
## Getting Started

### Installing

1. Clone the repo:

```bash
https://github.com/lukasznoroff/decor.git
```

2. Install the dependencies:

```
npm install
```

### Running


To run the app, run the following command:

```bash
npm run start
```

## Contact


[My Twitter page](www.twitter.com)

[My LinkedIn page](https://www.linkedin.com/feed/)


<!-- ## Goal
To create an e-commerce website that has both customer-facing and admin sections. Both sections should be responsive and the website will be populated by a Strapi API supplied by Noroff.

## Brief
You are to build an e-commerce website. You can choose the theme of your website. It should follow the site architecture described below.

Design your website using your favourite tool. You will need to find a suitable logo. If you decide to create a logo yourself, do not spend too much time on it.

You must apply all that you have learned in your studies so far. The site must have a good user experience and UI design, following today’s trends and design patterns.

Build a frontend with home, product list, product detail and cart pages.

Build admin pages to create, update and delete products.

The website must be responsive on all devices.

Building a checkout and payment system is not a part of the project.

Level 1 is required.

Level 2 is optional.

## Home page
The home page must include:

A hero banner with an image that is uploaded to Strapi. You can find this in the Home single type in the provided Strapi project.
A list of featured products. On Strapi products can be marked as ‘featured’. When a product is marked as ‘featured’ it should be displayed on the homepage. You can find the products in the Products collection type.
Products page
The products page must include:

A list of all products added to Strapi. Each product must display its title, price and image. The product should link to its products detail page.
A search text box. When searching (filtering), only the products that include the searched text in their title or description should be listed.
Product details page
This page is reached by a user clicking on a product on the product list page. The product details page must include:

title
description
image
price
an add to cart button. This will toggle the product in and out of a cart array stored in local storage.
Cart/Basket page
The cart/basket page must display a list of all products added to the cart. Load the items that have been added to local storage and display them on the page. If the cart is empty display a message indicating this.

Each product in the cart must display:

title
price
a link to the product view page
image
After the list of products, display the total price of all the products in the cart.

Note: the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section
The admin section (apart from the log in form) must only be accessible to logged in admin users and must include the following features.

## Login/Logout
Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.

When logged in, display a logout button in the layout that logs the user out. Logging out should not clear the cart.

## Add/edit products
Create form(s) that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.

## Product images
For adding/editing product images use either of these 2 methods:

Use a file upload field to upload images to Strapi, or
Use a text input that allows a URL to be entered. This allows an image from an external URL to be used as the product image.
You can find the fields for each in Strapi. Use only one to display a product image. Delete existing product

Allow products to be deleted. Before a product is deleted you must display a confirmation dialog. The product should only be deleted if the user confirms.

## Level 2 (optional)
Create your own API for the site. You can use any backend stack (e.g. Strapi, Wordpress REST API, Firebase, etc) but it MUST be publicly hosted on a server.

The API must include all the functionality in the provided Strapi API and you can add any additional functionality.

It MUST be publicly hosted and accessible, you cannot submit a custom API with your frontend code.
 -->
