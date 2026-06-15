/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let slow = head;
    let fast = head.next;
    let prev = null;
    while(fast != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
        if(fast != null) fast = fast.next;
    }
    if(prev != null) prev.next = slow.next;
    else return null;
    return head;
};