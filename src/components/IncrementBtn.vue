<template>
    <div class="card">
        <h2>Child Component #1</h2>
        <button @click="increment">Increment state.count</button>
    </div>
</template>

<script>
// import store instance
import Store from '../store'

    export default {
        methods: {
            increment: () => Store.increment()
        }
    }
</script>

<style scoped lang="scss">

    .card{
        background-color: #C5CAE9;
    }

</style>
