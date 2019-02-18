<template>
  <div id="app" class="appVue">
    <h1>Vue.js Simple Store</h1>
    <p>State management store based on a class instance shared between multiple components</p>
    <div>
      <div class="flex-container">
        <p>src/store/index.js => {{ store }}</p>
      </div>
      <div class="flex-container">
        <IncrementBtn/>
        <DecrementBtn/>
        <RestoreBtn/>
      </div>
    </div>

  </div>
</template>

<script>
import Store from './store'
import IncrementBtn from './components/IncrementBtn.vue'
import DecrementBtn from './components/DecrementBtn.vue'
import RestoreBtn from './components/RestoreBtn.vue'
export default {
  name: 'app',
  components: {
    IncrementBtn,
    DecrementBtn,
    RestoreBtn,
  },
  data(){
    return {
      store: Store
    }
  }
}
</script>

<style lang="scss">
body{
  background-color: #E8EAF6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
  .flex-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    p{
      border: 2px solid grey;
      padding: 20px 50px 20px 50px;
    }
  }
}
h1, h2 {
  font-weight: normal;
  font-size: 30px;
}
h2{
  font-size: 18px;
}
.appVue{
  padding: 10px;
}
.card{
    width:240px;
    padding: 10px 10px 25px 10px;
    margin: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 2px;
    button{
    border: 2px solid #333;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
    font-size: 18px;
    }
}
</style>
