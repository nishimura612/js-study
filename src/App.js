import { makeElement, makeTemplateElement } from './view/utility.js';
import { TodoListModel } from './model/TodoListModel.js';
import { TodoItemModel } from './model/TodoItemModel.js';

/* eslint-disable require-jsdoc */
export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
    }

    mount() {
        const form = document.querySelector('#js-form');
        const formInput = document.querySelector('#js-form-input');
        const container = document.querySelector('#js-todo-list');
        const counter = document.querySelector('#js-todo-count');

        this.todoListModel.onChange(() => {
            // TodoリストをまとめるList要素
            const todoListElement = makeElement('ul');
            // それぞれのTodoItem要素をtodoListElement以下へ追加する
            const todoItems = this.todoListModel.getTodoItems();
            todoItems.forEach((item) => {
                const todoItemElement = element`<li>${item.title}</li>`;
                todoListElement.appendChild(todoItemElement);
            });
            // コンテナ要素の中身をTodoリストをまとめるList要素で上書きする
            // render(todoListElement, containerElement);
            // アイテム数の表示を更新
            counter.innerHTML = `Todo items counts: ${this.todoListModel.getTotalCount()}`;
        });

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.todoListModel.addTodo(
                new TodoItemModel({
                    title: formInput.value,
                }),
            );

            const todoItemElement = makeElement('li');
            todoItemElement.innerHTML = `<input type='checkbox'>${formInput.value}<button>×</button>`;

            const todoListElement = makeElement('ul', todoItemElement);
            const content = makeTemplateElement(todoListElement);

            container.appendChild(content);
            formInput.value = '';

            counter.innerHTML = `Todo items counts: ${this.todoListModel.getTotalCount()}`;
        });
    }
}
