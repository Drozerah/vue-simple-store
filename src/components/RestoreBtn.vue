<template>
    <div class="card">
        <h2>Child Component #3</h2>
        <button @click="restore" v-bind:disabled=isDisabled>Restore state.count</button>
    </div>
</template>

<script>
// import store instance
import Store from '../store'

    export default {
        methods: {
            restore: () => Store.restore()
        },
        computed: {
            isDisabled: () =>  Store.state.count != 0 ? false : true
        }
    }
</script>

<style scoped lang="scss">

    .card{
        background-color: #7986CB;
        button:disabled,
        button[disabled]{
        border: 2px solid #BDBDBD;
        color: #F3E5F5;
        }
    }

</style>
