import LinkedList from './linkedList';

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(7);
list.add(8);

//list.head.next.next.next.next.next.next.next.next = list.head.next.next.next;
list.head.next.next = list.head;
let detectLoop = (head) => {
    if(head === null)
        return false;
    else if(head.next === null)
        return false;
        
    let slow = head.next, fast = head.next.next, hasCycle = true;

    while(slow !== fast){
        if(fast === null || fast.next === null){
            hasCycle = false;
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return hasCycle;
}

console.log(detectLoop(list.head));