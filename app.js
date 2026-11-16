const translations = {
    es: {
        documentTitle: "Alberto Pérez Navarro | CV Web",
        menuButton: "Menu",
        navExperience: "Experiencia",
        navSkills: "Habilidades",
        navEducation: "Educación",
        navContact: "Contacto",
        navCvEs: "CV ES",
        navCvEn: "CV EN",
        heroEyebrow: "CV Web / QA Automation / Software",
        heroTitle: "SDET · Consultor de Automatización y Tester QA",
        heroText: "Combino base técnica en desarrollo de software con consultoría QA, automatización de pruebas, APIs, microservicios y CI/CD.",
        heroPrimaryAction: "Ver experiencia",
        heroCvEs: "Descargar CV ES",
        heroCvEn: "Download CV EN",
        profileTitle: "Perfil",
        profileParagraph: "SDET y Consultor de Automatización y Tester QA con base técnica en desarrollo de software. En itegGO Consulting diseño frameworks de automatización, conecto QA, desarrollo y arquitectura, e integro pruebas en pipelines CI/CD priorizando criticidad de negocio.",
        experienceTitle: "Experiencia",
        iteggoRole: "Consultor de Automatización y Tester QA",
        iteggoDate: "Enero 2026 - Actual",
        iteggoSummary: "Consultor de automatización y tester QA en itegGO Consulting, firma especializada en testing, ciberseguridad y gobierno IT. Aplico base técnica de desarrollo para diseñar e implementar estrategias de calidad y automatización en proyectos de clientes.",
        iteggoBullet1: "Diseñar y mantener frameworks de automatización backend con Karate y UI con Playwright.",
        iteggoBullet2: "Ejecutar pruebas de APIs y microservicios con Postman, Swagger y scripts personalizados.",
        iteggoBullet3: "Integrar pipelines CI/CD para ejecución continua de tests automatizados.",
        iteggoBullet4: "Aportar visión QA en reuniones de arquitectura y definir estrategias de testing por criticidad de negocio.",
        iteggoBullet5: "Trabajar con metodologías Agile, Jira y Confluence en entornos de consultoría.",
        devdelRole: "Desarrollador Full-Stack Junior",
        devdelDate: "Marzo 2025 - Julio 2025",
        devdelBullet1: "Desarrollé funcionalidades full-stack con Angular, Angular Material y Java Spring para una aplicación web del sector asegurador.",
        devdelBullet2: "Implementé interfaces responsivas, endpoints RESTful, lógica de negocio, validaciones y manejo de errores.",
        devdelBullet3: "Participé en ceremonias ágiles, code reviews y gestión de tareas con Git y Holded.",
        devdelStack: "Stack: Angular, Angular Material, TypeScript, Java, Spring Boot, RESTful APIs, Git, Holded.",
        skillsTitle: "Habilidades técnicas",
        backendTitle: "Backend",
        frontendTitle: "Frontend",
        toolsTitle: "Herramientas",
        educationTitle: "Educación e idiomas",
        educationDegree: "Desarrollo de Aplicaciones Multiplataforma",
        educationDate: "2023 - 2025 · España",
        languageTitle: "Idiomas",
        languageSpanish: "Español: nativo",
        languageEnglish: "Inglés: B2 (Cambridge Certificate)",
        contactTitle: "Contacto",
        contactLocation: "Valdemoro, España",
        footerText: "Hecho con HTML, CSS, JavaScript y un poco de nostalgia por Internet."
    },
    en: {
        documentTitle: "Alberto Pérez Navarro | Web CV",
        menuButton: "Menu",
        navExperience: "Experience",
        navSkills: "Skills",
        navEducation: "Education",
        navContact: "Contact",
        navCvEs: "CV ES",
        navCvEn: "CV EN",
        heroEyebrow: "Web CV / QA Automation / Software",
        heroTitle: "SDET · Automation Consultant & QA Tester",
        heroText: "I combine a technical background in software development with QA consulting, test automation, APIs, microservices, and CI/CD.",
        heroPrimaryAction: "View experience",
        heroCvEs: "Download CV ES",
        heroCvEn: "Download CV EN",
        profileTitle: "Profile",
        profileParagraph: "SDET and Automation Consultant & QA Tester with a technical background in software development. At itegGO Consulting, I design automation frameworks, bridge QA, development, and architecture, and integrate testing into CI/CD pipelines while prioritizing tests by business impact.",
        experienceTitle: "Work Experience",
        iteggoRole: "Automation Consultant & QA Tester",
        iteggoDate: "January 2026 - Current",
        iteggoSummary: "Automation consultant and QA tester at itegGO Consulting, a firm specialized in testing, cybersecurity, and IT governance. I apply a software development background to design and implement quality and automation strategies for client projects.",
        iteggoBullet1: "Design and maintain backend automation frameworks with Karate and UI frameworks with Playwright.",
        iteggoBullet2: "Execute API and microservices testing with Postman, Swagger, and custom scripts.",
        iteggoBullet3: "Integrate CI/CD pipelines for continuous execution of automated tests.",
        iteggoBullet4: "Bring the QA perspective to architecture meetings and define testing strategies by business impact.",
        iteggoBullet5: "Work with Agile methodologies, Jira, and Confluence in consulting environments.",
        devdelRole: "Junior Full-Stack Developer",
        devdelDate: "March 2025 - July 2025",
        devdelBullet1: "Developed full-stack features with Angular, Angular Material, and Java Spring for an insurance-sector web application.",
        devdelBullet2: "Implemented responsive interfaces, RESTful endpoints, business logic, validations, and error handling.",
        devdelBullet3: "Participated in agile ceremonies, code reviews, and task management with Git and Holded.",
        devdelStack: "Stack: Angular, Angular Material, TypeScript, Java, Spring Boot, RESTful APIs, Git, Holded.",
        skillsTitle: "Technical Skills",
        backendTitle: "Backend",
        frontendTitle: "Frontend",
        toolsTitle: "Tools",
        educationTitle: "Education & Languages",
        educationDegree: "Cross-Platform Application Development",
        educationDate: "2023 - 2025 · Spain",
        languageTitle: "Languages",
        languageSpanish: "Spanish: native",
        languageEnglish: "English: B2 (Cambridge Certificate)",
        contactTitle: "Contact",
        contactLocation: "Valdemoro, Spain",
        footerText: "Built with HTML, CSS, JavaScript, and a little nostalgia for the old Internet."
    }
}

const menuButton = document.getElementById("menuButton")
const navLinks = document.getElementById("navLinks")
const languageToggle = document.getElementById("languageToggle")
let currentLanguage = localStorage.getItem("language") || "es"

function setLanguage(language) {
    currentLanguage = translations[language] ? language : "es"
    localStorage.setItem("language", currentLanguage)
    document.documentElement.lang = currentLanguage
    document.title = translations[currentLanguage].documentTitle

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n
        const translatedText = translations[currentLanguage][key]

        if (translatedText) {
            element.textContent = translatedText
        }
    })

    languageToggle.textContent = currentLanguage === "es" ? "EN" : "ES"
    languageToggle.setAttribute(
        "aria-label",
        currentLanguage === "es" ? "Switch to English" : "Cambiar a español"
    )
}

function toggleMenu() {
    const isOpen = navLinks.classList.toggle("isOpen")
    menuButton.setAttribute("aria-expanded", String(isOpen))
}

menuButton.addEventListener("click", toggleMenu)

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("isOpen")
        menuButton.setAttribute("aria-expanded", "false")
    })
})

languageToggle.addEventListener("click", () => {
    setLanguage(currentLanguage === "es" ? "en" : "es")
})

setLanguage(currentLanguage)