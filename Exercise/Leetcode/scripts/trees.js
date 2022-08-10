/**
* Trees
*/


/*-------------Validate Binary Search Tree-----------*/
const isValidBST = (root) => {
    function recurse(root, min, max) {
        // base cases
        if (root === null) return true;

        if((root.val >= max || root.val <= min)) {
            return false;
        }

        //recurrence relation
        return recurse(root.left, min, root.val) && recurse(root.right, root.val, max);
    }
    return recurse(root, -Infinity, Infinity)
}


/*-----------N-ary Tree Level Order Traversal------------*/
const levelOrder = (root) => {
    if (!root) return [];

    const queue = [root];
    const result = [];

    while (queue.length) {
        let len = queue.length;
        result.push(queue.map(node => node.val));

        while (len--) {
            let node = queue.shift();

            for (let child of node.children) {
                queue.push(child);
            }
        }
    }

    return result;
}


/*---------------Same Tree-------------*/
const isSameTree = (p, q) => {
    //base cases
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;

    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }

    return false;
}


/*-----------Diameter of Binary Tree------------*/
const diameterOfBinaryTree = (root) => {
    if (!root) return 0;

    let max = 0;

    const dfs = (node) => {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        max = Math.max(left + right, max);
        return Math.max(left, right) + 1
    }

    dfs(root);
    return max;
}


/*-------Sum of Left Leaves--------*/
const isLeaf = node => {
    if (!node) return false;
    return (node.left === null && node.right === null);
}

const traverseTreeAndSumLeftLeaves = (root, sum=0) => {
    if (!root) return sum;
    if (isLeaf(root)) return sum;
    if (root.left) {
        if (isLeaf(root.left)) {
            sum += root.left.val;
            traverseTreeAndSumLeftLeaves(root.left, sum);
        } else {
            sum = traverseTreeAndSumLeftLeaves(root.left, sum);
        }
    }
    if (root.right) {
        if (isLeaf(root.right)) {
            return sum;
        } else {
            sum = traverseTreeAndSumLeftLeaves(root.right, sum);
        }
    }

    return sum;
}

const sumOfLeftLeaves = (root) => {
    return traverseTreeAndSumLeftLeaves(root);
}