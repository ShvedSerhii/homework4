Array.prototype.myForEach = function(callback) {
  for (let i = 0; i < this.length; ++i) {
    callback(this[i], i, this)
  }
}

Array.prototype.myMap = function(callback) {
  let results = []
  for (let i = 0; i < this.length; ++i) {
    results.push(callback(this[i], i, this))
  }
  return results
}

Array.prototype.mySort = function(callback) {
  if (callback === undefined) {
    for (let i = 0, endI = this.length - 1; i < endI; ++i) {
      let wasSwap = false
      for (let j = 0, endJ = endI - i; j < endJ; ++j) {
        if (String(this[j]) > String(this[j + 1])) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]]
          wasSwap = true
        }
      }
      if (!wasSwap) break
    }
  } else {
    for (let i = 0, endI = this.length - 1; i < endI; ++i) {
      let wasSwap = false
      for (let j = 0, endJ = endI - i; j < endJ; ++j) {
        if (callback(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]]
          wasSwap = true
        }
      }
      if (!wasSwap) break
    }
  }
  return this
}
