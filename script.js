document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const countDisplay = document.getElementById('count');
    const clickSound = document.getElementById('click-sound');
    const specialSound = document.getElementById('special-sound')
    let count = getCookie('tapCount') ? parseInt(getCookie('tapCount')) : 0;

    countDisplay.textContent = count;

    coin.addEventListener('click', (event) => {
        count++;
        countDisplay.textContent = count;
        setCookie('tapCount', count, 365);
        // Play sound with a chance of playing the special sound
        if (Math.random() < 0.00005) {
            playSound(specialSound);
        } else {
            playSound(clickSound);
        }
    function playSound(audioElement) {
        const soundClone = audioElement.cloneNode();
        soundClone.play();
    }

    });

    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
