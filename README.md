# 1. 估計執行時間
## a. Notations
$$
  \Theta(g(n)) = \\{ f | \exists c_1, c_2, n_0 \Rightarrow 0 \leq c_1g(n) \leq f(n) \leq c_2g(n), \forall n\geq n_0 \\}  \\
$$

$$
  O(g(n)) = \\{ f | \exists c, n_0 \Rightarrow 0 \leq f(n) \leq cg(n), \forall n \geq n_0 \\}  \\
$$

$$
  \Omega(g(n)) = \\{ f | \exists c, n_0 \Rightarrow 0 \leq cg(n) \leq f(n), \forall n \geq n_0 \\}
$$

- Misc.

$$
  lg(n!) = \Theta(nlgn)
$$

## b. Recursion
### i. Substitution method (代入法)
- 猜解
- 代入用數學歸納法求證。
### ii. Recursion tree method (畫遞迴樹)
- 列出每層遞迴的成本，並依樹的高度來估計時間複雜度。
### iii. Master Theorem
比 $n^{\log_b(a)}$ 跟 $\log_n(f(n))$ 的大小(使用時間複雜度看):
- Case 1. $n^{\log_b(a)}$ 大，則 $T(n) = \Theta(n^{\log_b(a)})$
- Case 2. 平手，則 $T(n) = \Theta(n^{\log_b(a)}\log(n)) $
- Case 3. $\log_n(f(n))$ 大，且 $af(\frac{n}{b}) = c(f(n)), c<1, n\geq n_0$ ，則 $T(n)=\Theta(f(n))$

# 3. Sorting Algorithms
## a. Merge Sort
https://github.com/pedestrianlove/Algorithm_Examples/blob/214cf53e32fb7d96fc4fce7ad31f908cf89f4bf1/src/Sorting/MergeSort.ts#L3-L42
## b. Heap Sort
https://github.com/pedestrianlove/Algorithm_Examples/blob/214cf53e32fb7d96fc4fce7ad31f908cf89f4bf1/src/Sorting/HeapSort.ts#L3-L54
## c. Quick Sort
https://github.com/pedestrianlove/Algorithm_Examples/blob/214cf53e32fb7d96fc4fce7ad31f908cf89f4bf1/src/Sorting/QuickSort.ts#L3-L36

# 4. Medians and order statistics

# 5. Binary Search Tree
