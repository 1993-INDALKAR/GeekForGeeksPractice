const reverse = require("./reverseList");

module.exports = function reverseInGroup(head, k) {

    let current = head;
    let count = 0;
    let nextHead;
    let tempHead = [];

    while (current != null) {

        count++;

        if (count % k == 0) {

            // prev = current;
            nextHead = current.next;
            current.next = null;
            let reversedList = reverse(head);
            tempHead.push(reversedList);
            current = reversedList.next;
            while (current.next != null) {
                current = current.next;
            }

            current.next = nextHead;
            head = nextHead;
            
            //  = reversedList;
            // current = prev;
            // console.log(reversedList);

        }

        current = current.next;
    }

}