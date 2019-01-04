let minHeap = [];
let maxHeap = [];

module.exports = {

    getMedian(element, min) {

        let median;

        if (element > min && min != 0) {
            this.insertMinHeap(element);
        }
        else {

            this.insertMaxHeap(element);
        }

        let minLength = minHeap.length;
        let maxLength = maxHeap.length;

        if (minLength == maxLength) {

            median = (minHeap[0] + maxHeap[0]) / 2;
            // this.insertMinHeap(median);
            // median = minHeap.peek();
            return median;

        }
        else if (minLength > maxLength) {

            // median = minHeap.peek();
            if (minLength - maxLength > 1) {

                this.insertMaxHeap(minHeap.shift());

                let edge = Math.floor(minHeap.length / 2) - 1;

                for (let i = edge; i >= 0; i--) {
                    this.heapifyMin(minHeap, i);
                }

                median = (minHeap[0] + maxHeap[0]) / 2;
            }
            else {
                median = minHeap[0];
            }

            return median;
        }
        else {

            if (maxLength - minLength > 1) {

                this.insertMinHeap(maxHeap.shift());

                let edge = Math.floor(maxHeap.length / 2) - 1;

                for (let i = edge; i >= 0; i--) {
                    this.heapifyMax(maxHeap, i);
                }
                median = (minHeap[0] + maxHeap[0]) / 2;
            }
            else {
                median = maxHeap[0];
            }

            // median = maxHeap.peek();

            return median;

        }

    },

    insertMaxHeap(element) {

        maxHeap.push(element);

        let edge = Math.floor(maxHeap.length / 2) - 1;

        for (let i = edge; i >= 0; i--) {
            this.heapifyMax(maxHeap, i);
        }

    },

    insertMinHeap(element) {

        minHeap.push(element);

        let edge = Math.floor(minHeap.length / 2) - 1;

        for (let i = edge; i >= 0; i--) {
            this.heapifyMin(minHeap, i);
        }

    },

    heapifyMin(arr, index) {

        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let length = arr.length;
        let largest;

        if (leftChild <= length && arr[leftChild] < arr[index]) {
            largest = leftChild;
        }
        else {
            largest = index;
        }

        if (rightChild <= length && arr[rightChild] < arr[largest]) {
            largest = rightChild;
        }

        if (largest != index) {
            arr[largest] = arr[index] ^ arr[largest];
            arr[index] = arr[largest] ^ arr[index];
            arr[largest] = arr[index] ^ arr[largest];
            this.heapifyMax(arr, largest);
        }

    },

    heapifyMax(arr, index) {

        let leftChild = 2 * index + 1;
        let rightChild = 2 * index + 2;
        let length = arr.length;
        let largest;

        if (leftChild <= length && arr[leftChild] > arr[index]) {
            largest = leftChild;
        }
        else {
            largest = index;
        }

        if (rightChild <= length && arr[rightChild] > arr[largest]) {
            largest = rightChild;
        }

        if (largest != index) {
            arr[largest] = arr[index] ^ arr[largest];
            arr[index] = arr[largest] ^ arr[index];
            arr[largest] = arr[index] ^ arr[largest];
            this.heapifyMax(arr, largest);
        }

    }


}