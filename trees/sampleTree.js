import TreeNode from './treeNode';

let sampleTrees = [];

sampleTrees[0] = new TreeNode(1);
sampleTrees[0].left = new TreeNode(2);
sampleTrees[0].right = new TreeNode(3);
sampleTrees[0].left.left = new TreeNode(4);
sampleTrees[0].left.right = new TreeNode(5);

sampleTrees[1] = new TreeNode(1);
sampleTrees[1].left = new TreeNode(2);
sampleTrees[1].right = new TreeNode(3);
sampleTrees[1].left.left = new TreeNode(4);
sampleTrees[1].left.right = new TreeNode(5);
sampleTrees[1].right.left = new TreeNode(6);
sampleTrees[1].right.right = new TreeNode(7);


//BST

sampleTrees[2] = new TreeNode(4);
sampleTrees[2].left = new TreeNode(2);
sampleTrees[2].right = new TreeNode(5);
sampleTrees[2].left.left = new TreeNode(1);
sampleTrees[2].left.right = new TreeNode(3);



export default sampleTrees;