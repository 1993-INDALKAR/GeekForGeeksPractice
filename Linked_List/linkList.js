
class LinkList {


    generateLinkList(arr) {

        let length = arr.length;

        if (length == 0) {
            return arr;
        }

        var head = {
            node: null,
            next: null
        }

        head.node = arr[0];

        let currentNode = head;

        for (let ele = 1; ele < length; ele++) {

            let newNode = {
                node: arr[ele],
                next: null
            }

            currentNode.next = newNode;

            currentNode = currentNode.next;


        }

        return head;

    }

}

module.exports = LinkList;