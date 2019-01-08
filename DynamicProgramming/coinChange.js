
module.exports = function change(arr, num) {

    let length = arr.length;
    arr.sort();
    let combination = new Array(length);

    for (let i = 0; i < length; i++) {
        combination[i] = new Array(num+1).fill(parseInt(0));
    }

    // combination[0][0] = 1;

    for (let i = 0; i < length; i++) {

        for (let j = 0; j <= num; j++) {

            if (arr[i] <= j) {

                let index = j - arr[i];

                // if (combination[i][j] == undefined) {
                //     combination[i][j] = 1
                // }
                // else {
                // combination[i][j] = parseInt(combination[i][index]) + parseInt(combination[i-1][j]);
                // }
                if(i-1 < 0){
                    combination[i][j] = parseInt(combination[i][index]) + parseInt(combination[i][j]);
                }
                else{
                    combination[i][j] = parseInt(combination[i][index]) + parseInt(combination[i-1][j]);
                }
            }
            else {

                // if (combination[i][j] == undefined) {
                //     combination[i][j] = 1;
                // }
                // else {

                // }

                if (i - 1 < 0) {
                    combination[i][j] = 1;
                }
                else {
                    combination[i][j] = combination[i-1][j];
                }
            }
        }

    }

    return combination[length-1][num];

}