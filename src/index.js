import Node from "./node.js";
import prettyPrint from "./prettyPrint.js";

class Tree {
  constructor(array) {
    this.sortedArray = Array.from(new Set(array));
    this.root = this.buildTree(this.sortedArray);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);
    return root;
  }

  insert(value, root = this.root) {
    if (root === null) {
      root = new Node(value);
      return root;
    } else if (value < root.value) {
      root.left = this.insert(value, root.left);
    } else if (value > root.value) {
      root.right = this.insert(value, root.right);
    }
    return root;
  }

  remove(value, root = this.root) {
    if (root === null) return null;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value == value) {
        // found a match
        // Option 1: no right child
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }
        // Option 2: Right child with no left child
        else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            // if parent > current - make right child of the leaf parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            }

            // if parent < current - make right child a right child of the parent
            else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        } // Option 3: right child has a left child
        else {
          // find right child's left most child
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left != null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // Parent's left subtree is now leftmost's right subtree
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true;
      }
    }
  }

  find(value, root = this.root) {
    if (root === null) return root;
    if (value < root.value) {
      return this.find(value, root.left);
    } else if (value > root.value) {
      return this.find(value, root.right);
    } else {
      return root;
    }
  }

  levelOrder(arr = [], queue = [], root = this.root) {
    if (root === null) return root;
    // Visiting root node
    arr.push(root.value);

    // add left and right children to the queue
    queue.push(root.left);
    queue.push(root.right);

    // move to the next level
    while (queue.length) {
      const level = queue[0];
      queue.shift();
      this.levelOrder(arr, queue, level);
    }
    return arr;
  }

  inorder(arr = [], root = this.root) {
    if (root === null) return root;

    // traverse left subtree
    if (root.left) this.inorder(arr, root.left);

    // visit node
    arr.push(root.value);

    // traverse right subtree
    if (root.right) this.inorder(arr, root.right);

    return arr;
  }

  preorder(arr = [], root = this.root) {
    if (root === null) return root;

    // visit node
    arr.push(root.value);

    // traverse left subtree
    if (root.left) this.preorder(arr, root.left);

    // traverse right subtree
    if (root.right) this.preorder(arr, root.right);

    return arr;
  }

  postorder(arr = [], root = this.root) {
    if (root === null) return root;

    // traverse left subtree
    if (root.left) this.preorder(arr, root.left);

    //traverse right subtree
    if (root.right) this.preorder(arr, root.right);

    // visit node
    arr.push(root.value);

    return arr;
  }
}

const tree = new Tree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
tree.insert(10);
//tree.remove("7");

prettyPrint(tree.root);
//console.log(tree.inorder());
//console.log(tree.preorder());
//console.log(tree.postorder());
