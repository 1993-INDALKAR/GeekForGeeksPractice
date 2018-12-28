

module.exports = function findMiddle(head){


    let mid = head;

    let current = head;

    let count = 0;
    while(current != null){

        if(count%2 == 1){
            mid = mid.next;
        }

        count++;

        current = current.next;

    }

    return mid;

// console.log(head);

}
