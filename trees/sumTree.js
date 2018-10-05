// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/check-if-a-given-binary-tree-is-sumtree/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let isSumTree = (root) => {
    if(root === null || (root.left === null && root.right === null))
        return true;
    
    let left = isSumTree(root.left),
        right = isSumTree(root.right),
        leftVal = root.left === null ? 0 : root.left.data,
        rightVal = root.right === null ? 0 : root.right.data;

    if(left && right){
        if (root.data === leftVal + rightVal) {
            root.data += (leftVal + rightVal);
            return true;
        }
    }

    return false;
}

let answers = sampleTrees.map((tree) => {
    return (isSumTree(tree));
});

printQAUtil.printAnswers(answers);