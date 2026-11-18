# Portfolio — Alberto Pérez Navarro (b3rt1c)

[![Live Site](https://img.shields.io/badge/website-b3rt1c.net-blue?style=flat-square&logo=googlechrome&logoColor=white)](https://b3rt1c.net)
[![Role](https://img.shields.io/badge/role-QA%20Automation%20%2F%20SDET-success?style=flat-square)](https://www.linkedin.com/in/albertopn)
[![Tech Stack](https://img.shields.io/badge/tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-orange?style=flat-square)](https://b3rt1c.net)
[![Design](https://img.shields.io/badge/design-Retro%20Win95-informational?style=flat-square)](https://b3rt1c.net)

> Portfolio personal de **Alberto Pérez Navarro**, QA Automation Engineer / SDET en Valdemoro.  
> Diseñado con una estética retro inspirada en los escritorios clásicos (Windows 95) y la web artesanal de finales de los 90, pero construido con estándares web modernos, accesibilidad, tipografías autoalojadas y cero dependencias de runtime.

🌐 **Sitio web en producción:** [https://b3rt1c.net](https://b3rt1c.net)

---

## 💻 Sobre el Proyecto

El sitio está concebido como una carta de presentación interactiva que refleja mi perfil técnico y pasión por el software de calidad, combinando rigor técnico con una estética nostálgica:

- 🪟 **Estética retro auténtica:** Barra de tareas inferior biselada estilo Windows 95, menú desplegable, ticker marquee animado, botones 88×31 coleccionables y cursores pixelados.
- ⚡ **Rendimiento extremo:** Cero frameworks pesados. HTML semántico, CSS nativo con variables de diseño (`tokens`) y JavaScript moderno (ES6+).
- 🔒 **Privacidad total:** Sin cookies de seguimiento ni llamadas a CDNs de terceros; todas las fuentes (VT323, Comic Neue) e iconos SVG están autoalojados.
- 📱 **Diseño responsive:** Experiencia fluida tanto en monitores de escritorio como en tablets y smartphones.

---

## 🛠️ Stack y Herramientas Destacadas

### Perfil Profesional (QA Automation / SDET)
- **Automatización de pruebas:** Playwright, Karate Framework, Cucumber (BDD), Postman / Newman.
- **Desarrollo y backend:** Java, Spring Boot, TypeScript, JavaScript, Python.
- **Bases de datos:** Oracle DB, PostgreSQL, MySQL.
- **Gestión, CI/CD y trazabilidad:** Jira, Xray, TestRail, Jenkins, Git / GitHub Actions.

### Desarrollo de este Sitio Web
- **Frontend:** HTML5 semántico, CSS3 (Flexbox & Grid), JavaScript vanilla.
- **Tipografías:** VT323 y Comic Neue (formato WOFF2 optimizado).
- **Despliegue y hosting:** Cloudflare Pages con reglas de caché y cabeceras de seguridad (`_headers`).

---

## 📂 Estructura del Repositorio

```text
Portfolio/
├── index.html              # Marcado semántico, accesibilidad y contenido principal
├── main.css                # Estilos visuales, variables CSS, animaciones y responsive
├── app.js                  # Lógica del cliente (menú móvil, ticker, interactividad)
├── AlbertoPerezCV.pdf      # Currículum Vitae descargable en PDF
├── webring.json            # Configuración del webring de proyectos personales
├── _headers                # Cabeceras HTTP de seguridad y caché para Cloudflare Pages
├── THIRD-PARTY-NOTICES.txt # Licencias y atribuciones de tipografías y recursos gráficos
├── fonts/                  # Tipografías WOFF2 autoalojadas (VT323, Comic Neue)
└── img/                    # Gráficos retro, iconos SVG, logos y GIFs animados
    └── icons/              # SVGs de tecnologías (Playwright, Karate, Jira, Oracle...)
```

---

## 🚀 Ejecución en Local

No se requiere ningún paso de compilación ni instalación de paquetes:

```bash
# 1. Clonar el repositorio
git clone https://github.com/B3RT1C/Portfolio.git
cd Portfolio

# 2. Servir con cualquier servidor estático (ejemplos):
# Con Python:
python -m http.server 8080

# O con Node.js / npx:
npx serve .
```

Abre en tu navegador `http://localhost:8080`.

---

## 📬 Contacto

- **Web:** [b3rt1c.net](https://b3rt1c.net)
- **LinkedIn:** [linkedin.com/in/albertopn](https://www.linkedin.com/in/albertopn)
- **GitHub:** [@B3RT1C](https://github.com/B3RT1C)
- **Email:** [albertopn31@gmail.com](mailto:albertopn31@gmail.com)
