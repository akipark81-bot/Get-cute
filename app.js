document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector("h1");
    title.addEventListener("mouseover", () => {
        title.style.color = "#ff1493";
    });
    title.addEventListener("mouseout", () => {
        title.style.color = "#ff69b4";
    });
});
