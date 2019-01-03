
module.exports = function remvDubl(string) {

    //geeksforgeek
    let count = 0;
    let subStr = "";
    let length = string.length;
    for (let i = 0; i < length; i++) {

        for (let j = i + 1; j < length; j++) {

            if (string[i] == string[j]) {
                count++;
            }
            else {

                if (count > 0) {
                    count = 0;
                    i = j - 1;
                }
                else {
                    subStr += string[i];
                }
                break;
            }
        }
    }

    if (string[length - 2] != string[length - 1]) {
        subStr += string[length - 1];
    }

    return subStr;



}