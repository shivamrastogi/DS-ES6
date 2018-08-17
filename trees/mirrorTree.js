import printQAUtil from './printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});
printQAUtil.printQuestions(questions);

let mirrorTree = (node) => {
    if (node == null)
        return null;

    let leftSubTree = mirrorTree(node.left);
    let rightSubTree = mirrorTree(node.right);

    node.right = leftSubTree;
    node.left = rightSubTree;
    return node;
}

let answers = sampleTrees.map((tree) => {
    return preorder(mirrorTree(tree));
});

printQAUtil.printAnswers(answers);