<template>
  <div class="charts" v-if="on"
       :class="isFullScreen ? 'full-screen' : ''">
    <div class="chart-header">
      <span class="wrap-title">
        <span class="custom-icon">&nbsp;&nbsp;</span>
        <span class="title">{{title}}</span>
      </span>
      <span @click="resizeCharts"
            :class="isFullScreen ? 'vr-icon-shrink' : 'vr-icon-arrawsalt'"></span>
    </div>
    <slot></slot>
    <div class="chart-body"
         :style="{height:height + 'px'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import chartBus from '../bus/chartBus'
export default {
  data () {
    return {
      isFullScreen: false,
      chart: null
    }
  },
  props: {
    title: {
      type: String,
      default: '图表'
    },
    height: {
      type: Number,
      default: 360
    },
    on: {
      type: String,
      default: ''
    }
  },
  methods: {
    resizeCharts () {
      this.isFullScreen = !this.isFullScreen
    },
    initChart () {
      if (this.chart) {
        this.chart.clear()
        return
      }
      this.chart = echarts.init(document.querySelector('.chart-body'))
    },
    resize () {
      if (this.chart) {
        this.chart.resize()
        return
      }
      this.initChart()
    },
    setOption (option) {
      if (!this.chart) {
        this.initChart()
      }
      this.chart.setOption(option)
    }
  },
  mounted () {
    chartBus.$on(this.on, option => this.setOption(option))
    window.onresize = this._.debounce(this.resize, 50)
    console.log(chartBus.$on)
  },
  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
    window.onresize = null
  }

}
</script>

<style lang="scss">
@import "../styles/color";
.charts {
  padding: 10px;
  background-color: #f0f0f0;
  .chart-header {
    display: flex;
    justify-content: space-between;
    .custom-icon {
      background-color: $green;
      border-radius: 4px;
    }
  }
  .chart-body {
    margin-top: 15px;
  }
}
.full-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
