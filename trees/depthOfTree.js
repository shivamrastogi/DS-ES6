import sampleTrees from './sampleTree';
import printQAUtil from '../printQA';
printQAUtil.printQuestions(sampleTrees);

let height = (node) => {
    if (node == null)
        return 0;

    let heightL = height(node.left);
    let heightR = height(node.right);

    return Math.max(heightL, heightR) + 1;
}


let answers = sampleTrees.map((tree) => {
    return (height(tree));
});

printQAUtil.printAnswers(answers);