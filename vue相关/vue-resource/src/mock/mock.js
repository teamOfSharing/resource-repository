const Mock = require('mockjs')
const Random = Mock.Random

// 前台编组mock数据，同后台表单数据
function mockTrainGrounpInfo () {
  let data = []
  let typeArr = ['普快', '动车组']
  let grounpArr = ['普快', '和谐号', '复兴号']
  let arr = ['甲', '乙', '丙', '丁']
  let oneDay = 24 * 3600 * 1000

  for (let i = 0; i < 15; i++) {
    let startTime = Random.date('yyyy/MM/dd')
    let endTimeStamp = +(new Date(startTime)) + oneDay
    let endTime = new Date(endTimeStamp).toLocaleDateString()
    let obj = {
      trainNo: /A-Z\d{2,4}/,
      trainType: typeArr[i % 2],
      inTime: Random.time('H:m:s'),
      outTime: Random.time('H:m:s'),
      grounp: arr[i % 4],
      grounpInfo: grounpArr[i % 3],
      grounpDetail: grounpArr[(i % 2) + 1] + '-' + Random.integer(10, 18),
      parkPosition: Random.integer(0, 1),
      plantform: Random.integer(1, 15),
      coach: Random.integer(8, 16), // 车厢数
      status: Random.integer(0, 2), // 运行状态
      expires: startTime + '-' + endTime,
      createInterval: Random.integer(1, 10),
      createTime: null
    }
    data.push(obj)
  }
  return data
}

// 后台车次列表， 列车编组信息列表 mock数据
function mockTrainInformation () {
  let data = []
  let type = ['K', 'D']
  let arr = ['甲', '乙', '丙', '丁']
  let oneDay = 24 * 3600 * 1000
  for (let i = 0; i < 15; i++) {
    let startTime = Random.date('yyyy/MM/dd')
    let endTimeStamp = +(new Date(startTime)) + oneDay
    let endTime = new Date(endTimeStamp).toLocaleDateString()
    let grounp = arr[i % 4]
    let obj = {
      grounp,
      startTime,
      endTime,
      grounpDetail: type[i % 2] + Random.integer(20, 9999) + '-' + grounp,
      status: Random.integer(0, 2),
      coach: Random.integer(8, 16) // 车厢数
    }

    data.push(obj)
  }
  return data
}

// 车厢信息列表mock
function mockCoachList () {
  let data = []
  for (let i = 0; i < 15; i++) {
    let coachType = Random.string('upper', 6)
    coachType += `(${Random.ctitle(1, 2)})`
    let obj = {
      coachType,
      coachLongth: Random.integer(20, 25),
      doorALongth: i % 4 ? 1.5 : 2,
      doorBLongth: i % 4 ? 1.5 : 2
    }
    data.push(obj)
  }
  return data
}

// 车厢编号下拉框，编组下拉框mock数据
function mockTrainNo () {
  let data = []
  for (let i = 0; i < 7; i++) {
    let str = Random.string('upper', 6)
    str += `(${Random.ctitle(1, 2)})`
    data.push(str)
  }
  return data
}

// 站名mock
function mockStationName () {
  let name = Random.city()
  name = name.replace('市', '站')
  return {
    station: name
  }
}

// 前台编组mock数据，同后台表单数据
Mock.mock('/servers/train/grounp/info', 'post', mockTrainGrounpInfo)
// 后台车次列表， 列车编组信息列表 mock数据
Mock.mock('/servers/train/information', 'post', mockTrainInformation)
// 车厢信息列表mock
Mock.mock('/servers/train/coach/list', 'post', mockCoachList)
// 站名mock
Mock.mock('/servers/train/station', 'post', mockStationName)
// 车厢编号下拉框，编组下拉框mock数据
Mock.mock('/servers/train/number', 'post', mockTrainNo)

// 编号详情下拉框mock数据
Mock.mock('/servers/train/grounp/detail', 'post', {
  'grounpDetail|2': [
    '和谐号-17', '东风号-12', 'GT1234', 'D2231', '和谐号-1', '和谐号-16'
  ]
})
