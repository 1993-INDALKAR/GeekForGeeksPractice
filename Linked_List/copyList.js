
var list;

module.exports = {


    copy(head) {

        list = {
            node: head.node,
            next: null
        };

        let current = head.next;

        while (current != null) {

            let newNode = {
                node: current.node,
                next: null
            }

            list.next = newNode;

            current = current.next;

        }


    },

    getCopiedList() {

        return list;
    }


}