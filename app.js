/* ==========================================================================
   Web Components: <tech-pill> y <tech-stack>
   Ecosistema declarativo y reutilizable para badges de tecnologías.
   ========================================================================== */

const TECH_REGISTRY = {
    // Lenguajes
    "javascript": { label: "JavaScript", icon: "/img/icons/javascript.svg" },
    "js": { label: "JavaScript", icon: "/img/icons/javascript.svg" },
    "typescript": { label: "TypeScript", icon: "/img/typescriptLogo.png" },
    "ts": { label: "TypeScript", icon: "/img/typescriptLogo.png" },
    "python": { label: "Python", icon: "/img/icons/python.svg" },
    "java": { label: "Java", icon: "/img/javaLogo.png" },
    "lua": { label: "Lua", icon: "/img/luaLogo.png" },
    "sql": { label: "SQL", icon: "/img/mysqlLogo.png" },
    "mysql": { label: "MySQL", icon: "/img/mysqlLogo.png" },
    "html": { label: "HTML", icon: "/img/htmlLogo.svg" },
    "css": { label: "CSS", icon: "/img/cssLogo.svg" },

    // Frontend & Backend Frameworks
    "angular": { label: "Angular", icon: "/img/angularLogo.png" },
    "angular material": { label: "Angular Material", icon: "/img/angularLogo.png" },
    "spring": { label: "Spring Boot", icon: "/img/springLogo.png" },
    "spring boot": { label: "Spring Boot", icon: "/img/springLogo.png" },
    "fastapi": { label: "FastAPI", icon: "/img/icons/fastapi.svg" },

    // QA & Testing
    "playwright": { label: "Playwright", icon: "/img/icons/playwright.svg" },
    "karate": { label: "Karate", icon: "/img/icons/karate.svg" },
    "cucumber": { label: "Cucumber", icon: "/img/icons/cucumber.svg" },
    "gherkin": { label: "Gherkin", icon: "/img/icons/gherkin.svg" },
    "postman": { label: "Postman", icon: "/img/icons/postman.svg" },
    "swagger": { label: "Swagger", icon: "/img/icons/swagger.svg" },
    "pytest": { label: "Pytest", icon: "/img/icons/pytest.svg" },
    "xray": { label: "Xray", icon: "/img/icons/xray.svg" },
    "testrail": { label: "TestRail", icon: "/img/icons/testrail.svg" },

    // Herramientas, Cloud & DevOps
    "git": { label: "Git", icon: "/img/gitLogo.svg" },
    "github": { label: "GitHub", icon: "/img/githubLogo.svg" },
    "docker": { label: "Docker", icon: "/img/dockerLogo.png" },
    "maven": { label: "Maven", icon: "/img/mavenLogo.png" },
    "jenkins": { label: "Jenkins", icon: "/img/icons/jenkins.svg" },
    "jira": { label: "Jira", icon: "/img/icons/jira.svg" },
    "confluence": { label: "Confluence", icon: "/img/icons/confluence.svg" },
    "slack": { label: "Slack", icon: "/img/icons/slack.svg" },
    "android": { label: "Android", icon: "/img/icons/android.svg" },
    "ios": { label: "iOS", icon: "/img/icons/apple.svg" },
    "apple": { label: "iOS", icon: "/img/icons/apple.svg" },
    "postgresql": { label: "PostgreSQL", icon: "/img/postgresqlLogo.png" },
    "postgres": { label: "PostgreSQL", icon: "/img/postgresqlLogo.png" },
    "mongodb": { label: "MongoDB", icon: "/img/mongodbLogo.svg" },
    "sqlite": { label: "SQLite", icon: "/img/icons/sqlite.svg" },
    "sqlmodel": { label: "SQLModel", icon: "/img/icons/sqlite.svg" },
    "sqlite / sqlmodel": { label: "SQLite / SQLModel", icon: "/img/icons/sqlite.svg" },
    "oracle": { label: "Oracle", icon: "/img/icons/oracle.svg" },
    "vscode": { label: "VS Code", icon: "/img/vsCodeLogo.svg" },
    "vs code": { label: "VS Code", icon: "/img/vsCodeLogo.svg" },
    "intellij": { label: "IntelliJ", icon: "/img/intellijLogo.svg" },
    "eclipse": { label: "Eclipse", icon: "/img/eclipseLogo.svg" },
    "linux": { label: "Linux", icon: "/img/peguinDance.gif" },
    "vim": { label: "Vim", icon: "/img/vimLogo.png" },
    "vanilla js (pwa)": { label: "Vanilla JS (PWA)", icon: "/img/icons/javascript.svg" },
    "vanilla js": { label: "Vanilla JS", icon: "/img/icons/javascript.svg" }
};

