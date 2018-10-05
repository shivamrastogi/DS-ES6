import ListNode from "./listNode";

class LinkedList {
    constructor(){
        this.head = null;
    }

    add(data) {
        let end = this.getListEnd();
        if(end)
            end.next = new ListNode(data);
        else
            this.head = new ListNode(data);
    }

    getListEnd() {
        let temp = this.head;
        while(temp && temp.next != null) {
            temp = temp.next;
        }
        return temp;
    }

    printList() {
        let temp = this.head,
            str = ''
        while(temp != null){
            str += (temp.data) + ' ';
            temp = temp.next;
        }
        console.log(str);
    }

    reverse() {
        let current = this.head,
            next = null,
            prev = null;

        while(current != null){
            next = current.next
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    delete(position) {
        if(position === 0){
            this.head = this.head.next;
            return;
        }
        
        let temp = this.head,
        prev = null;
        while(position){
            position--;
            prev = temp;
            if(temp === null){
                break;
            }
            temp = temp.next;
        }

        if(prev !== null)
        prev.next = prev.next.next;
    }

    search(key, node){
        if(node === null)
            return -1;

        if(node.data === key)
            return node;
        
        return this.search(key, node.next);
    }
}


export default LinkedList;