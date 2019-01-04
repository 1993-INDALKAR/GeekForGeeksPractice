const median = require("./runningMedian");


//Find Median of a Stream
let arr = [5, 15, 1, 3, 2, 8, 7, 9, 10, 6, 11, 4];
let length = arr.length;
let min = 0;
console.log("Median of Stream:");
for (let i = 0; i < length; i++) {
    let element = median.getMedian(arr[i], min);
    min = element;
    console.log(`Median for ${arr.slice(0, i + 1)} is ${min}.`);
}