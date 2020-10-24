/*
A peak element in an array A is an A[i] where its neighboring elements are less than A[i]. 

So, A[i - 1] < A[i] and A[i + 1] < A[i].

Assume there are no duplicates. Also, assume that A[-1] and A[length] are negative infinity (-∞). 

So A[0] can be a peak if A[1] < A[0].

Qs:
1. What if there are multiple peaks?
- Return any of them.
2. How do you want the output?
- Index.
3. Can the array contain negative numbers?
- Yes.
4. What if the array is empty or null?
- Return -1.
*/

[1,3,2,5,4] => 1 or 3