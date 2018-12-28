// const readlineSync = require('readline-sync');
const paExp = require("./paranthesis");
const reverseWord = require("./reverseWord");
const permute = require("./permuteString");
function main() {

    //Parenthesis Checker
    // let string = readlineSync.question(chalk.green("Please Enter Parenthesis Expression.")).trim(); 
    // let string = "{([])}";
    // let string = "([]";
    // let string = "([]]][[]}";
    // let string = "{{{{))))[[[[]]";
    let string = "{[()()][[({[()()]})][({}{})]]}";
    let paraExpResult = paExp(string);
    console.log("The given Parenthesis Epression '"+string +"' is" + paraExpResult);

    //Reserve words of String
    // string = readlineSync.question(chalk.green("Please Enter String to Reverse.")).trim(); 
    string = "i like this program very much";
    let reversewordString = reverseWord(string);
    console.log("The reversed Word is String is '" + reversewordString+"'.");

    //Permute a given String
    string = "ABC";
    let permutedArr = permute(string);
    console.log(permutedArr);


}

main();