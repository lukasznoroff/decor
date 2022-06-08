# Decor-Interior Semester Project


 ![Front-End Developer](https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-lukasznoroff/blob/main/javaScript-frameworks-ca.png)


---

I used WordPress as a backend, and the REST API integration to feed data into a React app.

The app have the following paths:

-   "/"
-   "/detail/:param"
-   "/contact"
-   "/login"
-   "/admin"

The administrator path is not displayed in the navigation.



### Home

This page displays an array of musical instruments, where each item is assigned the name of an instrument, price, category, etc.
Each result contains a link to a detail page, passing a parameter in the URL.

<!-- Find an API that returns at least:

-   an array of items
-   a single item retrieved by a parameter (id, name, slug, etc) -->

<!-- If you are using Next you can also hard-code json and return it from API routes created in `pages/api/*`.

You can use your own Wordpress or Strapi or any other API that you have created for these calls but it must be publically hosted - it must not be running on your localhost.

Display at least 2 properties from each result. -->

<!-- Each result should link to the detail page, passing a parameter in the URL. -->

### Detail

Here a parameter is taken from the URL and is used to call the API to retrieve one element.

<!-- Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item. -->

### Contact

Contact form with validation

<!-- Create a form with the following inputs and validation: -->

-   First name - required, minimum 3 characters
-   Last name - required, minimum 4 characters
-   Email - required, must be in a valid email format
-   Subject - required, this must be a select box with at least 2 options
-   Message - required, minimum 10 characters.

### Login

Login requires a user name and password.

<!-- Create a form with username/email and password fields. The inputs should have the necessary validation for a login form (not a registration form). -->

<!-- The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route. -->
The form makes a login request to the wordpress API with the JWT plugin installed . If the login is successful, redirect the user to the admin path.

If the login is unsuccessful display a message above the form.

### Admin

<!-- This page will simply display an "Admin" heading. -->
This page displays the header "Admin".


Each result on the home page has a button. Clicking this button switches the result to/from the favourites board.

The favourites page displays all the items currently in the favourites board.

### Login and Password
Login: kfaute

Password: ^pTIMi1gt(^6

<!-- ## Level 2

Add a favourite button/icon component to each result on your home page. Clicking this button will toggle the result in/out of a favourites array.

Add a "/favourites" path to your routes. This page will display all the items currently in the favourites array. -->

---
## Built With

- [React.js](https://reactjs.org/)
- [Wordpress](https://wordpress.org/)
- [Styled-Components](https://styled-components.com/)

---
## Getting Started

### Installing

1. Clone the repo:

```bash
https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-lukasznoroff
```

2. Install the dependencies:

```
npm install
```

### Running


To run the app, run the following command:

```bash
npm start
```

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
