
let hashTable;
let strLength;

module.exports = {


    searchElement(element) {

        let ascii = element.charCodeAt();

        let index = ascii % strLength;

        let arr = hashTable[index];

        if (arr == undefined) {
            return false;
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                return true;
            }
        }

        return false;

    },

    insertElement(element) {

        let ascii = element.charCodeAt();

        let index = ascii % strLength;

        // let arr = [];

        let arr = hashTable[index];

        if (arr == undefined) {
            arr = [element];
        }
        else {
            arr.push(element);
        }


        hashTable[index] = arr;


    },

    repeatingChar(str) {

        str = str.toLowerCase();
        strLength = str.length;
        hashTable = new Array(strLength);

        // let minIndex = -1;

        // for (let i = strLength - 1; i >= 0; i--) {
        for (let i = 0; i < strLength; i++) {
            if (this.searchElement(str[i])) {
                // minIndex = i;
                return str[i];
            }
            else {
                this.insertElement(str[i]);
            }
        }

        // if (minIndex != -1) {
        //     return str[minIndex];
        // }

        return false;


    }



}