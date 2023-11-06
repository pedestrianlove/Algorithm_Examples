import assert from 'assert';
import { HeapSort } from "../src/Sorting/HeapSort.js";
import { QuickSort } from "../src/Sorting/QuickSort.js";
import { MergeSort } from "../src/Sorting/MergeSort.js";
import { CountingSort } from "../src/Sorting/CountingSort.js";

function generateRandomIntArray(size, min, max) {
  const randomIntegers = [];

  for (let i = 0; i < size; i++) {
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    randomIntegers.push(randomInt);
  }

  return randomIntegers;
}

const Sorters = [
  {name: "HeapSort", instance: new HeapSort()},
  {name: "QuickSort", instance: new QuickSort()},
  {name: "MergeSort", instance: new MergeSort()},
  {name: "CountingSort", instance: new CountingSort()},
]

describe('Sorting Algorithms', function () {
  Sorters.forEach(({name, instance}) => {
    describe(name, function () {
      for (let i = 0; i < 5; i++) {
        const args = generateRandomIntArray(10, 1, 1000);
        const expected = args.toSorted((a, b) => a - b);

        it(`correctly sort the given array: ${args} using ${name}`, function () {
          const sortingInstance = instance;
          assert.deepEqual(
            sortingInstance.Sort(args),
            expected
          );
        });
      }
    });
  })
});

