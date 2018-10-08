// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/


import printQAUtil from '../printQA';
import sampleTrees from './sampleTree';
import preorder from './preorder';

printQAUtil.printQuesHeading('https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/description/');


let questions = sampleTrees.map((tree) => {
    return preorder((tree));
});

printQAUtil.printQuestions(questions);

let distanceK = function(root, target, K) {
    var ans = [];
    findTarget(root, target, K, ans);
    return ans;
};

let findTarget = function(root, target, K, ans) {
    if(root === null)
        return -1;

    if(root.data === target) {
        addNodes(root, K, ans)
        return 1;
    }
    else {
        var L = findTarget(root.left, target, K, ans),
            R = findTarget(root.right, target, K, ans);

        if(L !== -1) {
            if (L == K) ans.push(root.data);
            addNodes(root.right, K - L - 1, ans);
            return L + 1;
        } else if(R !== -1) {
            if (R == K) ans.push(root.data);
            addNodes(root.left, K - R - 1, ans);
            return R + 1;
        } else {
            return -1;
        }
    }
}

let addNodes = function(root, level, ans) {
    if(root === null)
        return;

    if(level === 0)
        ans.push(root.data);

    addNodes(root.left, level-1, ans);
    addNodes(root.right, level-1, ans);
}


let answers = sampleTrees.map((tree) => {
    return (distanceK(tree, 5, 2));
});

printQAUtil.printAnswers(answers);