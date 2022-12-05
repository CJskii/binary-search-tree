import Node from "./node.js";

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
    //console.log({ root, left: root.left, right: root.right });
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
    if (root === null) return root;
    const node = this.find(value, root);
    console.log(node);
    // if node has one child
    if (node.right === null) {
    } else if (node.left === null) {
    }
    // if node has two childs
    else {
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
}

const tree = new Tree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
tree.insert("10");
tree.remove("10");

/*

find(value, root = this.root) {
    if (root === null) return root;
    if (value < root.value) {
      root.left = this.find(value, root.left);
    } else if (value > root.value) {
      root.right = this.find(value, root.right);
    } else {
      console.log("returning");
      return root;
    }
  }

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

prettyPrint(tree.root);
*/
