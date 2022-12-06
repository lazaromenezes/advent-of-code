const packets = require('./packets')

const test_inputs = [
  ["mjqjpqmgbljsphdztnvjfqwrcgsmlb", 7],
  ["bvwbjplbgvbhsrlpgdmjqwftvncz", 5],
  ["nppdvjthqldpwncqszvftbrmjlhg", 6],
  ["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg", 10],
  ["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw", 11]
]

test_inputs.forEach((i) => {
  test(`can find last packet position - ${i[0]}`, () => {
    let signalEnd = packets.findSignalEnd(i[0])

    expect(signalEnd).toBe(i[1])
  })
})
