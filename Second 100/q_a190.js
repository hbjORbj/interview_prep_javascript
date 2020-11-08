/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.
*/

var mergeKLists = function(lists) {
    if (lists.length == 0) return null;
    if (lists.length == 1) return lists[0];
    
    let dummy = new ListNode(), cur = dummy;
    
    while (true) {
        let min = Infinity;
        let obj = {minList: null, idx: null};
        for (let i = 0; i < lists.length; i++) {
            let val = lists[i] ? lists[i].val : Infinity;
            if (val < min) {
                min = val
                obj = {minList: lists[i], idx: i};
            }       
        }    
        cur.next = obj.minList;
        cur = cur.next;
        if (obj.minList) lists[obj.idx] = obj.minList.next;
        else break; // every list is at its end
    }
    
    return dummy.next;
    
    // Time Complexity: O(k*n)
    // Space Complexity: O(1)
};