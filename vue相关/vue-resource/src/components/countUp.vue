<template>
  <span class="count">
    <span>{{leftText}}</span>
    <span class="count-target"></span>
    <span>{{rightText}}</span>
  </span>
</template>

<script>
// import ICountUp from 'vue-countup-v2'
import CountUp from 'countup.js'
export default {
  components: {
    // ICountUp
  },
  props: {
    startV: {
      type: Number,
      default: 0
    },
    endV: {
      type: Number,
      default: 2000
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    }

  },
  mounted () {
    let dom = this.$el.querySelector('.count-target')
    let oCount = new CountUp(dom, this.startV, this.endV, this.decimals, this.duration)
    oCount.start(this.onReady)
  },
  methods: {
    onReady () {
      // console.log('finish')
      if (this._events.finish) {
        this.$emit('finish')
      }
    }
  }
}
</script>

<style scoped>
</style>
