import LinkedList from './linkedList';

let list = new LinkedList();
list.add(1);
list.printList();
list.delete(0);
list.printList();
list.delete(1);
list.printList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.delete(3);
list.delete(1);
list.printList();
console.log(list.search(1, list.head))
console.log(list.search(2, list.head))