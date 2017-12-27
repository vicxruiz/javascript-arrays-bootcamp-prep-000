var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, element) {
  return [element, ...chocolateBars]
  }
function destructivelyAddElementToBeginningOfArray(chocoalteBars, element) {
  element = 'foo'
  chocoalteBars.unshift(element)
  return chocolateBars
}