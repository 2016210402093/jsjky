<template>
    <div id="maxMin" ></div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('maxMin'))
        // 绘制图表
        myChart.setOption({
            title: {
                text: '近几年录取最高最低分'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['2016', '2017', '2018', '2019']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '录取最低分',
                    type: 'line',
                    areaStyle: {
                        color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FF0000'
                        }, {
                            offset: 1,
                            color: '#FFC0CB'
                        }])
                    },
                    data: [260, 270, 261, 273]
                },
                {
                    name: '录取最高分',
                    type: 'line',
                    areaStyle: {
                        color: this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8ec6ad'
                        }, {
                            offset: 1,
                            color: '#008000'
                        }])
                    },
                    data: [340, 367, 391, 367]
                }
            ]
        })
    }
  }
}
</script>

<style scoped>
#maxMin {
    height: 250px;
    width: 100%;
}
</style>