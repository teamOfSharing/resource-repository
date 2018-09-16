import { menu } from '../../router'
const mutations = {
  changeCollapse (s, val) {
    s.isCollapse = val
    // console.log(s.isCollapse)
  },
  addToActiveMenus (s, i) {
    s.activeMenus.push(s.menuList[i])
    console.log(s.activeMenus)
  }
}

export default {
  state: {
    isCollapse: false,
    menuList: [...menu.entries()],
    activeMenus: [],
    unCollapseWidth: '140px'
    // mgLeft: '116px'
  },
  mutations
}
