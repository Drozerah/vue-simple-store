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

<style scoped lang="scss">

    .card{
        background-color: #9FA8DA;
    }

</style>
