<template>
  <div>
    <ul>
      <li class="top" @click="cancleTop(top,index)" v-for="(top,index) of topList" :key="top.order">{{top.content}}</li>
      <li class="normal" @click="toTop(item,i)" v-for="(item,i) of dataList" :key="item.order">{{item.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topList: [],
      dataList: []
    }
  },
  created () {
    fetch('../../static/topData.json').then(res => res.json()).then(res => {
      this.dataList = res
    })
  },
  methods: {
    toTop (ite, i) {
      if (!ite.isTop) {
        ite.isTop = true
        let ele = this.dataList.splice(i, 1)[0]
        this.topList.push(ele)
        this.topList.sort((a, b) => a.order - b.order)
        console.log(this.topList)
      }
    },
    cancleTop (ite, i) {
      if (ite.isTop) {
        ite.isTop = false
        let ele = this.topList.splice(i, 1)[0]
        this.dataList.push(ele)
        this.dataList.sort((a, b) => a.order - b.order)
      }
    }
  }
}
</script>

<style>
  ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li+li{
    margin-top: 1px;
  }
  .top{
    border: 1px solid lightblue;
  }
  .normal{
    border: 1px solid lightgreen;
  }
  .normal,.top{
    width: 200px;
    border-radius: 4px;
  }
</style>
