import { Storage } from './storage.js'
import { Todo } from './classTodo.js'

const inputNewTodo = document.querySelector('#inputNewTodo')
const btnAddTodo = document.querySelector('#btnAddTodo')

const storage = new Storage("todolist")


btnAddTodo.addEventListener('click', ()=>{
    let todoName = inputNewTodo.value
    if(todoName.length > 0){
        let todo = new Todo(todoName)

        storage.addStorage(todo)

        inputNewTodo.value = ""
        inputNewTodo.focus()
    }
});

