let todoIdx = 0;
/* eslint-disable require-jsdoc */
export class TodoItemModel {
    constructor({ title }) {
        this.id = todoIdx++;
        this.title = title;
        this.completed = false;
    }

    changeComplated() {
        this.completed = true;
    }
}
