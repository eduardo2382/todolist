export class Storage{
    #nameStorage;
    #storage;

    constructor(nameStorage){
        this.#nameStorage = nameStorage

        if(localStorage.getItem(this.#nameStorage)){
            this.#storage = JSON.parse(localStorage.getItem(this.#nameStorage))
        }else{
            this.#storage = []
            localStorage.setItem(this.#nameStorage, JSON.stringify(this.#storage))
        }
    }

    #updateLocalStorage(){
        localStorage.setItem(this.#nameStorage, JSON.stringify(this.#storage))
        this.#storage = JSON.parse(localStorage.getItem(this.#nameStorage))
    }

    addStorage(item){
        this.#storage.push(item)

        this.#updateLocalStorage()
    }

    //!!
    removeStorage(item){
        this.#storage = this.#storage.filter((todo)=>{
            return todo!= item
        })

        this.#updateLocalStorage()
    }

    updateStorage(item){
        for(let i = 0; i < this.#storage.length; i++){
            if(this.#storage[i].id == item.id){
                this.#storage[i] = item
            }
        }

        this.#updateLocalStorage()
    }

    mapStorage(func){
        for (let i = 0; i < this.#storage.length; i++) {
            let element = this.#storage[i];
            
            func(element)
        }
    }

    numberOfItems(){
        return this.#storage.length
    }
}