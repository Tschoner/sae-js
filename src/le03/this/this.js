const obj = {
    name: 'obj',
    checkThis(ref) {
        return this === ref; // true
    }
};

console.log(obj.checkThis(obj));
console.log(obj.checkThis(window));

const arrowFunc = () => {
    console.log('Arrow function this value', this === window); // true
};

function name() {
    console.log('Function function this value', this === window); // true
}

function myFunc() {
    console.log('Function this value', this === window); // true
}


name();
arrowFunc();
myFunc();


function showThis() {
    'use strict';
    return this;
}

function showThis2() {
    return this;
}

console.log('Response of showThis is:: ', showThis()); // undefined
console.log('Response of showThis2 is:: ', showThis2()); // undefined


document.getElementById('trigger').addEventListener('click', () => {
    console.log('This in anonym a.f. listener: ', this === window); // true
});

