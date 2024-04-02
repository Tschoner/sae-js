
function main() {
  const input = prompt('Enter array length: ');
  const arr = generateRandomNumbers(parseInt(input));
  console.log("Generated array: ", arr);
  console.log("Sum of array elements: ", calculateSum(arr));
  console.log("Count of numbers divisible by 3: ", countDivisibleByThree(arr));
}

main();

// Generate x amount of random numbers
function generateRandomNumbers(x) {
    let arr = [];
    for(let i = 0; i < x; i++) {
        arr.push(Math.floor(Math.random() * 100)); // Generate random numbers between 0 and 100
    }
    return arr;
}

// Calculate the sum of the array numbers
function calculateSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Count how many numbers can be divided by 3
function countDivisibleByThree(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0) {
            count++;
        }
    }
    return count;
}

