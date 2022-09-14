var kuai = {
  chunk: function(array, size = 1) {
    var a = []
    var b = []
    var j = 0
    for (i = 0; i < array.length; i++) {
      b.push(array[i])
      j++
      if (j >= size) {
        j = 0
        a.push(b)
        b = []
      }
    }
    if (j != 0) {
      a.push(b)
    }
    return a
  }
}

var compa = {
  compact: function (array) {

  }
}
