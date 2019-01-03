
module.exports = {

     largestElement(arr, k) {

        let arr1 = [];

        for(let i=0;i<arr.length;i++){
            arr1[i] = arr[i];
        }

        let arr2 = this.maxHeap(arr1);

        let deletedElement;

        while (k > 0) {

            deletedElement = this.deleteElementMax(arr1);
            k--;
            // this.maxHeapify()

        }

        return deletedElement;

        // console.log(arr1);


    },

    smallestElement(arr, k) {

        let arr1 = [];

        for(let i=0;i<arr.length;i++){
            arr1[i] = arr[i];
        }

        let arr2 = this.minHeap(arr1);

        let deletedElement;

        while (k > 0) {

            deletedElement = this.deleteElementMin(arr1);
            k--;
            // this.maxHeapify()

        }

        return deletedElement;

        // console.log(arr1);


    },

      maxHeap(arr) {

        // let arr1 = arr;

        let length = arr.length;

        let maxEdge = Math.floor(length / 2) - 1;

        for (let edge = maxEdge; edge >= 0; edge--) {

            this.maxHeapify(arr, edge);

        }


        return arr;
    },

     maxHeapify(arr, i) {

        let leftChild = 2 * i+1;
        let rightChild = (2 * i) + 2;
        let length = arr.length;
        let largest;

        if (leftChild <= length && arr[leftChild] > arr[i]) {
            largest = leftChild;
        }
        else {
            largest = i;
        }

        if (rightChild <= length && arr[rightChild] > arr[largest]) {
            largest = rightChild;
        }

        if (largest != i) {
            arr[largest] = arr[largest] ^ arr[i];
            arr[i] = arr[i] ^ arr[largest];
            arr[largest] = arr[largest] ^ arr[i];
            this.maxHeapify(arr, largest);
        }

    },

      minHeap(arr) {

        let length = arr.length;

        let minEdge = Math.floor(length / 2) - 1;

        for (let edge = minEdge; edge >= 0; edge--) {

            this.minHeapify(arr, edge);

        }


        return arr;

    },

    minHeapify(arr, i) {

        let leftChild = 2 * i + 1;
        let rightChild = (2 * i) + 2;
        let length = arr.length;
        let smallest;

        if (leftChild <= length && arr[leftChild] < arr[i]) {
            smallest = leftChild;
        }
        else {
            smallest = i;
        }

        if (rightChild <= length && arr[rightChild] < arr[smallest]) {
            smallest = rightChild;
        }

        if (smallest != i) {
            arr[smallest] = arr[smallest] ^ arr[i];
            arr[i] = arr[i] ^ arr[smallest];
            arr[smallest] = arr[smallest] ^ arr[i];
            this.minHeapify(arr, smallest);
        }

    },

     deleteElementMax(arr){

        let element = arr.shift();

        arr.unshift(arr.pop());

        this.maxHeap(arr);

        return element;


    },


    deleteElementMin(arr){

        let element = arr.shift();

        arr.unshift(arr.pop());

        this.minHeap(arr);

        return element;


    }




}