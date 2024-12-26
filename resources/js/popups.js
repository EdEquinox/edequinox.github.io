export const popups = [
    "Lactometer", "strokey", "spotle_infinity", "StashExtract", "MusicboardExtract", "Tour Advisor", "PacMan-o", "FairShare"
];

export function loadPopups() {
    
    popups.forEach(popup => {
        const popupElement = createPopup(popup);
        popupElement.querySelector(".close").addEventListener("click", () => {
            popupElement.style.display = "none";
        });
        window.onclick = function(event) {
            if (event.target == popupElement) {
                popupElement.style.display = "none";
            }
        };
    });
}

export function createPopup(title) {
    fetch('../pages/projects/' + "lactometer" + '.html')
        .then(response => response.text())
        .then(data => {
            popdiv = document.createElement("popup-content");
            popdiv.innerHTML = data;
        });
}