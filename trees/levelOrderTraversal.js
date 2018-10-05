// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/level-order-tree-traversal/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let levelOrder = (node) => {
    let queue = [node],
        str = '';

    while(queue.length) {
        let currentNode = queue.shift();
            str += currentNode.data + ' ';

        if (currentNode.left)
            queue.push(currentNode.left);

        if (currentNode.right)
            queue.push(currentNode.right);      
        
    }
    return str;
}

let answers = sampleTrees.map((tree) => {
    return (levelOrder(tree));
});

printQAUtil.printAnswers(answers);