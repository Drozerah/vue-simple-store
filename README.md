# Vue.js Simple Store

![Simple store image](https://raw.githubusercontent.com/Drozerah/vue-simple-store/master/src/assets/vue-simple-store.gif)

## Creating a simple store

Sometime you need to work with a kind of global state management throughout your Vue.js app to share data across components without the use of a state manager like Vuex, for any reasons, or just for the sake of simplicity...

In that prospect, we can create a simple store mechanism based on the instantiation of one ES6 class shared by components. Let's demonstrate how to quickly achieve this !

For this example, we're going to build a simple counter where we use components to increment - decrement - restore and return its value.

#### Create the store:

`src/store/index.js`
```javascript
class Store {

    // constructor(...)
    // identifies the signature of Store(...) function
    constructor(){
        this.state = {
            count: 0
        }
    }

    // methods
    increment(){ this.state.count++ }

    decrement(){ this.state.count-- }

    restore(){ this.state.count = 0 }

}

// export new class instance
export default new Store()
```

We can now import our class instance in our components and access the `count` property of our `state` object with the 3 methods we have declared.


#### Components:

``src/components/DecrementBtn.vue``
```javascript
  <template>
      <div class="card">
          <h2>Child Component #2</h2>
          <button @click="decrement">Decrement state.count</button>
      </div>
  </template>

  <script>
  // import store instance
  import Store from '../store'

      export default {
          methods: {
              decrement: () => Store.decrement()
          }
      }
  </script>

  //...
```

We create a button component `DecrementBtn.vue` and we bind an event listener to decrease the count value in the store when the button is clicked.  We also store the `Store.decrement()` function call as a property of the methods object to make it available in our template.

Now that we have the idea, we can create the `IncrementBtn.vue` and `RestoreBtn.vue` components using `Store.increment()` and `Store.restore()` in the methods...







## See it in action

If you want to try this example yourself, I've compiled for you in [this CodeSandbox](https://n74nok2oj.codesandbox.io/), go check it out!

https://codesandbox.io/s/381mnn8oq5


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
