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
  return newArr
}

function destructivelyAddElementToEndOfArray(arr, b){
  arr.push(b)
  return arr
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  return arr.shift()
}

function removeElementFromBeginningOfArray(arr){
  var newArr = arr.slice(1)
  return
}