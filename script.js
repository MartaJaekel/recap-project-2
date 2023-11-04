/*function applyDarkMode(darkMode) {
    if (darkMode === 'ON') {
        document.documentElement.style.setProperty('--color', 'white');
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--border-color', 'beige');
    } else {
        document.documentElement.style.setProperty('--color', 'black');
        document.documentElement.style.setProperty('--bg-color', 'beige');
        document.documentElement.style.setProperty('--border-color', 'black');
    }
}

function saveDarkMode(darkMode) {
    localStorage.setItem('darkMode', darkMode);
}

function getDarkMode() {
    return localStorage.getItem('darkMode');
}

function darkModeSwitchChange(event) {
    const darkMode = event.target.checked === true ? 'ON' : 'OFF'
    saveDarkMode(darkMode);
    applyDarkMode(darkMode);
}

window.onload = () => {
    const darkMode = getDarkMode();

    if (['/profile/index.html', '/profile/'].includes(window.location.pathname)) {
        const darkModeSwitch = document.getElementById('dark-mode-switch/');
        darkModeSwitch.checked = darkMode === 'ON';
        darkModeSwitch.addEventListener("change", darkModeSwitchChange);
    }

    applyDarkMode(darkMode);
} */

const bookmark = document.querySelector(".image-bookmark");
let white = true;

bookmark.addEventListener("click" , () => {
    if (white) {
    bookmark.src = "assets/bookmark-white.svg";
    } else {
        bookmark.src = "assets/bookmark.svg";

    }
    white = !white;
}); 

const answerButton = document.querySelector(".button");
const answer = document.querySelector(".answer");

answerButton.addEventListener("click", () => {
    if (answer.classList.contains("hidden")){
    answer.classList.remove("hidden");
    answerButton.textContent = "Hide Answer";
} else {
    answer.classList.add("hidden");
    answerButton.textContent = "Show Answer";
}
});