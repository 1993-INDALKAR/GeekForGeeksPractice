
const cL = require("./copyList");

module.exports = function reverse(head){

    //  cL.copy(head);

    let current = head;
    let prev = null;
    let next = null;

    while(current !=null){

        next = current.next;
        current.next = prev;
        prev = current;
        current = next;

    }

    // head = cL.getCopiedList();
    return prev;

}