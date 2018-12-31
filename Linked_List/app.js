const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const readlineSync = require('readline-sync');
const linkList = require("./linkList");
const middle = require("./middelElement");
const reverse = require("./reverseList");
const reverseGroup = require("./reverseInGroup");
async function main() {

    let fileName = "infile.dat";
    let filePath = path.join(__dirname, fileName);

    let fileData = fs.readFileSync(filePath).toString();

    let numbArr = fileData.split("\r\n");

    numbArr = numbArr.filter(ele => {
        return ele != "";
    });

    //generating Link List
    let linkedList = new linkList;
    let generatedLinkList = linkedList.generateLinkList(numbArr);

    //Getting Middel Element in a Link List
    let middelElement = middle(generatedLinkList);
    console.log(`\nMiddel Element of List is ${middelElement.node}`);

    //Reversing an Entire Link List
    let reversedList = reverse(generatedLinkList);
    let string = `\nReversed Link List is`;
    let allRevElement = getElement(reversedList);
    console.log(`${string}${allRevElement}`);

    //Reversing Link List in a group of K
    let k = 3; 
    // let k = readlineSync.question(chalk.green("Please Enter the Number is which the list is to be Reversed:")).trim(); 
    // console.log("k"+k);
    generatedLinkList = linkedList.generateLinkList(numbArr);
    // let reversedGroup = reverseGroup(generatedLinkList,k);




}

function getElement(head) {

    let current = head;
    let string = "";
    while (current != null) {
        string += ` ${current.node}`;
        current = current.next;
    }
    
    return string + ".";

}

main();
