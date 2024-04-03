document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    if (typeof logo !== "undefined") {
        var logoElement = document.createElement("a");
        if (typeof logo.type === "undefined" && typeof logo.content !== "undefined") {
            if (logo.type === "image") {
                var logoImage = document.createElement("img");
                logoImage.classList.add("logo-img");
                logoImage.src = logo.content;
                logoImage.alt = "Logo";
                logoElement.appendChild(logoImage);
            } else if (logo.type === "text") {
                logoElement.textContent = logo.content;
            }
        }
        if (typeof logo.link !== "undefined") {
            logoElement.href = logo.link;
        }
        logoElement.classList.add("logo");
        header.appendChild(logoElement);
    }

    var menuIcon = document.createElement("div");
    menuIcon.classList.add("bx", "bx-menu");
    menuIcon.id = "menu-icon";
    header.appendChild(menuIcon);

    var navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    var activeNav = document.createElement("span");
    activeNav.classList.add("active-nav");

    if (typeof db_header !== "undefined") {
        db_header.forEach(function (link) {
            if (typeof link.text !== "undefined" && typeof link.url !== "undefined") {
                var navItem = document.createElement("a");
                navItem.href = link.url;
                navItem.textContent = link.text;
                if (link.text === document.body.dataset.active) {
                    navItem.classList.add("active");
                    navItem.href = "#";
                }
                navbar.appendChild(navItem);
            }
        });
    }
    header.appendChild(navbar);
    header.appendChild(activeNav);

    menuIcon = document.getElementById("menu-icon");
    navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    };
});