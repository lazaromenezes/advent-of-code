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

  return charCode - CAPITAL_A_CODE + ALPHABET_SIZE + 1
}

function findRepeatedInGroup(groups) {
  
  let nGroups = groups.length

  for(let i in groups[0]){
    let inAll = true
    let j = 1
    let item = groups[0][i]

    do {
      inAll = inAll && groups[j].includes(item)
    }while(inAll && ++j < nGroups)

    if(inAll)
      return item
  }

  return null
}

module.exports = {findRepeated, findRepeatedInGroup, calculatePriority}
