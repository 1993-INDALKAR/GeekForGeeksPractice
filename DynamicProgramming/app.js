const mje = require("./minJumpToEnd");
const frcs = require("./firstRepeatingcharInString"); 

//Minimum Jump to End of Array
let arr = [2,1,3,2,3,4,5,1,2,8];
let jump = mje(arr);
console.log("MINIMUM JUMP TO REACH END OF ARRAY:");
console.log(`Minimum Jump to Reach End of Array ${arr} is ${jump.minJump} jumps and path is ${jump.jumpPath}.`);


//First Repeating Character in a String
let str = "geekforgeeks";
// str = "hellogeeks";
let firstElement = frcs.repeatingChar(str);
console.log("\nFIRST REPEATING CHARACTER IN A GIVEN STRING:");
if(firstElement){
    console.log(`First repeating character is a given string '${str}' is '${firstElement}'.`);
}
else{
    console.log(`There is no Repeating character is a given string '${str}'.`);
}

