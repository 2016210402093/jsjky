<template>
    <div id="chart">
        <div class="title">
            <p>报考数据</p>
            <p>数据仅供参考, 请以招生院校官网为准</p>
        </div>
        <reExamination/>

        <div  class="tabsbox">
            <van-tabs v-model="activeName">
                <van-tab title="报考人数" name="a">
                    <totalNum/>
                </van-tab>

                <van-tab title="最高最低分" name="b">
                    <maxMin/>
                </van-tab>

                <van-tab title="本校占比" name="c">
                    <ownStudent/>
                </van-tab>
            </van-tabs>
        </div>

        <van-divider class="tip">以上为全部数据</van-divider>

        <tabbar/>
    </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import reExamination from '@/components/reExamination'
import totalNum from '@/components/totalNum'
import maxMin from '@/components/maxMin'
import ownStudent from '@/components/ownStudent'

export default {
    data(){
        return {
            activeName: 'a'
        }
    },

    components: {
        reExamination,
        maxMin,
        ownStudent,
        totalNum,
        tabbar
    }
}
</script>

<style scoped>

.title {
    width: 100%;
    height: 250px;
    background-color: rgb(255, 188, 115);
}

.title p:first-child{
    margin: unset;
    padding: 50px 0 0 30px;
    font-size: 24px;
    color: white;
    font-weight: bold;
}

.title p:last-child{
    margin: unset;
    padding: 10px 30px;
    font-size: 14px;
    color: white;
}

.tabsbox {
    background-color: white;
    width: 90%;
    margin: -100px auto 0 auto;
    border-radius: 20px;
    box-shadow: 0 0 8px #cfcfcf;
}

.tip {
    padding-bottom: 50px
}

</style>