<template>
    <div class="bg">
        <div class="center-info">
            <div class="info-title">Hello, I'm ReusKai </div>
            <div class="info-phrase">Good good study , day day up!!!</div>
            <div>我叫邢源凯</div>
            <div>茫茫尘世中一个迷途切图仔</div>
            <div>好好学习，天天向上</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {}
    },
    computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg{
        background: url("~@/assets/image/bg02.jpg") center no-repeat;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-attachment: fixed;
        position: relative;
    }
    .bg:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(255,255,255,.3);
        top: 0;
        left: 0;
    }
    .center-info{
        font-size: 30px;
        left: 50%;
        top: 30%;
        transform: translateX(-50%);
        color: #fff;
        position: fixed;
        padding: 20px 15px;
        z-index: 251;
        border-radius: 15px;
        white-space: nowrap;
        color: rgb(245, 24, 12);
        font-family: myThirdFont,"微软雅黑",SimSun,"宋体",sans-serif;
    }
    .info-title{
        font-family: mySecondFont,"微软雅黑",SimSun,"宋体",sans-serif;
        font-size: 70px;
    }
    .center-info:hover{
        background: rgba(222,222,222,.7);
        box-shadow: 0 0 5px 5px rgba(0,0,0,.2);
        transition: background 2s ease
    }
</style>
