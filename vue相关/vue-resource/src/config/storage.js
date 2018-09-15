export default {
  loc_set (key, value) {
    return window.localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    )
  },
  ses_set (key, value) {
    return window.sessionStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value)
    )
  },
  loc_get (key) {
    return window.localStorage.getItem(key)
  },
  ses_get (key) {
    return window.sessionStorage.getItem(key)
  },
  loc_del (key) {
    return window.localStorage.removeItem(key)
  },
  ses_del (key) {
    return window.sessionStorage.removeItem(key)
  },
  loc_clear () {
    return window.localStorage.clear()
  },
  ses_clear () {
    return window.sessionStorage.clear()
  }
}
