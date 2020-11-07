/*
Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

After doing so, return the head of the final linked list.  You may return any such answer.
*/

var removeZeroSumSublists = function(head) {
    let dummy = new ListNode();
    let cur = head;
    dummy.next = head;
    let m = new Map();
    m.set(0, dummy);
    let prefixSum = 0;
    while (cur !== null) {
        prefixSum += cur.val;
        if (m.has(prefixSum)) {
            // save pointer to next node
            let next = cur.next;

            // delete the nodes in between from map
            let temp = m.get(prefixSum).next;
            let tempPrefixSum = prefixSum;
            while (temp !== cur && temp !== null) {
                tempPrefixSum += temp.val;
                m.delete(tempPrefixSum);
                temp = temp.next;
            }

            // set a new cur
            cur = m.get(prefixSum);
            cur.next = next;
        } else {
            m.set(prefixSum, cur);
        }
        cur = cur.next;
    }
    
    return dummy.next;
    // Time Complexity: O(2n) = O(n);
    // Why O(2n)? ex) [1,2,3,4,5,-15]; we scan through the list forth and back here
    // Space Complexity: O(n)
};