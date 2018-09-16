<template>
  <div class="to-do-list">
    <ul v-for="(things,key) in event"
        :key="key">
      <li class="wrap-thing"
          v-for="(thing,index) of things"
          :key="index">
        <span>
          <input type="checkbox"
                 v-model="thing.isFinished">
          <span class="text"
                :class="{finish:thing.isFinished}">{{thing.toDo}}</span>
        </span>
        <span class="time">{{thing.timeStr}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import formatTime from '../utils/formatTime'

export default {
  data () {
    return {
      thingList: [
        {
          toDo: '学习ES6语法',
          isFinished: true,
          finishTime: new Date() - 1000 * 3600 * 24 * 10
        },
        {
          toDo: '学习node.js',
          isFinished: false,
          finishTime: +new Date() + 1000 * 3600 * 24 * 15
        },
        {
          toDo: '学习mySQL',
          isFinished: false,
          finishTime: +new Date() + 1000 * 3600 * 24 * 20
        },
        {
          toDo: '学习vue.js',
          isFinished: true,
          finishTime: new Date() - 1000 * 3600 * 24 * 30
        }
      ],
      event: {
        toDoList: [],
        doneList: []
      }
    }
  },
  watch: {
    thingList: {
      handler (newV, oldV) {
        console.log(newV)
        this.iniData()
      },
      deep: true
    }
  },
  created () {
    this.iniData()
    this.thingList.forEach(thing => {
      this.$set(thing, 'timeStr', formatTime(thing.finishTime))
    })
  },
  methods: {
    changeStatus (item) {
      item.isFinished = !item.isFinished
    },
    iniData () {
      this.event.toDoList = this.thingList.filter(thing => !thing.isFinished)
      this.event.toDoList.sort((a, b) => a.finishTime - b.finishTime)

      this.event.doneList = this.thingList.filter(thing => thing.isFinished)
      this.event.doneList.sort((a, b) => b.finishTime - a.finishTime)
      console.log('iniDatas', this.event)
    },
    initime (time) {
      return formatTime(time)
    }
  }

}
</script>

<style lang="scss">
@import "../styles/color";
.to-do-list {
  ul {
    margin: 0;
    padding: 0 10px;
    background-color: $bg;
  }
  .text {
    color: $warning;
  }
  .finish {
    color: $success;
    text-decoration: line-through;
  }
  .wrap-thing {
    display: flex;
    justify-content: space-between;
  }
  .time {
    color: $grey;
    font-size: 12px;
  }
}
</style>
