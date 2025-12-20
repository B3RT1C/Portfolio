let sidebar = document.getElementById("sidebar")
let sidebarButton = document.getElementById("sidebarButton")

const openSidebarIcon = "/img/hamburger.png"
const closeSidebarIcon = "/img/x.png"

sidebar.style.display = "none"

function toggleSidebar() {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "flex"
        sidebarButton.setAttribute("src", closeSidebarIcon)
    } else {
        sidebar.style.display = "none"
        sidebarButton.setAttribute("src", openSidebarIcon)
    }
}