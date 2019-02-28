var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, b){
  var newArr = [b, ...arr]
  return newArr
}

function destructivelyAddElementToBeginningOfArray(arr, b){
  arr.unshift(b)
  return arr
}

function addElementToEndOfArray(arr, b){
  var Newarr = [...arr, b]
  return Newarr
}

function destructivelyAddElementToEndOfArray(arr, b){
  arr.push(b)
  return arr
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}