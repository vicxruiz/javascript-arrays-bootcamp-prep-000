var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(chocolateBars, foo) {
  return [element, ...chocolateBars]
  }
function destructivelyAddElementToBeginningOfArray(chocoalteBars, foo) {
  chocoalteBars.unshift(foo)
  return chocolateBars
}