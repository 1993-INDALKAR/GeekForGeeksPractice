// const readlineSync = require('readline-sync');
const paExp = require("./paranthesis");
const reverseWord = require("./reverseWord");
const permute = require("./permuteString");
const remDuble = require("./recurRemoveDubliclate");
const rotation = require("./checkRotation2Place");
const romanConvertor = require("./romanConvertorToDecimal");
const lcss = require("./longestCommonSubseq");
const missingFunc = require("./missingElement");
const largest_smallest = require("./Kth_Largest&kth_Smallest");
const pairSum = require("./pairSumInArray");
const lis = require("./longestIncSubseq");


function main() {

    //Parenthesis Checker
    // let string = readlineSync.question(chalk.green("Please Enter Parenthesis Expression.")).trim(); 
    // let string = "{([])}";
    // let string = "([]";
    // let string = "([]]][[]}";
    // let string = "{{{{))))[[[[]]";
    let string = "{[()()][[({[()()]})][({}{})]]}";
    let paraExpResult = paExp(string);
    console.log("\nThe given Parenthesis Epression '" + string + "' is" + paraExpResult);

    //Reserve words of String
    // string = readlineSync.question(chalk.green("Please Enter String to Reverse.")).trim(); 
    string = "i like this program very much";
    let reversewordString = reverseWord(string);
    console.log("\nThe reversed Word is String is '" + reversewordString + "'.");

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
    let chkRotate = rotation(string, string1);
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
    let longCom = lcss(string, string1);
    console.log(`\nThe Longest Common Subsequence in '${string1}' and '${string}' is '${longCom}'`);

    //Find the Missing Element in given two arrays
    let arr = [4, 8, 12, 9, 3];
    let arr1 = [4, 8, 9, 3];
    let missElement = missingFunc(arr, arr1);
    console.log("\nMISSING ELEMENT IN GIVEN TWO ARRAYS:")
    console.log(`The missing element in given arrays '${arr1}' is ${missElement}.`);


    //Kth Largest and Kth Smallest
    // arr = [9,6,5,0,8,2,1,3];
    arr = [1, 23, 12, 9, 30, 2, 50];
    // let k = 4;
    let k = 3;
    let largestElement = largest_smallest.largestElement(arr, k);
    console.log("\nORDER STATISTICS => lARGEST ELEMENT IN AN ARRAY:");
    console.log(`${k}th/st/nd/rd Largest Element in array ${arr} is ${largestElement}.`);
    arr = [7, 10, 4, 3, 20, 15]
    k = 3;
    let smallestElement = largest_smallest.smallestElement(arr, k);
    console.log("\nORDER STATISTICS => SMALLEST ELEMENT IN AN ARRAY:");
    console.log(`${k}th/st/nd/rd smallest Element in array ${arr} is ${smallestElement}.`);


    //Pair sum in array
    arr = [1, 4, 45, -29, 6, 10, -8, 12];
    let sum = 16;
    let pairs = pairSum.pairSum(arr, sum);
    console.log("\nPAIRWISE SUM IN A GIVEN ARRAY:");
    console.log(`Pair sums in given array ${arr} for number ${sum} are${pairs}.`);


    //Longest Inscresing Subsequence
    // arr = [0,4,12,2,10,6,9,13,3,11,7,15];
    arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
    let longIncSub = lis(arr);
    console.log("\nLONGEST INCREASING SUBSEQUENCE:");
    console.log(`The Longest Increasing Subsequence in array ${arr} is ${longIncSub}.`);
}

main();