// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let rootToLeafPathSum = (node, number) => {
    if(node == null)
        return false;

    if(node.left == null && node.right == null){
        number = number - node.data;
        if(number === 0){
            return true;
        }
    }

    return (rootToLeafPathSum(node.left,number - node.data) || rootToLeafPathSum(node.right,number - node.data))
}


let answers = sampleTrees.map((tree) => {
    return (rootToLeafPathSum(tree, 9));
});

printQAUtil.printAnswers(answers);