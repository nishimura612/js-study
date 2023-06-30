/* eslint-disable require-jsdoc */
export class TodoListModel {
    constructor(items = []) {
        this.items = items;
    }

    getTotalCount() {
        return this.items.length;
    }

    getTodoItems() {
        return this.items;
    }

    addTodo(todoItem) {
        this.items.push(todoItem);
    }

    onChange() {
        this.addEventList;
    }

    updateTodo({ id, completed }) {
        // `id`が一致するTodoItemを見つけ、あるなら完了状態の値を更新する
        const todoItem = this.items.find((todo) => todo.id === id);
        if (!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }
}
