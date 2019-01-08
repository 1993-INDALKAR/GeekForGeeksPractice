
module.exports = function numberForm(arr) {

    // let length = arr.length;
    // let hashTable = new Array(10);

    // for (let i = 0; i < length; i++) {

    //     // let index = arr[i].split()[0];
    //     let index = arr[i].toString().split("")[0];

    //     index = parseInt(index);

    //     let arr1 = hashTable[index];

    //     if (arr1 == undefined) {
    //         arr1 = [];
    //         arr1[0] = arr[i];
    //     }
    //     else {
    //         arr1.push(arr[i]);
    //     }

    //     hashTable[index] = arr1;

    // }

    // for(let i = 9; i>0;i--){

    // }

    arr.sort((first, second) => {

        let firstSecond = "" + first + second;
        let secondFirst = "" + second + first;

        return firstSecond > secondFirst ? -1 : 1;

    });

    // console.log(arr);

    return arr.join("");

}