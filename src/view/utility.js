/* eslint-disable require-jsdoc */
export function makeTemplateElement(innerElement) {
    const template = document.createElement('template');
    template.content.appendChild(innerElement);
    return template.content;
}

export function makeElement(tagName, innerElement = null) {
    if (innerElement === null) {
        return document.createElement(tagName);
    }

    const creatElement = document.createElement(tagName);
    creatElement.appendChild(innerElement);
    return creatElement;
}
