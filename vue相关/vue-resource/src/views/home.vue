<template>
  <div class="home">
    <el-row :gutter="20"
            style="margin-bottom:10px">
      <el-col v-for="card in cards"
              :key="card.order"
              :span="6">
        <Card :bg="card.bg"
              :icon="card.icon"
              :contain="card.contain"
              :countTo="card.countTo" />
      </el-col>
    </el-row>
    <Chart on="chart1" />
    <ToDoList/>
  </div>
</template>

<script>
import CountUp from '../components/countUp'
import ColorChange from '../components/colorChange'
import Chart from '../components/chart'
import ToDoList from '../components/toDoList.vue'
import Card from '../components/card'
import Kscreenshot from 'kscreenshot'

import chartBus from '../bus/chartBus'

export default {
  name: 'Home',
  components: {
    CountUp, ColorChange, Chart, ToDoList, Card
  },
  data () {
    return {
      cards: [
        {
          order: 1,
          icon: 'vr-icon-star',
          contain: 'Stars',
          bg: '#e6a23c',
          countTo: 1999
        },
        {
          order: 2,
          icon: 'vr-icon-radarchart',
          contain: 'Abilities',
          bg: '#f56c6c',
          countTo: 50.50
        },
        {
          order: 3,
          icon: 'vr-icon-table',
          contain: 'Visitors',
          bg: '#67c23a',
          countTo: 2223
        },
        {
          order: 4,
          icon: 'vr-icon-linechart',
          contain: 'flows',
          bg: '#409eff',
          countTo: 34562
        }
      ],
      kscreenshot: null,
      toolshow: {
        complete: true,
        quit: true,
        back: true,
        arrow: true,
        drawLine: true,
        rect: true,
        ellipse: true,
        text: true,
        color: true
      }
    }
  },
  mounted () {
    this.chart1()
    this.kscreenshot = new Kscreenshot({
      key: 65,
      toolshow: this.toolshow,
      copyPath () {
        return null
      },
      needDownload: true,
      endCB () {
        console.log(this.kscreenshot, '截图完成')
      },
      immediately: false
    })
  },
  methods: {
    finish () {
      console.log('parent finish')
    },
    chart1 () {
      const xAxisData = []
      const data = []
      const data2 = []
      for (let i = 0; i < 50; i++) {
        xAxisData.push(i)
        data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
        data2.push((Math.sin(i / 5) * (i / 5 + 10) + i / 6) * 3)
      }
      const option = {
        backgroundColor: '#08263a',
        grid: {
          left: '5%',
          right: '5%'
        },
        xAxis: [{
          show: false,
          data: xAxisData
        }, {
          show: false,
          data: xAxisData
        }],
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          dimension: 0,
          inRange: {
            color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#4a657a'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#08263f'
            }
          },
          axisTick: {
            show: false
          }
        },
        series: [{
          name: 'back',
          type: 'bar',
          data: data2,
          z: 1,
          itemStyle: {
            normal: {
              opacity: 0.4,
              barBorderRadius: 5,
              shadowBlur: 3,
              shadowColor: '#111'
            }
          }
        }, {
          name: 'Simulate Shadow',
          type: 'line',
          data,
          z: 2,
          showSymbol: false,
          animationDelay: 0,
          animationEasing: 'linear',
          animationDuration: 1200,
          lineStyle: {
            normal: {
              color: 'transparent'
            }
          },
          areaStyle: {
            normal: {
              color: '#08263a',
              shadowBlur: 50,
              shadowColor: '#000'
            }
          }
        }, {
          name: 'front',
          type: 'bar',
          data,
          xAxisIndex: 1,
          z: 3,
          itemStyle: {
            normal: {
              barBorderRadius: 5
            }
          }
        }],
        animationEasing: 'elasticOut',
        animationEasingUpdate: 'elasticOut',
        animationDelay (idx) {
          return idx * 20
        },
        animationDelayUpdate (idx) {
          return idx * 20
        }
      }
      chartBus.$emit('chart1', option)
    }
  }
}
</script>

<style lang="scss">
// @import url("../assets/common/iconfont.css");
@import "../styles/color";
// .home {
//   color: $blue;
// }
</style>
