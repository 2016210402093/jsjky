<template>
    <div id="home">
        <div class="saying">
            <p>Holding a heart,</p>
            <p>don't take half a piece of grass</p>
        </div>
        <div class="search">
            <div class="component">
                <img src="../assets/school.png" alt="首页图片">
                <input v-model="schoolName" type="text" placeholder="请输入学校名">
                <button @click="searchInfo()">查询</button>
                <p>由于数据原因,仅本系统支持杭州师范大学查询</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            schoolName: '',
        }
    },
    methods: {
        searchInfo(){
            this.$router.push({name: 'info'})
        }
    }
}
</script>

<style scoped>

#home {
    width: 100%;
    height: 100vh;
}

.saying {
    width: 100%;
    height: 30%;
    background-color: white;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
    -webkit-box-align: start;
            align-items: flex-start;
    -webkit-box-pack: end;
            justify-content: flex-end;
}

.saying p{
    -webkit-box-flex: 0;
            flex: none;
    font-size: 20px;
    margin: 5% 0 0 5%
}

.saying p:last-child {
    margin-bottom: 10%
}

.search {
    width: 100%;
    height: 70%;
    position: relative;
}

.search::before {
    content: '';
    width: 100%;
    height: 30%  !important;
    display: block;
    height: 50px;
    background: white;
}

.search::after {
    content: '';
    width: 100%;
    height: 70% !important;
    height: 50px;
    display: block;
    background: #FFBC73;
}

.component {
    position: absolute;
    top: 0;
    width: 100%;
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
    -webkit-box-align: center;
            align-items: center;
    -webkit-box-pack: center;
            justify-content: center;
}

.component img {
    width: 70%;
    -webkit-box-flex: 0;
            flex: none;
}

.component input {
    -webkit-box-flex: 0;
            flex: none;
    display: block;
    width: 60%;
    height: 30px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    color: black;
    text-align: center;
    padding: 5px;
    outline: unset;
    border-style: unset;
    background: white;
}

.component button {
    margin-top: 3%;
    -webkit-box-flex: 0;
            flex: none;
    height: 40px;
    width: calc(60% + 10px);
    padding: unset;
    border-radius: 8px;
    font-size: 16px;
    outline: unset;
    border-style: unset;
    background-color: rgb(0, 19, 42);
    color: white;
}

.component button:active {
    background-color: rgba(0, 19, 42, 0.8);
}

.component p {
    margin: 3% 0 0 0;
    -webkit-box-flex: 0;
            flex: none;
    font-size: 14px;
    color: white;
}

</style>
