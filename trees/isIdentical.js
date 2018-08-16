import sampleTrees from './sampleTree';
import printQAUtil from './printQA';
printQAUtil.printQuestions(sampleTrees);

let isIdentical = (root1, root2) => {
    if (root1 == null && root2 == null)
        return true;
    else if(root1 == null || root2 == null)
        return false;

    let identicalLeftTree = isIdentical(root1.left, root2.left);
    let identicalRightTree = isIdentical(root1.right, root2.right);

    return (identicalLeftTree && identicalRightTree && root1.data === root2.data);
}


let answers = [];
answers.push(isIdentical(sampleTrees[0],sampleTrees[0]));
answers.push(isIdentical(sampleTrees[0],sampleTrees[1]));

printQAUtil.printAnswers(answers);