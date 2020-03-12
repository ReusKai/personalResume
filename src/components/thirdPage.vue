<template>
    <div class="bg">
        <div ref="skillPie"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {}
    },
    method:{
        makeEcharts(){
            this.$echarts.init(this.$refs['skillPie']).setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            })
        }
    },
    computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bg{
        background: url("~@/assets/image/bg01.jpg") center no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
</style>
