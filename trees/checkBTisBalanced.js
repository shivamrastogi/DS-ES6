// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/level-order-tree-traversal/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let checkBTisBalanced = (node) => {
    if (node == null)
        return true;

    let heightL = height(node.left),
        heightR = height(node.right),
        leftSubTree = checkBTisBalanced(node.left),
        rightSubTree = checkBTisBalanced(node.right);
    
        return (leftSubTree && rightSubTree && (Math.abs(heightL - heightR) <= 1)) 
}

let height = (node) => {
    if (node == null)
        return 0;
    
    return Math.max(height(node.left), height(node.right)) + 1;
}

let answers = sampleTrees.map((tree) => {
    return (checkBTisBalanced(tree));
});

printQAUtil.printAnswers(answers);