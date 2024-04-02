const firstDiv = document.querySelector('div');
const allDivs = document.querySelectorAll('div');
const specificDiv = document.getElementById('myDiv');
const container = document.getElementById('container');

const addDivBtn = document.getElementById('addDiv');
const removeDivBtn = document.getElementById('removeDiv');
const changeColorBtn = document.getElementById('changeColor');
const highlightContainerBtn = document.getElementById('highlightContainer');

// Fügt ein neues Div hinzu
addDivBtn.addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.innerText = 'Neues Div hinzugefügt';
    container.appendChild(newDiv); // Verwende appendChild für Konsistenz
});

// Entfernt das letzte Div
removeDivBtn.addEventListener('click', function() {
    const lastDiv = document.querySelector('#container > div:last-of-type'); // Stelle sicher, dass nur Divs direkt unter <body> betrachtet werden
    if (lastDiv) {
        lastDiv.remove();
    }
});

// Ändert die Hintergrundfarbe des ersten Div
changeColorBtn.addEventListener('click', function() {
    firstDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Highlighted den Container, der das spezifische Div umfasst
highlightContainerBtn.addEventListener('click', function() {
    const container = specificDiv.closest('section');
    if (container) {
        container.style.border = '2px solid red';
    }
});

console.log('Alle Divs:', allDivs.length); // Zeigt die Anzahl aller Divs
