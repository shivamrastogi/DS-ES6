// https://www.geeksforgeeks.org/given-a-binary-tree-print-out-all-of-its-root-to-leaf-paths-one-per-line/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});
printQAUtil.printQuestions(questions);
let str, answers = [];
let rootToLeafPath = (node, arr,index) => {
    if(node == null)
    return;
    
    if (node.left == null && node.right == null){
        arr[index] = node.data;
        str += ' '
        for(let i = 0; i <= index; i++){
            str += arr[i];
        }
        return;
    }
        
    arr[index] = node.data;
    rootToLeafPath(node.left,arr, index+1);
    rootToLeafPath(node.right,arr, index+1);
}

sampleTrees.forEach((tree) => {
    str = '';
    rootToLeafPath(tree, [], 0);
    answers.push(str);
});

printQAUtil.printAnswers(answers);