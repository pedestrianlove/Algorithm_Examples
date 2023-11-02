import { SortingInterface } from "../SortingInterface.js";

export class QuickSort implements SortingInterface {
    static swap (x: number, y: number): Array<number> {
        return [y, x];
    }

    Partition (A: Array<number>, p: number, r: number): number {
        const x = A[r];
        let i = p - 1;

        for (let j = p; j <= r-1 ; j++) {
            if (A[j] <= x) {
                i++;
                [A[i], A[j]] = QuickSort.swap(A[i], A[j]);
            }
        }

        [A[i+1], A[r]] = QuickSort.swap(A[i+1], A[r]);

        return i+1;
    }

    QuickSort (A: Array<number>, p: number, r: number) {
        if (p < r) {
            const q = this.Partition(A, p, r);
            this.QuickSort(A, p, q-1);
            this.QuickSort(A, q+1, r);
        }
    }

    Sort (A: Array<number>) {
        this.QuickSort(A, 0, A.length - 1);
    }
}
