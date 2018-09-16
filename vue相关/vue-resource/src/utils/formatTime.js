/*
 *@time
 *时间参数,可以是时间对象,时间戳,或可以转化为时间对象的其他值
 *@formatter
 *格化式字符串,将time参数格式化为符合formatter字符串的形式
 *年月日为大写的Y/M/D,时分秒为小写的h/m/s,星期为小写的w
 *@time = new Date(), formatter = 'Y年M月D日 h:m:s w'
 *@formatTime(new Date(),'Y年M月D日 h:m:s w')
*/

function formatTime (time, formatter = 'Y-M-D h:m:s') {
  let date = null,
    timeStr = null,
    cformatter = formatter
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }
  let obj = {
    Y: date.getFullYear(),
    M: date.getMonth() + 1,
    D: date.getDate(),
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    w: date.getDay()
  }
  timeStr = cformatter.replace(/[a-zA-Z]/g, key => {
    if (key === 'w') {
      return [
        '星期日',
        '星期一',
        '星期二',
        '星期三',
        '星期四',
        '星期五',
        '星期六'
      ][obj[key]]
    }
    if (obj[key] < 10) {
      return '0' + obj[key]
    } else if (obj[key] !== undefined) {
      return obj[key]
    } else {
      return key
    }
  })
  return timeStr || 0
}

export default formatTime
