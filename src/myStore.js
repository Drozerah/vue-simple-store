class Store {

    constructor(){
        this.state = {
            count: 0
        }
    }

    increment(){ this.state.count++ }

    decrement(){ this.state.count-- }

    restore(){ this.state.count = 0 }

}

// export new class instance
export default new Store()