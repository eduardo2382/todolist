import { Storage } from './storage.js'
import { Todo } from './classTodo.js'

const inputNewTodo = document.querySelector('#inputNewTodo')
const btnAddTodo = document.querySelector('#btnAddTodo')
const listTodo = document.querySelector('#listTodo')
const alert = document.querySelector('#alert')

const storage = new Storage("todolist")


btnAddTodo.addEventListener('click', ()=>{
    let todoName = inputNewTodo.value
    if(todoName.length > 0){
        storage.addStorage({
            id: crypto.randomUUID(),
            name: todoName,
            checked: false
        })

        inputNewTodo.value = ""
        inputNewTodo.focus()
    }

    updateTodosElements()
});

function updateTodosElements(){
    listTodo.innerHTML = ''

    if(storage.numberOfItems() > 0){
        alert.style.display = 'none'

        storage.mapStorage((todoData)=>{
            let todo = new Todo(todoData.id, todoData.name, todoData.checked)

            listTodo.appendChild(todo.createElementTodo())
        })
    }else{
        alert.style.display = 'block'
    }
}

updateTodosElements()



