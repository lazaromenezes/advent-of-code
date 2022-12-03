function findRepeated(items) {
  totalItems = items.length

  firstCompartment = items.slice(0, totalItems / 2)
  secondCompartment = items.slice(totalItems / 2, totalItems)

  for(let item in firstCompartment)
    if(secondCompartment.includes(firstCompartment[item]))
      return firstCompartment[item]
}

function calculatePriority(item) {
  let charCode = item.charCodeAt()
  
  const CAPITAL_Z_CODE = 90
  const LOWER_A_CODE = 97
  const CAPITAL_A_CODE = 65
  const ALPHABET_SIZE = 26

  if(charCode > CAPITAL_Z_CODE)
    return charCode - LOWER_A_CODE + 1  
  else
    return charCode - CAPITAL_A_CODE + ALPHABET_SIZE + 1

}

module.exports = {findRepeated, calculatePriority}
