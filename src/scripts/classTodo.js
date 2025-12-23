export class Todo{

    constructor(id, name, checked){
        this.id = id
        this.name = name
        this.checked = checked
    }

    createElementTodo(){
        let elementTodo = document.createElement('div')
        elementTodo.classList.add('todoContainer')

        let todoSpan = document.createElement('span')
        todoSpan.setAttribute('class', 'todo')

        let inputRadius = document.createElement('i')
        inputRadius.classList.add('ri-checkbox-blank-circle-line') 
        inputRadius.classList.add('btnCheckTodo')
        todoSpan.appendChild(inputRadius)
        inputRadius.addEventListener('click', ()=>{
            inputRadius.classList.toggle('ri-checkbox-blank-circle-line')
            inputRadius.classList.toggle('ri-checkbox-circle-fill')
            elementTodo.classList.toggle('todoChecked')
        })

        let nameTodo = document.createElement('p')
        nameTodo.innerText = this.name
        todoSpan.appendChild(nameTodo)

        elementTodo.appendChild(todoSpan)

        let btnDelete = document.createElement('i')
        btnDelete.classList.add('ri-delete-bin-7-line')
        btnDelete.classList.add('btnDeleteTodo')

        elementTodo.appendChild(btnDelete)

        return elementTodo
    }

}