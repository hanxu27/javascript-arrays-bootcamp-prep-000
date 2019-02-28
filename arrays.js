function addElementToBeginningOfArray(arr, b){
  var newArr = [b, ...arr]
  return newArr
}

function destructivelyAddElementTobeginningOfArray(arr, b){
  arr = [b, ...arr]
  return arr
}

function addElementToEndOfArray(arr, b){
  var Newarr = [...arr, b]
  return Newarr
}

function destructivelyAddElementToEndOfArray(arr, b){
  arr = [...arr, b]
  return arr
}