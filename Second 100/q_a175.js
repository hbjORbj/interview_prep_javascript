// Given a sorted linked list, delete all duplicates such that each element appear only once.

var deleteDuplicates = function(head) {
    let dummy = new ListNode();
    let cur = dummy;
    
    while (head !== null) {
        if (head.next == null || head.val !== head.next.val) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    
    return dummy.next;
    
    // Time Complexity: O(n)
    // Space Complexity: O(1)
};

function ListNode(val, next) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
}

let node1 = new ListNode(1);
let node2 = new ListNode(1);
let node3 = new ListNode(1);
let node4 = new ListNode(2);
let node5 = new ListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(deleteDuplicates(node1)); // => 1 -> 2 -> null