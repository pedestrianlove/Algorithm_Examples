import { SortingInterface } from "../SortingInterface.js";

export class MergeSort implements SortingInterface {
    Merge(A: Array<number>, l: number, middle: number, r: number) {
        const L = A.slice(l, middle + 1);
        const R = A.slice(middle + 1, r+1);

        // Merge array
        let [i, j, k] = [0, 0, l];
        while (i < L.length && j < R.length) {
            if (L[i] <= R[j]) {
                A[k++] = L[i++];
            } else {
                A[k++] = R[j++];
            }
        }

        while (i < L.length) {
            A[k++] = L[i++];
        }
        while (j < R.length) {
            A[k++] = R[j++];
        }
    }

    MergeSort(A: Array<number>, l: number, r: number): void {
        if (l >= r) {
            return;
        }

        const middle = Math.floor((l + r) / 2);
        this.MergeSort(A, l, middle);
        this.MergeSort(A, middle + 1, r);

        this.Merge(A, l, middle, r);
    }

    Sort(A: Array<number>): Array<number> {
        this.MergeSort(A, 0, A.length-1);
        return A;
    }
}
