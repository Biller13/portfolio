/* Sidebar 1 RIGHT (ABOUT) */
const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
    function openSideBar() {
        document.getElementById("mysidebar").style.width = "100%";
        document.getElementById("mysidebar").style.boxShadow = "0 0 1000px 1000px rgba(0, 0, 0, 0.50)";
        
        document.getElementById("close-read_more-btn").style.position = "fixed";
        document.getElementById("blocking").style.display = "block";
    }
} else {
    function openSideBar() {
        document.getElementById("mysidebar").style.width = "50%";
        document.getElementById("mysidebar").style.boxShadow = "0 0 1000px 1000px rgba(0, 0, 0, 0.50)";
        
        document.getElementById("blocking").style.display = "block";
    }
}

function closeSideBar() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("mysidebar").style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.25)";

    document.getElementById("close-read_more-btn").style.position = "absolute";
    document.getElementById("blocking").style.display = "none";
}

/* Blocking dark bg --still buggy, need fix-- */
document.getElementById("blocking").onclick = function()
{
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("mysidebar").style.borderLeft = "0px";
    document.getElementById("mysidebar").style.boxShadow = "0 0 0 0 rgba(0, 0, 0, 0.25)";

    document.getElementById("blocking").style.display = "none";
}