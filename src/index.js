
exports.min = function min (array) {
  if (!array || array.length == 0) {
  return 0;
  } else {
    let any = array[0];
    for(let i = 0; i < array.length; i++) {
      if(array[i] < any) {
        any = array[i];
      }
    }
    return min = any;
  }
}

exports.max = function max (array) {
  if (!array || array.length == 0) {
  return 0;
  } else {
    let any = array[0];
    for (let i = 0; i < array.length; i++) {
      if (array[i] > any) {
        any = array[i];
      }
    }
    return max = any;
  }
}

exports.avg = function avg (array) {
  if (!array || array.length == 0) {
  return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return avg = sum / array.length;
  }
}