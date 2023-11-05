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
//Html Element wird mit Class gewählt
const bookmark = document.querySelector(".image-bookmark");
//variable um den Zustand des Bookmarks zu verfolgen
let white = true;

bookmark.addEventListener("click" , () => {
    //Wert der Variable white wird überprüft
    //wenn weiß dann wird wird das src Attribut auf das entsprechende bookmark.svg gesetzt
    if (white) {
    bookmark.src = "assets/bookmark-white.svg";
    } else {
        bookmark.src = "assets/bookmark.svg";

    }
    //white wird umgekehrt indem sein Wert negiert wird
    white = !white;
}); 

const answerButton = document.querySelector(".button");
//Antwort die in und ausgeblendet werden soll
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