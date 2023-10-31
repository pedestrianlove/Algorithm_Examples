function swap (x: number, y: number) {

    return [y, x];
}

function Max_Heapify(A: Array<number>, heap_size: number, i: number) {

    const [l, r] = [2*i, 2*i + 1];

    let largest = (l < heap_size && A[l] > A[i])
        ? l
        : i;

    largest = (r < heap_size && A[r] > A[largest])
        ? r
        : largest;

    if (largest != i) {
        [A[i], A[largest]] = swap(A[i], A[largest]);
        Max_Heapify(A, heap_size, largest);
    }
}

function Build_Max_Heap(A: Array<number>, n: number) {

    const heap_size = n;

    for(let i = Math.floor(n/2) ; i >= 0; i--) {
        Max_Heapify(A, heap_size, i);
    }
}

function HeapSort (A: Array<number>, n: number) {

    Build_Max_Heap(A, n);
    let heap_size = n;

    for (let i = n-1 ; i >= 1 ; i--) {
        [A[0], A[i]] = swap(A[0], A[i]);
        heap_size--;
        Max_Heapify(A, heap_size, 0);
    }
}

// Simple test driver code
const arr = [3, 1, 2, 4, 5, 6, 8, 10, 12, 13];
HeapSort(arr, arr.length);
console.log(arr);
