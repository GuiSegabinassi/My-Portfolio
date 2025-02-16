document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector("h2");
    const text = heading.textContent;
    heading.innerHTML = "";

    
    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        heading.appendChild(span);

        
        setTimeout(() => {
            span.style.transform = "translateX(0)";
            span.style.opacity = "1";
        }, index * 100);
    });
});
