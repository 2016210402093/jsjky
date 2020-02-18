<template>
    <div id="info">
        <img class="schooleImg" src="../assets/hznu.jpg" alt="学校风光"/>
        <div class="detail">
            <div class="title">
                <p class="schoolName">杭州师范大学</p>
                <van-rate class="rate" v-model="value" readonly/>
            </div>
            <div class="synopsis">
                <div class="sub">
                    <p>办学层次</p>
                    <p>普通一本</p>
                </div>
                <div class="sub">
                    <p>USNEWS排名</p>
                    <p>89</p>
                </div>
                <div class="sub">
                    <p>学科范围</p>
                    <p>综合类</p>
                </div>
            </div>
            <p class="schoolInfo">
                杭州师范大学（Hangzhou Normal University）简称“杭师大”，位于杭州；由杭州市人民政府举办，浙江省和杭州市重点建设的百年老校，第二批浙江省重点建设高校，全国首批深化创新创业教育改革示范高校，联合国教科文组织中国创业教育联盟理事单位，浙江省双创示范基地。
            </p>

            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>

            <div class="basic">
                <p class="basictitle">专业评级</p>
                <p class="basictitle">招生人数(人)</p>
            </div>

            <div class="basic">
                <p class="basicinfo">无</p>
                <p class="basicinfo">20</p>
            </div>

            <div class="basic">
                <p class="basictitle">学制(年)</p>
                <p class="basictitle">学费(元/年)</p>
            </div>

            <div class="basic">
                <p class="basicinfo">2.5</p>
                <p class="basicinfo">8000</p>
            </div>

            <van-divider />

            <p class="testTitle">初试科目</p>
            <ul class="firstTestInfo">
                <li>101思想政治理论</li>
                <li>204英语一</li>
                <li>301数学一</li>
                <li>408计算机学科专业综合</li>
            </ul>

            <p class="testTitle">复试信息</p>
            <p class="afterTest">综合成绩=初试成绩（占45%）+复试成绩（占55%）
                初试成绩=科目总分／p5×45%
                复试成绩=[机试（40%）+面试（40%）+外语听说测试（20%）] ×55%
                程序设计基础，以C语言为主，不指定参考书目（机考）
            </p>

            <van-divider>点击图表查看更多数据</van-divider>
        </div>
        <tabbar class="tabbar"/>
    </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
    data() {
        return {
            value: 3,
            value1: 0,
            value2: 'a',
            option1: [
                { text: '杭州国际服务工程学院', value: 0 },
                { text: '阿里巴巴商学院', value: 1 },
            ],
            option2: [
                { text: '电子信息(专硕)', value: 'a' },
                { text: '网络安全', value: 'b' },
                { text: '计算机科学与技术(学硕)', value: 'c' },
            ]
        }
    },
    components: {
        tabbar
    }
}
</script>

<style scoped>
#info {
    width: 100%;
}

.schooleImg {
    width: 100%;
}

.title {
    display: flex;
    align-items: center;
    justify-content: center;
}

.schoolName {
    flex: 1 1 66.66%;
    margin: 0 0 0 5%;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    padding: 3%;
}

.rate {
    flex: 1 1 33.33%;
    margin: 0 5% 0 0;
}

.synopsis {
    display: flex;
    align-items: center;
    justify-content: center;
}

.sub {
    flex: 1 1 33.33%;
}

.sub:nth-child(2) {
    border-left: 3px solid #cfcfcf;
    border-right: 3px solid #cfcfcf;
}

.sub p{
    text-align: center;
    margin: unset;
}

.sub > p:first-child {
    font-weight: bold;
    padding-bottom: 3%
}

.sub > p:last-child {
    color: darkgray;
    font-size: 14px
}


.detail {
    width: 100%;
    margin: 0 auto;
    background-color: white;
    position: relative;
    top:-40px;
    border-radius: 20px 20px 0 0;
}

/* .detail::after {
    content: '';
    display: block;
    height: 20px;
} */

.schoolInfo {
    margin: unset;
    padding: 6%;
    word-break: break-all;
    font-size: 14px;
}

.basic {
    display: flex;
    align-items: center;
    justify-content: center;
}

.basic .basicinfo{
    flex: 1 1 50%;
    margin: 2% 6%;
    background-color: rgb(255, 247, 245);
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    padding-left: 3%;
    border-radius: 8px;
    text-align: left;
    font-weight: bold;
}

.basic .basictitle {
    flex: 1 1 50%;
    margin: 5% 5% 0 5%;
    height: 20px;
    padding-left: 2%;
    line-height: 20px;
    font-size: 12px;
    text-align: left;
}

.testTitle {
    margin: 3% 6%;
    font-weight: bold;
}

.firstTestInfo {
    margin: 0 6%;
    padding: 3%;
    background-color: rgb(255, 247, 245);
    border-radius: 8px;
}

.firstTestInfo li {
    padding: 1% 0;
}

.afterTest {
    margin: 0 6%;
    padding: 3%;
    background-color: rgb(255, 247, 245);
    border-radius: 8px;
    white-space: pre-line;
    font-size: 14px;
    word-break: break-all;
}

</style>