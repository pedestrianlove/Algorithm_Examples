import assert from 'assert';
import { HeapSort } from "../src/Sorting/HeapSort.js";

const test_data = [
  {args: [2, 1], expected: [1, 2]},
  {args: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5]},
  {args: [2, 1, 3], expected: [1, 2, 3]},
  {args: [2, 4, 1, 3], expected: [1, 2, 3, 4]},
  {args: [2, 1, 3, 5, 6, 4, 7, 9, 8, 10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]},
  {args: [2, 1, 11, 12, 3, 5, 13, 6, 4, 7, 9, 8, 10], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]},
]

describe('Sorting Algorithm', function () {
  test_data.forEach(({args, expected}) => {
    it(`correctly sort the given array: ${args} using HeapSort`, function () {
      const sortingInstance = new HeapSort();
      sortingInstance.Sort(args);
      assert.deepEqual(args, expected);
    });
  });
});

