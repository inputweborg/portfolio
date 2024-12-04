// Function to calculate perceived brightness of a color
function getBrightness(r, g, b) {
    return (r * 299 + g * 587 + b * 114) / 1000;
}

// Function to get the computed background color of an element
function getBackgroundColor(element) {
    let bgColor = window.getComputedStyle(element).backgroundColor;
    if (bgColor.startsWith("rgb")) {
        let rgb = bgColor.match(/\d+/g).map(Number);
        return { r: rgb[0], g: rgb[1], b: rgb[2] };
    }
    return { r: 0, g: 0, b: 0 }; // Fallback to black
}

// Function to adjust text color dynamically
function adjustFontColors() {
    const elements = document.querySelectorAll("h1, h2, h3, p, a, button, input, textarea"); // Add more if needed
    elements.forEach((el) => {
        const bgColor = getBackgroundColor(el);
        const brightness = getBrightness(bgColor.r, bgColor.g, bgColor.b);

        // Set text color based on brightness
        if (brightness > 128) {
            el.style.color = "#001f3f"; // Dark text for bright backgrounds
        } else {
            el.style.color = "#f5f5dc"; // Light text for dark backgrounds
        }
    });
}

// Event listener to adjust font colors after page load and on window resize
window.addEventListener("load", adjustFontColors);
window.addEventListener("resize", adjustFontColors);
