document.addEventListener("DOMContentLoaded", function() {
    const text = "Portfolio";
    const speed = 200; // Kirjoitusnopeus (ms)
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("portfolio-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter(); // Käynnistää animaation
});
