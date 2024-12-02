import { calculateReport, isSafe, parse } from './util'

test('parse returns a collection of lists', () => {
    const input = `3 4 5\n4 3 1\n`

    const data = parse(input)

    expect(data).toEqual([[3, 4, 5], [4, 3, 1]])
})

test('calculateReport returns level diferences for increasing levels', () => {
    const report = [3, 4, 5]

    const calculatedReport = calculateReport(report)

    expect(calculatedReport).toEqual([1, 1])
})

test('calculateReport returns level diferences for decreasing levels', () => {
    const report = [3, 2, 1]

    const calculatedReport = calculateReport(report)

    expect(calculatedReport).toEqual([-1, -1])
})

test('report is safe when all levels are decreasing', () => {
    const report = [3, 2, 1]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeTruthy()
})

test('report is safe when all levels are increasing', () => {
    const report = [3, 4, 5]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeTruthy()
})

test('report is not safe when mixed level difference', () => {
    const report = [3, 2, 4]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeFalsy()
})

test('report is not safe when no variation', () => {
    const report = [3, 3, 4]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeFalsy()
})

test('report is not safe when variation is bigger than 3', () => {
    const report = [3, 7, 4]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeFalsy()
})

test('report is not safe when variation is bigger than 3 decreasing', () => {
    const report = [7, 3, 4]

    const calculatedReport = calculateReport(report)

    expect(isSafe(calculatedReport)).toBeFalsy()
})