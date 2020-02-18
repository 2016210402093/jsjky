<template>
    <div id="totalNum" ></div>
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
        let myChart = this.$echarts.init(document.getElementById('totalNum'))
        // 绘制图表
        myChart.setOption({
            title: {text:'2016-2020报名人数', padding: [20, 10]},
            tooltip: {},
            color: '#61a0a8',
            xAxis: {
                type: 'category',
                data: ['2016', '2017', '2018', '2019', '2020']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: [89, 110, 128, 147, 161],
                type: 'bar'
            }]
        })
    }
  }
}
</script>

<style scoped>
#totalNum {
    height: 250px;
    width: 100%;
}
</style>