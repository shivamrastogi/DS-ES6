let html = '';
let _preorder = (root) => {
    if (root == null)
        return;
    
    html += `<span>${root.data} </span>`;
    _preorder(root.left);
    _preorder(root.right);
}

let preorder = (root) => {
    html = '';
    _preorder(root);
   return `<p>${html}</p>`;
}

export default preorder;