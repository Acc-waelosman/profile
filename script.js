// JavaScript for the typing and erasing effect
document.addEventListener('DOMContentLoaded', function() {
    const typedTextSpan = document.getElementById('typed-text');
    
    // The words that will appear one after another
    const textArray = ["رئيس حسابات", "محلل مالي", "مراجع حسابات", "وائل عثمان"];
    
    // Speed settings (in milliseconds)
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500; // Pause before erasing

    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, pauseTime);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, deletingSpeed);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0; // Loop back to the beginning
            }
            setTimeout(type, typingSpeed + 500); // Wait a bit before starting to type again
        }
    }

    // Start the typing effect when the page loads
    setTimeout(type, pauseTime);
});
