var slshuilan = {
  chunk: function (array, size = 1) {
    var res = [];
    var temp = [];
    var count = 0;

    for (var i = 0; i < array.length; i++) {
      temp.push(array[i]);
      count++;

      if (count == size || i == array.length - 1) {
        res.push(temp);
        temp = [];
        count = 0;
      }
    }

    return res;
  },

  compact: function (array) {
    let a = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] > 0) {
        a.push(array[i])
      }
    }
    return a
  },

  difference: function (array, values) {
    let a = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] != values[i]) {
        a.push(array[i])
      }
    }
  },

  fill: function (array, value) {

  },
}
