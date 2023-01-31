const addElement = (event, node, txt, attr, value) => {
    event.preventDefault();
    const element = document.createElement(node);
    
    if (txt) {
        const text = document.createTextNode(txt);
        element.appendChild(text);
    };
    
    if (attr) {
        element.setAttribute(attr, value);
    };
    document.querySelector('.content').appendChild(element);
};

const addForm = document.querySelector('.form--add');
addForm.addEventListener('submit', (event) => addElement(
    event,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
));