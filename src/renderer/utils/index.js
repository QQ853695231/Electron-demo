/**
 * Created by jiachenpan on 16/11/18.
 */

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (('' + time).length === 10) time = parseInt(time) * 1000
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

export function formatTime(time, option) {
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function convertTreeToArray(data, c) {
  if (!Array.isArray(data)) {
    throw new TypeError('array-unique expects an array.')
  }

  const config = {
    needDelete: c.needDelete ? c.needDelete : false,
    childrenList: c.childrenList ? c.childrenList : 'childrenList'
  }

  const array = []

  function convert(data) {
    const n = Object.assign({}, data)
    config.needDelete && delete n[config.childrenList]
    array.push(n)

    if (data[config.childrenList]) {
      for (const c of data[config.childrenList]) {
        convert(c)
      }
    }
  }
  for (const d of data) {
    convert(d)
  }

  return array
}

export function convertTreeOneLayerToArray(data, c) {
  if (!Array.isArray(data)) {
    throw new TypeError('array-unique expects an array.')
  }

  const config = {
    needDelete: c.needDelete ? c.needDelete : false,
    childrenList: c.childrenList ? c.childrenList : 'childrenList'
  }

  const array = []
  for (const d of data) {
    const n = Object.assign({}, d)
    config.needDelete && delete n[config.childrenList]
    array.push(n)
    if (d[config.childrenList]) {
      for (const c of d[config.childrenList]) {
        const n1 = Object.assign({}, c)
        config.needDelete && delete n1[config.childrenList]
        if (parseInt(n1.unitTypeId) === parseInt(d.unitTypeId) + 1) { array.push(n1) }
      }
    }
  }

  return array
}

export function romveTreeEmptyChildren(data, c) {
  if (!Array.isArray(data)) {
    throw new TypeError('array-unique expects an array.')
  }

  const config = {
    childrenList: c.childrenList ? c.childrenList : 'childrenList'
  }
  const array = _.cloneDeep(data)
  function convert(array) {
    if (array[config.childrenList].length > 0) {
      for (const c of array[config.childrenList]) {
        convert(c)
      }
    } else {
      delete array[config.childrenList]
    }
  }
  for (const d of array) {
    convert(d)
  }

  return array
}
export function debounce(func, wait, immediate) {
  let timeout

  return function() {
    const context = this

    const args = arguments

    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    const callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }
}

