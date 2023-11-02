import { SortingInterface } from "../SortingInterface.js";

export class HeapSort implements SortingInterface {
    heap_size = 0;

    static swap (x: number, y: number) {

        return [y, x];
    }

    Max_Heapify(A: Array<number>, i: number) {

        const [l, r] = [2*i, 2*i + 1];

        let largest = (l < this.heap_size && A[l] > A[i])
            ? l
            : i;

        largest = (r < this.heap_size && A[r] > A[largest])
            ? r
            : largest;

        if (largest != i) {
            [A[i], A[largest]] = HeapSort.swap(A[i], A[largest]);
            this.Max_Heapify(A, largest);
        }
    }

    Build_Max_Heap(A: Array<number>, n: number) {

        this.heap_size = n;

        for(let i = Math.floor(n/2) ; i >= 0; i--) {
            this.Max_Heapify(A, i);
        }
    }

    HeapSort (A: Array<number>, n: number) {

        this.Build_Max_Heap(A, n);
        this.heap_size = n;

        for (let i = n-1 ; i >= 1 ; i--) {
            [A[0], A[i]] = HeapSort.swap(A[0], A[i]);
            this.heap_size--;
            this.Max_Heapify(A, 0);
        }
    }

    Sort (A: Array<number>) {
        this.HeapSort(A, A.length);
    }
}
