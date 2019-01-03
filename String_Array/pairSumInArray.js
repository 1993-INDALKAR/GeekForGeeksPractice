
let hashSet = new Array(10).fill();
let arrLength;

module.exports = {



    insertHash(element) {

        let index = element % arrLength;

        let arr = [];
        //hashSet[index];
        if (hashSet[index] != undefined) {
            //     arr.push(element);
            // }
            // else{
            arr = hashSet[index];
        }

        arr.push(element);

        hashSet[index] = arr;

    },

    pairSum(arr, sum) {

        arrLength = arr.length;


        let str = "";

        for (let i = 0; i < arrLength; i++) {

            let temp = sum - arr[i];

            if (temp >= 0 && this.searchHash(temp)) {

                str += ` (${temp},${arr[i]})`;

            }

            this.insertHash(arr[i]);

        }

        return str;



    },

    searchHash(element) {

        let index = element % arrLength;

        if (hashSet[index] == undefined) return false;

        let length = hashSet[index].length;

        // if(length == 0) return false;

        for (let i = 0; i < length; i++) {
            if (hashSet[index][i] == element) {
                return true;
            }
        }

        return false;
    }
}