import printQAUtil from './printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let isBinaryTreeABST = (node, mini, maxi) => {
    if(node === null)
        return true;

    if (node.data > mini && node.data < maxi) {
        let leftSubTree =  isBinaryTreeABST(node.left, mini, node.data);
        let rightSubTree =  isBinaryTreeABST(node.right, node.data, maxi);

        return leftSubTree && rightSubTree;
    }

    return false;
}

let answers = sampleTrees.map((tree) => {
    return (isBinaryTreeABST(tree, -Infinity, Infinity));
});

printQAUtil.printAnswers(answers);