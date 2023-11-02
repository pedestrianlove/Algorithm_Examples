import assert from 'assert';
import { HeapSort } from "../src/Sorting/HeapSort.js";

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
]

describe('Sorting Algorithms', function () {
  Sorters.forEach(({name, instance}) => {
    describe(name, function () {
      for (let i = 0; i < 5; i++) {
        const args = generateRandomIntArray(50, 1, 1000);
        const expected = args.toSorted((a, b) => a - b);

        it(`correctly sort the given array: ${args} using ${name}`, function () {
          const sortingInstance = instance;
          sortingInstance.Sort(args);
          assert.deepEqual(args, expected);
        });
      }
    });
  })
});

