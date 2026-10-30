const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebarButton");

function setSidebar(open) {
    sidebar.hidden = !open;
    sidebarButton.setAttribute("aria-expanded", open ? "true" : "false");
    sidebarButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    sidebarButton.textContent = open ? "Cerrar" : "Menú";
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

document.querySelectorAll("#sidebar a").forEach(function (link) {
    link.addEventListener("click", function () {
        setSidebar(false);
    });
});

document.querySelectorAll("[data-nav]").forEach(function (link) {
    link.addEventListener("click", function () {
        setCurrent(link.getAttribute("data-nav"));
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

const sections = document.querySelectorAll("main section[id]");
const ratios = new Map();

function setCurrent(id) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
        if (id && link.getAttribute("data-nav") === id) {
            link.setAttribute("aria-current", "true");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}

if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let bestId = null;
        let best = 0;
        ratios.forEach(function (ratio, id) {
            if (ratio > best) {
                best = ratio;
                bestId = id;
            }
        });
        setCurrent(bestId && bestId !== "top" ? bestId : null);
    }, {
        rootMargin: "-12% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7]
    });
    sections.forEach(function (section) {
        observer.observe(section);
    });
}

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