if (typeof window !== "undefined") {
    window.TECH_REGISTRY = TECH_REGISTRY;
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function resolveTech(raw) {
    if (!raw || typeof raw !== "string") return null;
    const trimmed = raw.trim();
    if (!trimmed) return null;

    const lower = trimmed.toLowerCase();
    if (TECH_REGISTRY[lower]) {
        return {
            name: trimmed,
            icon: TECH_REGISTRY[lower].icon || null
        };
    }

    // Coincidencia por palabra clave más larga primero (ej. "spring boot" antes de "spring")
    const keys = Object.keys(TECH_REGISTRY).sort(function (a, b) {
        return b.length - a.length;
    });
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp("(?:^|[^a-z0-9])" + escaped + "(?:$|[^a-z0-9])", "i");
        if (regex.test(lower)) {
            return {
                name: trimmed,
                icon: TECH_REGISTRY[key].icon || null
            };
        }
    }

    return {
        name: trimmed,
        icon: null
    };
}

class TechPill extends HTMLElement {
    static get observedAttributes() {
        return ["name", "icon"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const rawName = this.getAttribute("name") || this.textContent.trim();
        if (!rawName) return;

        const resolved = resolveTech(rawName);
        const iconSrc = this.getAttribute("icon") || (resolved ? resolved.icon : null);
        const displayName = this.getAttribute("name") || (resolved ? resolved.name : rawName);

        this.classList.add("tech-pill");
        this.innerHTML = `${iconSrc ? `<img src="${encodeURI(iconSrc)}" width="16" height="16" alt="" loading="lazy">` : ""}<span>${escapeHtml(displayName)}</span>`;
    }
}

class TechStack extends HTMLElement {
    static get observedAttributes() {
        return ["items", "label"];
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const rawItems = this.getAttribute("items");
        const label = this.getAttribute("label") || "Tecnologías:";

        let items = [];
        if (rawItems) {
            items = rawItems.split(",").map(function (s) { return s.trim(); }).filter(Boolean);
        } else {
            if (this.querySelector("tech-pill")) return;
        }

        this.classList.add("tech-stack-container");
        this.innerHTML = `
            <div class="tech-stack-label">${escapeHtml(label)}</div>
            <div class="tech-stack-badges">
                ${items.map(function (item) {
                    return `<tech-pill name="${escapeHtml(item)}"></tech-pill>`;
                }).join("")}
            </div>
        `;
    }
}

if (typeof customElements !== "undefined") {
    if (!customElements.get("tech-pill")) {
        customElements.define("tech-pill", TechPill);
    }
    if (!customElements.get("tech-stack")) {
        customElements.define("tech-stack", TechStack);
    }
}

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
if (digits) {
    const renderVisits = function (count) {
        const safe = Number.isFinite(count) && count >= 0 ? Math.floor(count) : 0;
        digits.textContent = String(safe).padStart(6, "0");
    };

    const runLocalFallback = function () {
        try {
            const storageKey = "b3rt1c-contador-local";
            const sessionKey = "b3rt1c-contador-sesion";
            let visits = Number(localStorage.getItem(storageKey) || "0");
            if (!Number.isFinite(visits) || visits < 0) {
                visits = 0;
            }
            if (!sessionStorage.getItem(sessionKey) || visits === 0) {
                visits += 1;
                localStorage.setItem(storageKey, String(visits));
                sessionStorage.setItem(sessionKey, "1");
            }
            renderVisits(visits);
        } catch (error) {
            renderVisits(0);
        }
    };

    const globalSessionKey = "b3rt1c-contador-global-sesion";
    let alreadyCounted = false;
    try {
        alreadyCounted = Boolean(sessionStorage.getItem(globalSessionKey));
    } catch (error) {
        alreadyCounted = false;
    }

    if ("fetch" in window) {
        fetch("/api/visits", {
            method: alreadyCounted ? "GET" : "POST",
            cache: "no-store"
        })
            .then(function (res) {
                if (!res.ok) {
                    throw new Error("visits-api");
                }
                return res.json();
            })
            .then(function (data) {
                if (!data || typeof data.visits !== "number") {
                    throw new Error("visits-invalid");
                }
                if (!alreadyCounted) {
                    try {
                        sessionStorage.setItem(globalSessionKey, "1");
                    } catch (error) {}
                }
                renderVisits(data.visits);
            })
            .catch(function () {
                runLocalFallback();
            });
    } else {
        runLocalFallback();
    }
}

const webring = document.querySelector("[data-webring-site]");
if (webring && "fetch" in window) {
    const currentId = webring.getAttribute("data-webring-site");
    fetch("/webring.json")
        .then(function (res) {
            if (!res.ok) {
                throw new Error("webring");
            }
            return res.json();
        })
        .then(function (sites) {
            if (!Array.isArray(sites) || sites.length < 2) {
                return;
            }
            const idx = sites.findIndex(function (s) {
                return s.id === currentId;
            });
            if (idx === -1) {
                return;
            }
            const prev = sites[(idx - 1 + sites.length) % sites.length];
            const next = sites[(idx + 1) % sites.length];
            const prevLink = webring.querySelector('[data-webring="prev"]');
            const nextLink = webring.querySelector('[data-webring="next"]');
            if (prevLink && prev) {
                prevLink.href = prev.url;
                prevLink.textContent = "← " + prev.name;
            }
            if (nextLink && next) {
                nextLink.href = next.url;
                nextLink.textContent = next.name + " →";
            }
        })
        .catch(function () {});
}

/* ==========================================================================
   Ticker interactivo: Auto-scroll continuo + Grab & Drag para deslizar
   ========================================================================== */
(function initTicker() {
    const ticker = document.querySelector(".ticker");
    const track = document.querySelector(".ticker-track");
    if (!ticker || !track) return;

    // Duplicar spans suficientes (al menos 4) para asegurar cobertura continua en cualquier pantalla
    const originalSpans = Array.from(track.querySelectorAll("span"));
    if (originalSpans.length > 0) {
        while (track.querySelectorAll("span").length < 4) {
            originalSpans.forEach(function (s) {
                track.appendChild(s.cloneNode(true));
            });
        }
    }

    // El control pasa al bucle RAF para permitir arrastre fluido y continuo
    track.style.animation = "none";

    let offset = 0;
    let lastTime = performance.now();
    const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baseSpeed = prefersReducedMotion ? 0 : 45; // px por segundo

    let isDragging = false;
    let startX = 0;
    let dragStartOffset = 0;
    let velocity = 0;
    let lastDragX = 0;
    let lastDragTime = 0;

    function getSpanWidth() {
        const first = track.querySelector("span");
        return first ? first.offsetWidth : 1000;
    }

    function wrapOffset(val, spanWidth) {
        if (spanWidth <= 0) return val;
        while (val <= -spanWidth) val += spanWidth;
        while (val > 0) val -= spanWidth;
        return val;
    }

    function tick(now) {
        const dt = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        if (!isDragging) {
            if (Math.abs(velocity) > 0.5) {
                offset += velocity * dt;
                velocity *= Math.exp(-4 * dt); // fricción suave de inercia
            } else {
                velocity = 0;
                offset -= baseSpeed * dt;
            }
            const spanW = getSpanWidth();
            offset = wrapOffset(offset, spanW);
            track.style.transform = `translateX(${offset}px)`;
        }

        requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    ticker.addEventListener("pointerdown", function (e) {
        isDragging = true;
        startX = e.clientX;
        dragStartOffset = offset;
        lastDragX = e.clientX;
        lastDragTime = performance.now();
        velocity = 0;
        ticker.classList.add("is-dragging");
        try {
            ticker.setPointerCapture(e.pointerId);
        } catch (err) {}
    });

    ticker.addEventListener("pointermove", function (e) {
        if (!isDragging) return;
        const now = performance.now();
        const dt = (now - lastDragTime) / 1000;
        if (dt > 0.008) {
            velocity = (e.clientX - lastDragX) / dt;
            lastDragX = e.clientX;
            lastDragTime = now;
        }

        const dx = e.clientX - startX;
        const spanW = getSpanWidth();
        offset = wrapOffset(dragStartOffset + dx, spanW);
        track.style.transform = `translateX(${offset}px)`;
    });

    function endDrag(e) {
        if (!isDragging) return;
        isDragging = false;
        ticker.classList.remove("is-dragging");
        try {
            ticker.releasePointerCapture(e.pointerId);
        } catch (err) {}
    }

    ticker.addEventListener("pointerup", endDrag);
    ticker.addEventListener("pointercancel", endDrag);

    // Soporte para rueda de ratón / trackpad horizontal
    ticker.addEventListener("wheel", function (e) {
        const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const spanW = getSpanWidth();
        offset = wrapOffset(offset - delta * 0.8, spanW);
        track.style.transform = `translateX(${offset}px)`;
        e.preventDefault();
    }, { passive: false });
})();
