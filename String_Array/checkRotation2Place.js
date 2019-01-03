module.exports = function checkRotation2Place(string, string1) {

    let tempString = string + string;
    if (tempString.includes(string1)) {

        let rotateString1 = string.substring(string.length - 2, string.length) + string.substring(0, string.length - 2);
        let rotateString = string.substring(2, string.length) + string.substring(0, 2);
        if (rotateString == string1) {
            return "Rotated";
        }
        else if (rotateString1 == string1) {
            return "Rotated";
        }
        else {
            return "not Rotated";
        }

    }
    else {
        return "not Rotated";
    }

}