<template>
    <div class="index">
        <el-carousel :height="winH" direction="vertical" :autoplay="false" :loop="false">
            <el-carousel-item v-for="(item,index) in pageArr" :key="index" :style="{backgroundColor: item.bg}">
                <firstPage v-if="item.page === 0"></firstPage>
                <secondPage v-if="item.page === 1"></secondPage>
                <thirdPage v-if="item.page === 2"></thirdPage>
                <fouthPage v-if="item.page === 3"></fouthPage>
                <fifthPage v-if="item.page === 4"></fifthPage>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import firstPage from '@/components/firstPage'
import secondPage from '@/components/secondPage'
import thirdPage from '@/components/thirdPage'
import fouthPage from '@/components/fouthPage'
import fifthPage from '@/components/fifthPage'
export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            pageArr: [
                {bg: "#ccc",page: 0},
                {bg: "#f60",page: 1},
                {bg: "#a83",page: 2},
                {bg: "#0aa",page: 3},
                {bg: "#7f6",page: 4},
            ]
        }
    },
    computed:{
        winH: function () {
            return document.documentElement.clientHeight + 'px'
        }
    },
    components:{
        firstPage,secondPage,thirdPage,fouthPage,fifthPage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
