const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebarButton");
const sidebarIcon = document.getElementById("sidebarIcon");

const openIcon = "/img/hamburger.png";
const closeIcon = "/img/x.png";

function setSidebar(open) {
    sidebar.hidden = !open;
    sidebarButton.setAttribute("aria-expanded", open ? "true" : "false");
    sidebarButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    sidebarIcon.src = open ? closeIcon : openIcon;
}

sidebarButton.addEventListener("click", function () {
    const willOpen = sidebarButton.getAttribute("aria-expanded") !== "true";
    setSidebar(willOpen);
    if (willOpen) {
        const firstLink = sidebar.querySelector("a");
        if (firstLink) {
            firstLink.focus();
        }
    }
});

sidebar.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        setSidebar(false);
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && sidebarButton.getAttribute("aria-expanded") === "true") {
        setSidebar(false);
        sidebarButton.focus();
    }
});

document.addEventListener("click", function (event) {
    if (sidebar.hidden) {
        return;
    }
    if (sidebar.contains(event.target) || sidebarButton.contains(event.target)) {
        return;
    }
    setSidebar(false);
});

const digits = document.getElementById("hitDigits");
try {
    const storageKey = "b3rt1c-contador-local";
    const sessionKey = "b3rt1c-contador-sesion";
    let visits = Number(localStorage.getItem(storageKey) || "0");
    if (!Number.isFinite(visits) || visits < 0) {
        visits = 0;
    }
    if (!sessionStorage.getItem(sessionKey)) {
        visits += 1;
        localStorage.setItem(storageKey, String(visits));
        sessionStorage.setItem(sessionKey, "1");
    }
    digits.textContent = String(visits).padStart(6, "0");
} catch (error) {
    digits.textContent = "000000";
}
