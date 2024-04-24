/** Eliminar un BST
 * 
 * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (root === null) {
        return null;
    }


    if (key < root.val) {
        root.left = deleteNode(root.left, key);
        return root;
    }

    else if (key > root.val) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    else {

        if (!root.left && !root.right) {
            return null;
        }

        else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }

        else {

            let successor = root.right;
            while (successor.left) {
                successor = successor.left;
            }

            root.val = successor.val;

            root.right = deleteNode(root.right, successor.val);
            return root;
        }
    }
};


/**Reemplazar palabras */

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {


    const words = sentence.split('');


    const findRoot = (word) => {
        for (let root of dictionary) {
            if (word.startsWith(root)) {
                return root;
            }
        }
        return word;
    };


    for (let i = 0; i < words.length; i++) {
        words[i] = findRoot(words[i]);
    }


    return words.join();


};

const dictionary = ["cat",  "bat" ,  "rat" ];
const sentence =  "the cattle was rattled by the battery"
console.log(replaceWords(dictionary, sentence));

/**prefijo comun mas largo */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    if (strs.length === 0) return "";


    const referenceStr = strs[0];


    for (let i = 0; i < referenceStr.length; i++) {

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || referenceStr[i] !== strs[j][i]) {

                return referenceStr.substring(0, i);
            }
        }
    }


    return referenceStr;
};

const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); 