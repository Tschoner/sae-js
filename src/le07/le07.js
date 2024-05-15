const tempData = [];

for (let i = 0; i < 30; i++) {
    tempData.push(-10 + Math.floor(Math.random()*45));
}
let min = 0, max = 0, avg = 0, belowZero;
tempData.forEach(i => {
    min = Math.min(min, i);
    max = Math.max(max, i);
    avg += i;
    avg += i;
});
avg = avg/tempData.length;
console.log(tempData)
console.log('Min ' + min);
console.log('Max' + max);
console.log('Avg' + avg);
console.log('Median ' + tempData.sort()[Math.floor(tempData.length/2)])


const catFact = document.getElementById('cat-fact');

// async function getCatFact() {
//     try {
//         const response = await fetch('httphs://catfact.ninja/fact');
//         const jsonResponse = await response.json();
//         console.log(jsonResponse);
//         catFact.innerText = jsonResponse.fact;
//     } catch (e) {
//         catFact.innerText = 'Error loading cat fact';
//     }
// }


function getSyncCat() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            catFact.innerText = jsonResponse.fact;
        })
        .catch(error => {
            catFact.innerText = 'Error loading cat fact';
        }).finally(() => {
            console.log('Final finished');
    });
}

getSyncCat();

// getCatFact().then(() => {
//     console.log('Cat fact loaded');
// }).catch((error) => {
//     console.error('Error loading cat fact', error);
// })



const modusData = [];

for (let i = 0; i < 30; i++) {
    modusData.push(Math.floor(Math.random()*10));
}

const counter = {};
let maxCount = 0;

modusData.forEach(i => {
    const newVar = (counter[i] || 0) + 1;
    counter[i] = newVar;
    maxCount = Math.max(maxCount, newVar);
});

const modus = Object.keys(counter).filter(i => counter[i] === maxCount);

let result = [];
let maxCount2 = counter[modus[0]];

Object.keys(counter).forEach(i => {
  const count = counter[i];
  if(count === maxCount2) {
      result.push(i);
  } else if(count > maxCount2) {
      result = [];
      maxCount2 = count;
  }
});


console.log(`Modus ${modus} of the Array`, modusData, counter);
console.log(`Modus2 ${result} of the Array`, modusData, counter);
