function validate(head, lower_limit, upper_limit) {
    if(!head) return true;
    
    if((lower_limit != null && head.val <= lower_limit) || (upper_limit != null && head.val >= upper_limit)) {
        return false;
    }
    
    return validate(head.right, head.val, upper_limit) && validate(head.left, lower_limit, head.val);
}

function isValidBinarySearchTree(root) {
    return validate(root, null, null);
};