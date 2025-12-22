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
    }

    addStorage(item){
        this.#storage.push(item)

        this.#updateLocalStorage()
    }

    removeStorage(item){
        this.#storage = this.#storage.filter((todo)=>{
            return todo!= item
        })

        this.#updateLocalStorage()
    }
}