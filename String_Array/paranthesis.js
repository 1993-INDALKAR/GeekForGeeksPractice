

module.exports = function paran(string) {

    let arr = string.split("");
    let paranArr = [];
    let index;
    let length = arr.length;

    for (let i = 0; i < length; i++) {

        switch (arr[i]) {
            case "}":
                index = paranArr.indexOf("{");
                if (index != -1) {
                    paranArr.splice(index, 1);
                }

                break;
            case ")":
                index = paranArr.indexOf("(");
                if (index != -1) {
                    paranArr.splice(index, 1);
                }
                break;
            case "]":
                index = paranArr.indexOf("[");
                if (index != -1) {
                    paranArr.splice(index, 1);
                }
                break;
            default:
                paranArr.push(arr[i]);
        }


        // if(arr[i] == "}" || arr[i] == ")" || arr[i] == "]"){
        //     arr.pop();
        // }
        // else{
        //     paranArr.push(arr[i]);
        // }
    }

    if (paranArr.length != 0) {
        return " Not Balanced.";
    }
    else {
        return " Balanced.";
    }

}
