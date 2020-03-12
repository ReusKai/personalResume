<template>
    <div id="app">
        <div class="app-title">
            <img src="@/assets/image/head.jpg" class="head-img">
            <span class="my-name">ReusKai</span> &nbsp;'s Personal Resume
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
    }
    .app-title{
        padding: 5px 15px 5px 10px;
        background: rgba(255,255,255,.45);
        border: 2px solid rgba(255,255,255,.55);
        position: absolute;
        z-index: 250;
        left: 20px;
        top: 20px;
        font-size: 20px;
        border-radius: 5px;
        font-family: myFirstFont,mySecondFont,myThirdFont,"微软雅黑",SimSun,"宋体",sans-serif;
        display: flex;
        align-items: center;
    }
    .my-name{
        font-size: 25px;
        background: rgba(0,0,0,.7);
        padding: 5px;
        border-radius: 5px;
        color: #fff;
        font-family: mySecondFont,myThirdFont,"微软雅黑",SimSun,"宋体",sans-serif;
    }
    .head-img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #888;
        margin-right: 5px;
    }
    .bg{
        background: url("~@/assets/image/bg01.jpg") center no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
    }
    .bg:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.3);
        top: 0;
        left: 0;
    }
</style>
