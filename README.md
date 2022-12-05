# Balanced Search Tree

A brief description of what this project does

A balanced search tree is a type of tree data structure that is designed to maintain a balance between the left and right subtrees of every node in the tree. This balance helps to ensure that the tree remains relatively efficient, even as it grows larger and larger. In a balanced search tree, the height of the left and right subtrees of every node may differ by no more than one, and the tree is restructured as needed to maintain this balance.

Functions

- `Node(value)` node constructor

`Tree(array)` will remove duplicates from the array and create balanced search tree;

`Insert(value)` insert value on the leaf node;

`Delete(value)` remove node with given value from the tree;

`find(value)` accepts a value and returns the node with the given value;

`levelOrder` accepts another function as a parameter. It will traverse the tree in breadth-first level order and provide each node as the argument to the provided function.

`inorder`, `preorder`, `postorder` functions that accept a function parameter. Each of these functions should traverse the tree in their respective depth-first order and yield each node to the provided function given as an argument. The functions should return an array of values if no function is given.

`height()` accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.

`depth()` function which accepts a node and returns its depth. Depth is defined as the number of edges in path from a given node to the tree’s root node.

`isBalanced` function which checks if the tree is balanced. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.

`rebalance` function which rebalances an unbalanced tree.

## 🔗 Links

[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/cjski_web3)
