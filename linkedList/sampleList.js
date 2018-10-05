import ListNode from './listNode';

let sampleList = [];

let temp = new ListNode(1),
    head = temp;
[2,3,4,5].forEach((val) => {
    temp.next = new ListNode(val);
    temp = temp.next;
});
sampleList[0] = head;

export default sampleList;