var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var element = 'foo'
function addElementToBeginningOfArray(chocolateBars, element) {
  return [element, ...chocolateBars]
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}
function addElementToEndOfArray(chocolateBars, element) {
  return [...chocolateBars, element]
}
function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}
function accessElementInArray(chocolateBars, index) {
  return chocolateBars[index]
}
function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift()
  return chocolateBars
}
function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.slice(1)
  return chocolateBars
}








