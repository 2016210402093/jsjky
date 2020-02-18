<template>
    <div id="reExamination" ></div>
</template>

<script>
export default {

    //分数线-折线
    //本校报考人数 -饼
    //招生人数-柱状图
    //录取最高分，最低分

  name: 'hello',
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
        let myChart = this.$echarts.init(document.getElementById('reExamination'))
        // 绘制图表
        myChart.setOption({
            tooltip: {},
            title: {text:'历年复试分数线', padding: [20, 10]},
            grid: {top: 60,bottom: 30},
            xAxis: {
                axisPointer: {show:true},
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019']
            },
            yAxis: {
                type: 'value',
                min: 240
            },
            series: [{
                label: {
                  normal: {
                      show: true,
                      position: 'top'
                  }
                },
                data: [285, 280, 265, 265, 260, 270],
                type: 'line'
            }]
        })
    }
  }
}
</script>

<style scoped>
#reExamination {
    width: 90%;
    margin: 0 5%;
    height: 230px;
    top: -120px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
}
</style>