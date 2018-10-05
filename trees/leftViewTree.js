// https://www.geeksforgeeks.org/level-order-tree-traversal/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/');

let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});
printQAUtil.printQuestions(questions);

let height = {h: -1}, str = '';
let leftViewTree = (node, height, h) => {
    if (node == null)
        return;

    if(height.h < h) {
        str += `<span> ${node.data} </span>`;
    }

    leftViewTree(node.left, height, h++);
    leftViewTree(node.right, height, h++);
}


sampleTrees.map((tree) => {
    str = '';
    leftViewTree(tree, height, 0);
    answers.push(str);
});

printQAUtil.printAnswers(answers);