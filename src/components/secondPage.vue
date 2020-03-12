<template>
    <div class="bg">
        <div class="center-intro">        
            <img src="@/assets/image/i.jpg" alt="头像" class="myhead-img">
            <div class="intro-word">欢迎你来此站参观</div>
            <div>我是<span>邢源凯</span><br/>我有个二逼的英文名 —— ReusKai</div>
            <div>2017年6月我毕业于仲恺农业工程学院</div>
            <div>工业自动化专业，本科学历，学士学位</div>
            <div>熟练使用HTML5、CSS3、Sass，能准确还原设计稿</div>
            <div>熟悉ES6，了解ES7，会点TS</div>
            <div>了解MVVM框架，比较熟悉vue,Jquery,React</div>
            <div>了解Gulp，webpack等自动化构建工具</div>
            <div>了解nodeJs，python</div>
            <div>会点设计，不过审美较差劲</div>
            <div>爱好是躺着赚钱（但没苍老师的能力）</div>
        </div>
        <ruby class="lines">People who have dreams don't have a choice , they just do the proof.<rt>拥有梦想的人不做选择题，他们只做证明题</rt></ruby>
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
        background: url("~@/assets/image/bg04.jpg") center no-repeat;
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
    .lines{
        font-size: 15px;
        color: #fff;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        font-family: myFirstFont,"微软雅黑",SimSun,"宋体",sans-serif;

    }
    .lines rt{
        font-size: 30px;
    }
    .myhead-img{
        width: 120px;
        height: 120px;
        margin: 0 auto;
        border-radius: 50%;
        border: 2px solid #f2f2f2;
    }
    .center-intro{
        width: 50%;
        max-width: 500px;
        margin: 0 auto;
        box-sizing: border-box;
        font-size: 17px;
        color: rgba(255,255,255,.8);
        text-align: left;
        line-height: 25px;
        font-family: myFirstFont,"微软雅黑",SimSun,"宋体",sans-serif;
        position: relative;
    }
    .intro-word{
        font-size: 30px;
        position: absolute;
        width: 30px;
        left: -50px;
        word-break: break-word;
        line-height: 35px;
        top: 0;
    }
</style>
