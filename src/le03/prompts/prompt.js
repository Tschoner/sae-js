const input = prompt('Enter your name: ');
const year = prompt('Enter your birthyear: ');

function greet(name, birth) {
  console.log(`Hello, ${name}! You are born ${birth}.`);
}

greet(input, year);

