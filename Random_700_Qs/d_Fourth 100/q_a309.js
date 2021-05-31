/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    let newHead = new ListNode();
    let cur = newHead;
    while (true) {
        let minIdx = null;
        for (let i = 0; i < lists.length; i++) {
            if (lists[i] && (minIdx == null || lists[i].val < lists[minIdx].val)) {
                minIdx = i;
            }
        }   
        if (minIdx == null) break; // there is no more node to traverse
        cur.next = lists[minIdx];
        cur = cur.next;
        lists[minIdx] = lists[minIdx].next;
    }
    return newHead.next;
    // Time Complexity: O(k * N), N = the number of all nodes | every selection of one node costs O(k)
    // Space Complexity: O(1)
};

/*
1. Create a new head node.
2. Scan through the heads of every list and find the head with the smallest value.
3. Append this node to our list. We advance pointer of our list by one.
We advance the head with the smallest value by one as well.
4. Repeat 1,2,3 until there is no more node to traverse.
*/