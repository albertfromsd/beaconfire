// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 // Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2
 
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
 

 var maxDepth = function(root) {
    //   // base case: single node, no child  
    //   if (!root) { return 0; };
    //   // return the child node max depth plus 1 
    //   return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
    
      // iterative solution
      if (!root) return 0;
    
      // initialize the queue for the nodes
      // start with the root in the queue
      let queue = [[root]];

      // initizlize the depth tracker variable
      let depth = 0;
      // a while loop with condition queue.length
      while (queue.length) {
        let curLevel = queue.shift();
        let nextLevel = [];
        for (let i = 0; i < curLevel.length; i++) {
          let curNode = curLevel[i];
          if (curNode.left) nextLevel.push(curNode.left);  
          if (curNode.right) nextLevel.push(curNode.right);
        
        }
        queue.push(nextLevel);
        depth++; 
      };
    
      return depth;
    };
    
    
    
    
    
    
    
    