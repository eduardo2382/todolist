// importa as classes storage e todo
import { Storage } from './storage.js'
import { Todo } from './classTodo.js'

//seleciona elementos que serao usados no codigo
const inputNewTodo = document.querySelector('#inputNewTodo')
const btnAddTodo = document.querySelector('#btnAddTodo')
const listTodo = document.querySelector('#listTodo')
const alert = document.querySelector('#alert')

//instancia um objeto storage
const storage = new Storage("todolist")

//quando o botao de adicionar for clicado verifica o input e caso esteja tudo certo adiciona um objeto com os dados necessarios no storage e depois atualiza os elementos na tela com o novo storage
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

    //verifica se tem itens no storage
    if(storage.numberOfItems() > 0){
        alert.style.display = 'none'

        //percorre o storage executando uma funcao para cada item
        storage.mapStorage((todoData)=>{
            //instancia um novo obj todo com os dados do item do storage
            let todo = new Todo(todoData.id, todoData.name, todoData.checked)
            
            //ouve o evento checked do todo e atualiza o item do storage com o novo estado do obj todo
            todo.elementTodo.addEventListener('checkedTodo', ()=>{
                storage.updateStorage({
                    id: todoData.id,
                    name: todoData.name,
                    checked: todo.checked
                })
            })

            todo.elementTodo.addEventListener('deleteTodo', ()=>{
                storage.removeStorage(todoData.id)

                updateTodosElements()
            })
            
            //adiciona o elemento do todo na tela
            listTodo.appendChild(todo.elementTodo)
        })
    }else{
        // caso nao tenha itens no storage mostra o alerta na tela
        alert.style.display = 'block'
    }
}

// aciona a funcao de atualizar os elementos todo  ja no storage na tela assim que o codigo é rodado 
updateTodosElements()

