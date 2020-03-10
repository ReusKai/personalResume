<template>
    <div class="index">
        <el-carousel :height="winH" direction="vertical" :autoplay="false" :loop="false">
            <el-carousel-item v-for="(item,index) in pageArr" :key="index" :style="{backgroundColor: item.bg}">
                <firstPage v-if="item.page === 0"></firstPage>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import firstPage from '@/components/firstPage'
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
            ]
        }
    },
    computed:{
        winH: function () {
            return window.screen.height + 'px'
        }
    },
    components:{
        firstPage
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
