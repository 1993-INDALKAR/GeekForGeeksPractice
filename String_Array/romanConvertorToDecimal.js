module.exports = function romanConvertor(string) {

    let length = string.length;
    let decimalNumber = 0;
    let prevDecimal = 0;
    let numb;
    for (let i = length - 1; i >= 0; i--) {

        switch (string[i]) {
            case "I":
                numb = 1;
                break;
            case "V":
                numb = 5;
                break;
            case "X":
                numb = 10;
                break;
            case "L":
                numb = 50;
                break;
            case "C":
                numb = 100;
                break;
            case "D":
                numb = 500;
                break;
            case "M":
                numb = 1000;
                break;
        }

        if (numb < prevDecimal) {
            decimalNumber -= numb;
        }
        else {
            decimalNumber += numb;
        }

        prevDecimal = numb;


    }

    return decimalNumber;

}