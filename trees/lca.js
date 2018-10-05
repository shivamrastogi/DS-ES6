// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let lca = (node, a, b) => {
    if (node == null)
        return null;

    if(node.data == a || node.data == b)
        return node;

    let leftSub = lca(node.left, a, b);
    let rightSub = lca(node.right, a, b);

    if(leftSub && rightSub)
        return node;
    
    return leftSub ? leftSub : rightSub;
}


let answers = sampleTrees.map((tree) => {
    return (lca(tree, 2, 5).data);
});

printQAUtil.printAnswers(answers);