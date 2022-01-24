import api from "./api";

function handleLoginForm() {
    const loginForm = document.querySelector(".login-form");
    const inputUser = loginForm.querySelector(".user");
    const inputPassword = loginForm.querySelector(".password");
    loginForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        resetErrorMsg();
        const errors = {};
        if (inputUser.value.length < 1) {
            errors["user"] = "Username is empty";
        }

        if (inputPassword.value.length < 1) {
            errors["password"] = "Password is empty";
        }

        if (Object.keys(errors).length) {
            for (let error in errors) {
                const field = loginForm.querySelector(`.${error}`);
                const errorEl = document.createElement("p");
                errorEl.classList.add("msg-err");
                errorEl.innerHTML = errors[error];
                field.insertAdjacentElement("afterend", errorEl);
            }
        } else {
            const username = inputUser.value;
            const password = inputPassword.value;
            getTokenFromApi(username, password).then(resp => {
                if (resp.success) {
                    window.location.assign("admin-panel.html");
                } else {
                    loginForm.querySelector(".messages").innerHTML = "Invalid username or password, please try again";
                }
            })
        }
    });

    function resetErrorMsg() {
        const messages = loginForm.querySelectorAll(".msg-err");

        for (let msg of messages) {
            msg.remove();
        }
    }
}

function onLoginPageLoad() {
    checkIsLoggedIn().then(resp => {
        if (typeof resp.loggedIn !== "undefined") {
            if (resp.loggedIn) {
                window.location.assign("/admin-panel.html");
            }
        }
    })
}


function checkIsLoggedIn() {
    if (localStorage.getItem("wp-token") === null) {
        return new Promise(function (resolve, reject) {
            resolve({
                loggedIn: false
            });
        })

    } else {
        const token = localStorage.getItem("wp-token");
        return fetch("https://decor-api.lukaswebdeveloper.com/wp-json/jwt-auth/v1/token/validate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                if (data.data.status === 200) {
                    return {
                        loggedIn: true
                    }
                }

                return {
                    loggedIn: false
                };
            })
    }
}


function getTokenFromApi(username, password) {
    return fetch(`https://decor-api.lukaswebdeveloper.com/wp-json/jwt-auth/v1/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (typeof data.token !== "undefined") {
                window.localStorage.setItem("wp-token", data.token);
                return {
                    success: true
                }
            } else {
                return {
                    success: false
                }
            }
        })
}


function init() {
    if (!document.body.matches(".login-page")) {
        return;
    }
    onLoginPageLoad()
    handleLoginForm();
}

export default {
    init,
    checkIsLoggedIn
}