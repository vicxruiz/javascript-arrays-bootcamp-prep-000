var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var candy = 'foo'
function addElementToBeginningOfArray(chocolateBars, candy) {
  return [candy, ...chocolateBars]
  }
function destructivelyAddElementToBeginningOfArray(chocoalteBars, candy) {
  chocoalteBars.unshift(candy)
  return chocolateBars
}