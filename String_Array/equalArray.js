module.exports = function equalArray(arr, arr1) {

    let arrLength = arr.length;
    let arr1Length = arr1.length;
    if (arrLength != arr1Length) return false;

    let hashTable = [];

    let temp;
    let count = 0;

    for (let i = 0; i < arrLength; i++) {

        temp = arr[i] % arrLength;


        if (hashTable[temp]) {

            let tempLength = hashTable[temp].length;


            for (let j = 0; j < tempLength; j++) {
                if (hashTable[temp][j].hasOwnProperty(arr[i])) {
                    let a = {};
                    a = hashTable[temp][j];
                    a[arr[i]] = a[arr[i]] + 1;
                }
            }

            // tempArr += 1;

            // hashTable[arr[i]] = temp;

        }
        else {

            // tempArr = [1];
            // temp = arr[i] % arrLength;
            hashTable[temp] = new Array();
            let obj = {};
            obj[arr[i]] = 1;
            hashTable[temp].push(obj);

        }

        count++;

    }

    for (let i = 0; i < arr1Length; i++) {

        // if (hashTable[arr1[i]]) {

        //     tempArr = hashTable[arr[i]];

        //     tempArr[0] -= 1;

        //     hashTable[arr[i]] = tempArr;

        //     count--;

        // }

        temp = arr1[i] % arr1Length;


        if (hashTable[temp]) {

            let tempLength = hashTable[temp].length;


            for (let j = 0; j < tempLength; j++) {
                if (hashTable[temp][j].hasOwnProperty(arr1[i])) {
                    
                    let a = {};
                    a = hashTable[temp][j];
                    a[arr1[i]] = a[arr1[i]] - 1;

                    count--;
                }
            }

            

        }


    }

    if (count == 0) {
        return true;
    }
    else {
        return false;
    }
}