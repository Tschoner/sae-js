const inputElement = document.getElementById('query-field');
const resultElement = document.getElementById('results');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', search);

function renderData(data) {
    if (data.docs)
        data.docs.forEach((doc) => {
            const htmlDivElement = document.createElement('div');
            const titleElement = document.createElement('h3');
            titleElement.innerText = doc.title;
            const listElement = document.createElement('ul');
            doc.author_name.forEach((author) => {
                const element = document.createElement('li');
                element.innerText = author;
                listElement.append(element);
            })

            htmlDivElement.append(titleElement)
            htmlDivElement.append(listElement)
            resultElement.append(htmlDivElement);
        });
}

function searchBooks(query) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

    // Senden einer GET-Anfrage an die API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Netzwerkantwort war nicht ok');
            }
            return response.json(); // Parsen der JSON-Antwort
        })
        .then(data => {
            renderData(data);
        })
        .catch(error => {
            console.error('Fehler beim Fetchen der Daten:', error);
        });
}


function search() {
    const query = inputElement.value;
    if (query)
        searchBooks(query);
}




// Random numbers

function generateRandomNumbers(sum){
    let x = 0;
    const result = [];
    while(x < (sum-5)){
        result.push(5*Math.random())
    }
    const s = result.reduce((a, b) => a+b, 0)
    result.push(sum-s);
    return result;
}



function readMinMax(randomList) {
    const min = randomList.reduce((a, b) => Math.min(a, b));
    let min2 = randomList[0];

    randomList.forEach((x) => {
        if(min2 > x)
            min2 = x;
    });
    const max = randomList.reduce((a, b) => Math.max(a, b));
    return [min, min2, max]
}

class Person {

    constructor(name, age){
        this.name = name;
        this.age = age
    }
}


function generatePerson() {
    return new Person("Person" + Math.random().toString().substring(0, 5), 20+20*Math.random())
}

function generateRandomPersonList(n) {
    const result = []
    for (let i = 0; i < n; i++) {
        result.push(generatePerson())
    }
    return result;
}


console.log(readMinMax([5, 1, -10, 312.3, 23, 5, 1, 231, 8]))
console.log(JSON.stringify(generateRandomPersonList(5)))
