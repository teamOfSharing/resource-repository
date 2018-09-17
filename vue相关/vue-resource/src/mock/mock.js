const Mock = require('mockjs')
const Random = Mock.Random
const toDoCounts = 10

function mockToDoList () {
  let data = []
  for (let n = 0; n < toDoCounts; n++) {
    let thing = {
      toDo: Random.sentence(3, 6),
      isFinished: !Math.floor(Math.random() * 2),
      deadLine: Random.date(),
      finishTime: Random.date()
    }
    data.push(thing)
  }
  return data
}

Mock.mock('/servers/thingsToDo', 'post', mockToDoList)
