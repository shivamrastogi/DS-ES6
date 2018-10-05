import sampleList from './sampleList';

var head = sampleList[0];
var rest;
function reverse(node) {
    if(node.next === null)
        return;

    var first = node;
    rest = node.next;

    if(rest === null)
        return;

    reverse(rest);

    first.next.next = first;

    first.next = null;
   node = rest;
  return node;
}

ab = reverse(head);

reverse(head);

console.log(ab);