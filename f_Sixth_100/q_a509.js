/*
Add Two Polynomials Represented as Linked Lists


A polynomial linked list is a special type of linked list where every node represents a term in a polynomial expression.

Each node has three attributes:

coefficient: an integer representing the number multiplier of the term. The coefficient of the term 9x4 is 9.
power: an integer representing the exponent. The power of the term 9x4 is 4.
next: a pointer to the next node in the list, or null if it is the last node of the list.

The polynomial linked list must be in its standard form: the polynomial must be in strictly descending order by its power value. 

Also, terms with a coefficient of 0 are omitted.

Given two polynomial linked list heads, poly1 and poly2, add the polynomials together and return the head of the sum of the polynomials.
*/

/*
Solution

1. Iterate through both lists simultaenously
2. Compare a term in list1 with a term in list2
if they have the same power
    add up the coefficients and advance both nodes to the next
else if one list's power is greater
    append the greater node and advance it to the next node

Append the remaining list to tail
*/
var addPoly = function (poly1, poly2) {
  let dummyHead = new PolyNode();
  let cur = dummyHead;
  let cur1 = poly1,
    cur2 = poly2;
  while (cur1 && cur2) {
    if (cur1.power === cur2.power) {
      cur1.coefficient += cur2.coefficient;
      if (cur1.coefficient !== 0) {
        cur.next = cur1;
        cur = cur.next;
      }
      cur1 = cur1.next;
      cur2 = cur2.next;
    } else if (cur1.power > cur2.power) {
      cur.next = cur1;
      cur = cur.next;
      cur1 = cur1.next;
    } else {
      cur.next = cur2;
      cur = cur.next;
      cur2 = cur2.next;
    }
  }
  // Cut off list at tail
  cur.next = null;

  // Append the remaining list
  if (cur1) {
    cur.next = cur1;
  }
  if (cur2) {
    cur.next = cur2;
  }
  return dummyHead.next;
  // T.C: O(min(M, N))
  // S.C: O(1)
};
