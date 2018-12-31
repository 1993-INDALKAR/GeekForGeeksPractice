// const readlineSync = require('readline-sync');
const paExp = require("./paranthesis");
const reverseWord = require("./reverseWord");
const permute = require("./permuteString");
const remDuble = require("./recurRemoveDubliclate");
const rotation = require("./checkRotation2Place");
const romanConvertor = require("./romanConvertorToDecimal");
const lcss = require("./longestCommonSubseq");
const missingFunc = require("./missingElement");

function main() {

    //Parenthesis Checker
    // let string = readlineSync.question(chalk.green("Please Enter Parenthesis Expression.")).trim(); 
    // let string = "{([])}";
    // let string = "([]";
    // let string = "([]]][[]}";
    // let string = "{{{{))))[[[[]]";
    let string = "{[()()][[({[()()]})][({}{})]]}";
    let paraExpResult = paExp(string);
    console.log("\nThe given Parenthesis Epression '"+string +"' is" + paraExpResult);

    //Reserve words of String
    // string = readlineSync.question(chalk.green("Please Enter String to Reverse.")).trim(); 
    string = "i like this program very much";
    let reversewordString = reverseWord(string);
    console.log("\nThe reversed Word is String is '" + reversewordString+"'.");

    //Permute a given String
    // string = "ABC";
    // let permutedArr = permute(string);
    // console.log(permutedArr);

    //Recursively remove Dublicates from string
    // string = "geeksforgeek";
    string = "acaaabbbacdddd";
    let removeDublicate = remDuble(string);
    console.log(`\nThe given string '${string}' after removing adjacent dublicates it represent '${removeDublicate}'.`);

    //Check if string is rotated by two places
    // string = 'amazon';
    // let string1 = "azonam";
    // let string1 = "onamaz";
    string = 'geeksforgeeks';
    let string1 = "geeksgeeksfor";
    let chkRotate = rotation(string,string1);
    console.log(`\nThe given String '${string}' and rotated String '${string1}' is ${chkRotate} by two Places.`);


    //Converting Roman Number to Integer Number
    // string = "MCMIV";
    string = "LXXIX";
    let decimalNumber = romanConvertor(string);
    console.log(`\nInteger Conversion of Roman Number '${string}' is ${decimalNumber}.`);

    //Longest common Subsequence in given two string
    // string = "bqdrcvefgh";
    // string1 = "abcvdefgh";
    string = "AEDFHR";
    string1 = "ABCDGH";
    // string1 = "xmjyauz";
    // string = "mzjawxu";
    // string1 = "AGGTAB";
    // string = "GXTXAYB";
    let longCom = lcss(string,string1);
    console.log(`\nThe Longest Common Subsequence in '${string1}' and '${string}' is '${longCom}'`);

    //Find the Missing Element in given two arrays
    let arr = [4,8,12,9,3];
    let arr1 = [4,8,9,3];
    let missElement = missingFunc(arr,arr1);
    console.log(`\nThe missing element in given arrays '${arr1}' is ${missElement}.`)


}

main();