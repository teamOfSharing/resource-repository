<template>
  <div>
    <el-table :data="originData"
              :span-method="mergeStratege"
              border
              style="width: 100%">
      <el-table-column prop="name"
                       label="姓名"></el-table-column>
      <el-table-column prop="amount1"
                       label="数值1"></el-table-column>
      <el-table-column prop="amount2"
                       label="数值2"></el-table-column>
      <el-table-column prop="rowspan"
                       label="跨行"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      originData: [{
        id: '12987122',
        name: '王小虎',
        amount1: '234',
        amount2: '3.2',
        amount3: 10
      }, {
        id: '12987123',
        name: '王小虎',
        amount1: '165',
        amount2: '4.43',
        amount3: 12
      }, {
        id: '12987124',
        name: '王小虎',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '张小豹',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987126',
        name: '张小豹',
        amount1: '539',
        amount2: '4.1',
        amount3: 15
      }, {
        id: '12987124',
        name: '赵小狮',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987125',
        name: '赵小狮',
        amount1: '621',
        amount2: '2.2',
        amount3: 17
      }, {
        id: '12987124',
        name: '赵小狮',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }, {
        id: '12987124',
        name: '孙小马',
        amount1: '324',
        amount2: '1.9',
        amount3: 9
      }],
      tableData: [],
      nextIndex: 0
    }
  },
  created () {
    // this.tableData = this.initData()
    // console.log(this.tableData)
  },
  watch: {
    originData: {
      handler (newData) {
        if (newData.length) {
          let mergeStartRow = newData[0]
          mergeStartRow.isStartMerge = true
          mergeStartRow.rowspan = 1
          mergeStartRow.startIndex = 0
          for (let i = 1; i <= newData.length; i++) {
            if ((newData[i] &&
                 mergeStartRow.name !== newData[i].name) ||
                 i === newData.length) {
              mergeStartRow.endIndex = i
              mergeStartRow.rowspan = mergeStartRow.endIndex - mergeStartRow.startIndex
              mergeStartRow = newData[i]
              if (mergeStartRow) {
                mergeStartRow.isStartMerge = true
                mergeStartRow.rowspan = 1
                mergeStartRow.startIndex = i
              }
            }
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    // initData () {
    //   return this.originData.reduce((result, item) => {
    //     item.citys.forEach((city, index, arr) => {
    //       result.push({
    //         area: item.name,
    //         city,
    //         count: index,
    //         isStartMerge: index === 0,
    //         rowSpan: arr.length

    //       })
    //     })
    //     return result
    //   }, [])
    // },
    mergeStratege ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (row.isStartMerge) {
          return {
            rowspan: row.rowspan,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }

}
</script>

<style scoped>
</style>
