export class Todo{
    constructor(id, name, checked){
        this.id = id
        this.name = name
        this.checked = checked
        this.elementTodo
        
        this.createElementTodo()
    }

    // metodo para criar o elemento todo
    createElementTodo(){
        this.elementTodo = document.createElement('div')
        this.elementTodo.classList.add('todoContainer')
        this.checked == true ? this.elementTodo.classList.add('todoChecked') : undefined

        let todoSpan = document.createElement('span')
        todoSpan.setAttribute('class', 'todo')

        let inputRadius = document.createElement('i')
        
        inputRadius.classList.add('btnCheckTodo')
        if(this.checked == true){
            inputRadius.classList.add('ri-checkbox-circle-fill')
        }else{
            inputRadius.classList.add('ri-checkbox-blank-circle-line') 
        }
        inputRadius.addEventListener('click', ()=>{
            inputRadius.classList.toggle('ri-checkbox-blank-circle-line')
            inputRadius.classList.toggle('ri-checkbox-circle-fill')
            this.elementTodo.classList.toggle('todoChecked')

            if(this.checked == false){
                this.checked = true
            }else{
                this.checked = false
            }

            let eventCheckTodo = new Event('checkedTodo')
            this.elementTodo.dispatchEvent(eventCheckTodo)
        })
        todoSpan.appendChild(inputRadius)

        let nameTodo = document.createElement('p')
        nameTodo.innerText = this.name
        todoSpan.appendChild(nameTodo)

        this.elementTodo.appendChild(todoSpan)

        let btnDelete = document.createElement('i')
        btnDelete.classList.add('ri-delete-bin-7-line')
        btnDelete.classList.add('btnDeleteTodo')

        this.elementTodo.appendChild(btnDelete)
    }
}