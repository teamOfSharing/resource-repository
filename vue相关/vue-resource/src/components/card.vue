<template>
  <div class="card"
       :style="{color:textColor,backgroundColor:bgColor}"
       @mouseenter="changeColor"
       @mouseleave="changeColor">
    <div class="wrap-contain">
      <span class="icon"
            :class="icon"></span>
      <span>{{contain}}</span>
    </div>
    <div>
      <CountUp :endV="countTo" />
    </div>
  </div>
</template>

<script>
import CountUp from './countUp'
export default {
  components: {
    CountUp
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    contain: {
      type: String,
      default: ''
    },
    countTo: {
      type: Number,
      default: 1010
    },
    color: {
      type: String,
      default: '#fff'
    },
    bg: {
      type: String,
      default: '#fff'
    }
  },
  data () {
    return {
      textColor: '',
      bgColor: ''
    }
  },
  created () {
    this.textColor = this.color
    this.bgColor = this.bg
  },
  methods: {
    changeColor () {
      let tmpColor = this.textColor
      this.textColor = this.bgColor
      this.bgColor = tmpColor
    }
  }
}
</script>

<style lang="scss">
@import "../styles/color";
.card {
  padding: 10px;
  // border: 1px solid $grey;
  border-radius: 4px;
  text-align: center;
  .wrap-contain {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 6px;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    justify-content: center;
  }
  .icon {
    margin-right: 10px;
    font-size: 22px;
  }
}
</style>
