

module.exports = function reverse(string) {

    let arr = string.split(" ");
    let length = arr.length;

    for (let i = 0,j=length-1; i < j; i++,j--) {

        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;

        //it should work don't know why swapping is nt working
        // arr[i] = arr[i] ^ arr[j];
        // arr[j] = arr[j] ^ arr[i];
        // arr[i] = arr[i] ^ arr[j];

    }

    return arr.join(" ");


}
