const newToDo = document.querySelector('#newToDo')
const btnAdd = document.querySelector('#btnAdd')

var toDoList = []

btnAdd.addEventListener('click', ()=>{
    //Adiciona o evento de 'click' no botao de adicionar e chama a funcao de nova tarefa passando o texto do input como parametro

    let toDoName = newToDo.value

    if(toDoName.length > 0){
        addNewToDo(toDoName)
    }

    newToDo.value = ''
    newToDo.focus()
})

checkLocalStorage()

function checkLocalStorage(){
    if(localStorage.getItem('toDoList') != null){
        toDoList = JSON.parse(localStorage.getItem('toDoList'))

        renderToDoList()
    }
}

function updateLocalStorage(){
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

function renderToDoList(){
    document.querySelector('main').innerHTML = ''

    if(toDoList.length == 0){
        document.querySelector('main').innerHTML = '<h1>Sem tarefas</h1>'
    }

    toDoList.forEach((toDo)=>{
        renderToDo(toDo.name, toDo.selected)
    })
}

function addNewToDo(toDoName){
    //Adiciona a tarefa no array de tarefas e chama a função de renderizar na tela

    addToDoList(toDoName)

    renderToDo(toDoName)
}

function addToDoList(toDoName){
    toDoList.push({
        name: toDoName,
        selected: false
    })

    localStorage.setItem('toDoList', JSON.stringify(toDoList))
}

function renderToDo(toDoName, state=false){
    //Renderiza a tarefa na tela

    if(toDoList.length == 1){
        document.querySelector('main').innerHTML = ''
        createElementToDo(toDoName, state)
    } else{
        createElementToDo(toDoName, state)
    }
}

function createElementToDo(toDoName, state){
    //Cria os containers necessarios e adicionar os outros elementos neles, depois os adiciona no 'main'

    let toDoContainer = document.createElement('div')
    toDoContainer.className = 'toDoContainer'
    let toDo = document.createElement('span')
    toDo.className = 'toDo'
    toDo.appendChild(createCheckbox(state))
    toDo.appendChild(createName(toDoName))

    toDoContainer.appendChild(toDo)
    toDoContainer.appendChild(createTrash())

    document.querySelector('main').appendChild(toDoContainer)
}

function createName(toDoName){
    //Cria e retorna o elemento 'p' que contem o nome da tarefa

    let name = document.createElement('p')
    name.classList.add('toDoName')
    name.innerText = toDoName

    return name
}

function createCheckbox(state=false){
    //Cria e retorna o icone de checkbox

    let checkbox = document.createElement('i')
    
    if(state == false){
        checkbox.className = 'ri-checkbox-blank-line btnCheck'
    } else{
        checkbox.className = 'ri-checkbox-fill btnCheck'
    }


    addClickToCheckbox(checkbox)
    
    return checkbox
}

function createTrash(){
    //Cria e retorna o icone de lixeira

    let trash = document.createElement('i')
    trash.className = 'ri-delete-bin-fill btnTrash'
    addClickToTrash(trash)

    return trash
}

function addClickToCheckbox(checkbox){
    //Adiciona o evento de 'click' no checkbox

    checkbox.addEventListener('click', ()=>{
        toggleStateCheckbox(checkbox)
        toggleStateToDo(checkbox)
    })
}

function toggleStateCheckbox(checkbox){
    checkbox.classList.toggle('ri-checkbox-fill')
    checkbox.classList.toggle('ri-checkbox-blank-line')
}

function toggleStateToDo(checkbox){
    let checkboxList = document.querySelectorAll('.btnCheck')

    checkboxList.forEach((element, index)=>{
        if(checkbox == element){
            if(toDoList[index].selected == false){
                toDoList[index].selected = true
            } else{
                toDoList[index].selected = false
            }
        }
    })

    updateLocalStorage()
}

function addClickToTrash(trash){
    trash.addEventListener('click',()=>{
        deleteToDo(trash)
    })
}

function deleteToDo(trash){
    let trashList = document.querySelectorAll('.btnTrash')

    trashList.forEach((element, index)=>{
        if(element == trash){
            toDoList.splice(index, 1)
            console.log(toDoList)
        }
    })

    updateLocalStorage()
    renderToDoList()
}