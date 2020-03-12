<template>
    <div class="bg">
        <div>工作经历</div>
        <div style="width: 50%;margin: 0 auto;    text-align: left;">        
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>更新 Github 模板</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {}
    },
    methods:{

    },
    mounted:function () {
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
    .skill-chart{
        width: 500px;
        height: 300px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        z-index: 251;
    }
</style>
