<template>
    <div id="app">
        <div class="app-title">
            <span class="my-name">ReusKai</span> 's Personal Resume
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.app-title{
    padding: 15px;
    background: rgba(255,255,255,.45);
    border: 2px solid rgba(255,255,255,.55);
    position: absolute;
    z-index: 250;
    left: 20px;
    top: 20px;
    font-size: 20px;
    border-radius: 5px;
    font-family: "myFirstFont"
}
.my-name{
    font-size: 25px;
}
</style>
