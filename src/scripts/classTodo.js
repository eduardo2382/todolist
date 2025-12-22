import { createElement } from "react";

export class Todo{
    #elementTodo;

    constructor(name){
        this.name = name
    }

    #createElementTodo(){
        this.#elementTodo = createElement('div')

        let todoSpan = createElement('span')
        todoSpan.setAttribute('class', 'todo')

        let inputRadius = createElement('i')
        inputRadius.classList.add('ri-checkbox-blank-circle-line') 
        inputRadius.classLisit.add('btnCheckTodo')
        todoSpan.appendChild(inputRadius)

        let nameTodo = createElement('p')
        nameTodo.innerText = this.name
        todoSpan.appendChild(nameTodo)

        this.#elementTodo.appendChild(todoSpan)

        let btnDelete = createElement('i')
        btnDelete.classList.add('ri-delete-bin-7-line')
        btnDelete.classList.add('btnDeleteTodo')

        this.#elementTodo.appendChild(btnDelete)
    }

}