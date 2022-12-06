const packets = require('./packets')

const test_packets = [
  ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 7],
  ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
  ["nppdvjthqldpwncqszvftbrmjlhg", 6],
  ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
  ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11]
]

test_packets.forEach((i) => {
  test(`can find packet position - ${i[0]}`, () => {
    let signalEnd = packets.findSignalEnd(i[0])

    expect(signalEnd).toBe(i[1])
  })
})

const test_messages = [
  ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 19],
  ["bvwbjplbgvbhsrlpgdmjqwftvncz", 23],
  ["nppdvjthqldpwncqszvftbrmjlhg", 23],
  ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 29],
  ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 26]
]

test_messages.forEach((i) => {
  test(`can find message position - ${i[0]}`, () => {
    let signalEnd = packets.findSignalEnd(i[0], 14)

    expect(signalEnd).toBe(i[1])
  })
})
