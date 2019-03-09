const selectAll = {
  params: ['isSelect'],
  bind (el, binding) {
    // let arr = binding.value
    // if (Array.isArray(arr)) {
    //   el.checked = !arr.some(ite => ite.isFinished === false)
    // }
  },
  componentUpdated (el, binding) {
    console.log(el.checked)
    let arr = binding.value
    if (Array.isArray(arr)) {
      el.checked = !arr.some(ite => ite.isFinished === false)
    }
  }
}

export default selectAll
