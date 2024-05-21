
document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["I'm a junior web developer.", "Gamer.","Gym addict.", "Guitar enthusiast."];
    let i = 0;
    let txt = '';
    let wordIndex = 0;
    const speed = 150;
    const dynamicText = document.getElementById("dynamic-text");

    function typeWriter() {
        if (wordIndex < phrases[i].length) {
            txt += phrases[i].charAt(wordIndex);
            dynamicText.innerHTML = txt;
            wordIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(() => {
                txt = '';
                wordIndex = 0;
                i = (i + 1) % phrases.length;
                typeWriter();
            }, 2000); // Pause before starting the next phrase
        }
    }

    typeWriter();
});

// console.log("Script loaded");