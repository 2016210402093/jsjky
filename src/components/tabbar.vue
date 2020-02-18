<template>
    <van-tabbar v-model="active" fixed route>
        <van-tabbar-item icon="wap-home-o" name="home" replace to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="orders-o" name="info" replace to="/info">信息</van-tabbar-item>
        <van-tabbar-item icon="chart-trending-o" name="chart" replace to="/chart">图表</van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    data(){
        return { 
            active: this.$route.name,
        }
    },
    methods: {

    }
}
</script>

<style scoped>
</style>