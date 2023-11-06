import { SortingInterface } from "../SortingInterface.js";

export class CountingSort implements SortingInterface {

    CountingSort(A: Array<number>, n: number, k: number): Array<number> {
        const B: Array<number> = [];
        const C: Array<number> = [];
        for (let i = 0; i <= k; i++)
            C[i] = 0;
        for (let i = 0; i < n; i++)
            C[A[i]]++;

        for (let i = 0; i <= k; i++) {
            while (C[i]--) {
                B.push(i);
            } 
        }

        return B;
    }

    Sort(A: Array<number>): Array<number> {
        return this.CountingSort(A, A.length, 1000);
    }
}
