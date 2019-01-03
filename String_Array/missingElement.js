
module.exports = function missing(arr, arr1) {

    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i]);
    }

    arr1.sort();

    let missingElement = 0;
    let length = arr1.length;
    for (let i = 0; i < length; i++) {

        missingElement = missingElement ^ arr1[i];
    }

    return missingElement;
    // console.log(missingElement);

}