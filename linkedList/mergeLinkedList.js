import LinkedList from './linkedList';

let list1 = new LinkedList();
list1.add(1);
list1.add(3);
list1.add(6);
list1.add(8);
list1.add(10);


let list2 = new LinkedList();
list2.add(4);
list2.add(5);
list2.add(9);

function mergeList(list1, list2) {
    let tempMergeList = new LinkedList(),
        head1 = list1.head,
        head2 = list2.head;

    while(head1 || head2) {
        if(head1 && head2){
            if(head1.data > head2.data){
                tempMergeList.add(head2.data);
                head2 = head2.next;
            } else {
                tempMergeList.add(head1.data);
                head1 = head1.next;
            }
        } else if(head1) {
            tempMergeList.add(head1.data);
            head1 = head1.next;
        }else {
            tempMergeList.add(head2.data);
                head2 = head2.next;
        }
    }

    return tempMergeList;
}

console.log(mergeList(list1, list2).printList());