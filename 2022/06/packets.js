const findSignalEnd = (packet, signalSize = 4) => {
  for(let i = 0; i < packet.length - signalSize; i++){

    let signal = packet.slice(i, i + signalSize)

    let set = new Set(signal)

    if(set.size == signalSize)
      return packet.lastIndexOf(signal) + signalSize
  }

  return undefined
}

module.exports = {
  findSignalEnd
}
