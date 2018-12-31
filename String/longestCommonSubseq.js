

module.exports = function common(string, string1) {


    let columnLength = string.length;
    let rowLength = string1.length;
    let longSubString = "";

    let matrix = new Array(rowLength);

    for (let i = 0; i < rowLength; i++) {

        matrix[i] = new Array(columnLength).fill(0);

    }

    for (let i = 0; i < rowLength; i++) {

        for (let j = 0; j < columnLength; j++) {

            if (string1[i] == string[j]) {

                if (i == 0 || j == 0) {
                    matrix[i][j] += 1;
                }
                // else if()
                else {
                    // longSubString += string[j];
                    matrix[i][j] = Number(matrix[i - 1][j - 1]) + 1;
                }


            }
            else {

                if (i == 0 && j - 1 >= 0) {
                    matrix[i][j] = matrix[i][j - 1];
                }
                else if (j == 0 && i - 1 >= 0) {
                    matrix[i][j] = matrix[i - 1][j];
                }
                else if (i != 0 && j != 0) {
                // else {
                    matrix[i][j] = Number(matrix[i][j - 1]) > Number(matrix[i - 1][j]) ? Number(matrix[i][j - 1]) : Number(matrix[i - 1][j]);
                }
                // else{
                //     matrix[i][j] = 0;
                // }

            }

        }

    }




    let i = rowLength-1, j = columnLength-1;

    let index = matrix[rowLength - 1][columnLength - 1];

    longSubString = "";

    // while (i > 0 && j > 0) {
    //     // If current character in X[] and Y are same, then 
    //     // current character is part of LCS 
    //     if (string1[i - 1] == string[j - 1]) {
    //         // Put current character in result 
    //         longSubString += string1[i - 1];

    //         // reduce values of i, j and index 
    //         i--;
    //         j--;
    //         index--;
    //     }

    //     // If not same, then find the larger of two and 
    //     // go in the direction of larger value 
    //     else if (matrix[i - 1][j] > matrix[i][j - 1])
    //         i--;
    //     else
    //         j--;
    // }

    while (index > 0) {

        if(matrix[i][j-1] == matrix[i-1][j] && matrix[i][j] > matrix[i-1][j-1]){
            longSubString += string[j];
            i--;
            j--;
            index--;
        }
        else if(matrix[i][j-1] == matrix[i-1][j] && matrix[i][j-1] == matrix[i][j] ||
            matrix[i][j-1] > matrix[i-1][j] && matrix[i][j-1] == matrix[i][j] ){
            j--;
        }
        else if(matrix[i-1][j] > matrix[i][j-1] && matrix[i-1][j] == matrix[i][j]){
            i--;
        }
        else if( ( matrix[i][j-1] == undefined || matrix[i-1][j] == undefined ) && matrix[i][j]>0){
            longSubString += string[j];
            i--;
            j--;
            index--;
        }
    }

    // console.log(matrix);
    // console.log(longSubString);

    return longSubString.split("").reverse().join("");

}