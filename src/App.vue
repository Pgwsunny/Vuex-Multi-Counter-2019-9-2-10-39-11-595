<template>
    <div id="app">
        <!-- <CounterGroup :counterNumber="counterNumbers"/> 
         <router-link to="/">button</router-link><br />
         <router-link to="/welcome">Welcome</router-link><br />
         <router-link to="/counter">Counter</router-link><br />
         <router-link to="/todolist">go to todo</router-link>
        <br />-->
        <router-view />
    </div>
</template>

<script>
    
    import CounterGroup from './components/CounterGroup.vue'

    export default {
        name: 'app',
        components: {
            CounterGroup
        },
        data:function(){
            return {
                counterNumbers:3
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
