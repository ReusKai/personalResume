<template>
    <div class="first-bg">
        <div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            msgg: "dddddddddddddddddddddd"
        }
    },
    computed:{

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .first-bg{
        background: url("~@/assets/image/bg02.jpg") center center no-repeat;
        width: 100%;
        height: 100%;
        background-size: contain;
        /*background-position: ;*/
        background-attachment: fixed;
    }
</style>
