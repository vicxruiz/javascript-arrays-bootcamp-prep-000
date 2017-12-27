var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candyString = 'foo'
function addElementToBeginningOfArray(chocolateBars, candyString) {
  return [candyString, ...chocolateBars]
  }
function destructivelyAddElementToBeginningOfArray(chocoalteBars, candyString) {
  chocoalteBars.unshift(candyString)
  return chocolateBars
}