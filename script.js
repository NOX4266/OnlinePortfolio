document.addEventListener("DOMContentLoaded", () => {
    const typewriterText = document.querySelector(".typewriter-text");
    if (!typewriterText) return;

    const textArray = ["Web Developer", "Tech Enthusiast", "Programmer"];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const delayBetweenTexts = 2000;

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typewriterText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typewriterText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
