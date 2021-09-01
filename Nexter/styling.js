var link = document.createElement("link");
link.rel = "stylesheet";
if (window.location.host) {
    link.href = "css/style.css";
} else {
    link.href = "css/style.min.css";
}
document.head.appendChild(link);