import TreeNode from './treeNode';

let sampleTrees = [];

//BT + Balanced

sampleTrees[0] = new TreeNode(1);
sampleTrees[0].left = new TreeNode(2);
sampleTrees[0].right = new TreeNode(3);
sampleTrees[0].left.left = new TreeNode(4);
sampleTrees[0].left.right = new TreeNode(5);

//BT + Balanced

sampleTrees[1] = new TreeNode(1);
sampleTrees[1].left = new TreeNode(2);
sampleTrees[1].right = new TreeNode(3);
sampleTrees[1].left.left = new TreeNode(4);
sampleTrees[1].left.right = new TreeNode(5);
sampleTrees[1].right.left = new TreeNode(6);
sampleTrees[1].right.right = new TreeNode(7);


//BST + Balanced

sampleTrees[2] = new TreeNode(4);
sampleTrees[2].left = new TreeNode(2);
sampleTrees[2].right = new TreeNode(5);
sampleTrees[2].left.left = new TreeNode(1);
sampleTrees[2].left.right = new TreeNode(3);


//BT + UnBalanced

sampleTrees[3] = new TreeNode(4);
sampleTrees[3].left = new TreeNode(2);
sampleTrees[3].right = new TreeNode(5);
sampleTrees[3].left.left = new TreeNode(1);
sampleTrees[3].left.right = new TreeNode(3);
sampleTrees[3].left.left.left = new TreeNode(7);

//SumTree
sampleTrees[4] = new TreeNode(26);
sampleTrees[4].left = new TreeNode(10);
sampleTrees[4].right = new TreeNode(3);
sampleTrees[4].left.left = new TreeNode(4);
sampleTrees[4].left.right = new TreeNode(6);
sampleTrees[4].right.left = new TreeNode(3);


//Sample for K Node
sampleTrees[5] = new TreeNode(3);
sampleTrees[5].left = new TreeNode(5);
sampleTrees[5].right = new TreeNode(1);
sampleTrees[5].left.left = new TreeNode(6);
sampleTrees[5].left.right = new TreeNode(2);
sampleTrees[5].left.right.left = new TreeNode(7);
sampleTrees[5].left.right.right = new TreeNode(4);
sampleTrees[5].right.left = new TreeNode(0);
sampleTrees[5].right.right = new TreeNode(8);
export default sampleTrees;