module.exports = function subSeq(arr) {

    let length = arr.length;
    let lengthArray = new Array(length).fill(1);

    let subSeq = new Array(length);

    for (let i = 1; i < length; i++) {

        for (let j = 0; j < i; j++) {

            if (arr[j] < arr[i]) {
                let sum = lengthArray[j] + 1;
                if (sum >= lengthArray[i]) {
                    lengthArray[i] = sum;
                    subSeq[i] = j;
                }

            }

        }
    }

    let max = Math.max(...lengthArray);
    let index = lengthArray.indexOf(max);

    let longestIncSubSeq = [];

    while(index>=0){

        let value = arr[index];
        longestIncSubSeq.unshift(value);
        index = subSeq[index];

    }

    // console.log(lengthArray);
    // console.log(subSeq);

    return longestIncSubSeq;

}