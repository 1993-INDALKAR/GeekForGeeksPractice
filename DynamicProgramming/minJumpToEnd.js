
module.exports = function jump(arr) {

    let length = arr.length;
    let minJumpArr = new Array(length).fill(0);
    let jumpPathArr = new Array(length);

    for (let i = 1; i < length; i++) {
        for (let j = 0; j < i; j++) {
            let sum = j + arr[j];
            if (i <= sum) {
                sum = minJumpArr[j] + 1;
                if (sum < minJumpArr[i] || minJumpArr[i] == 0) {
                    minJumpArr[i] = sum;
                    jumpPathArr[i] = j;
                }
            }

        }
    }

    // console.log(minJumpArr);
    // console.log(jumpPathArr);

    let pathArr = [];

    for (let i = length - 1; i >= 0;) {

        let index = jumpPathArr[i];
        if (index != undefined) {
            pathArr.unshift(index);
            i = index;
        }
        else{
            break;
        }

    }



    let obj = {

        minJump: minJumpArr[length - 1],
        jumpPath: pathArr

    }

    return obj;
}