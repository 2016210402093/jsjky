<template>
    <div id="ownStudent" ></div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('ownStudent'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: '2019本校报考人数占比',
            },

            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },


            series: [
                {
                    name: '报考人数',
                    type: 'pie',
                    radius: '60%',
                    center: ['50%', '50%'],
                    data: [
                        {value: 27, name: '本校考生'},
                        {value: 137, name: '外校考生'},

                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    itemStyle: {
                        shadowBlur: 25,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        })
    }
  }
}
</script>

<style scoped>
#ownStudent {
    height: 250px;
    width: 100%;
}
</style>