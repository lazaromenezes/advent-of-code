import { calculateReport, isSafe, isSafeWithDampper, parse } from './util'

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

describe('Is safe', () => {
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
})

describe('Is safe with dampenning', () => {
    test('report is safe when all levels are decreasing', () => {
        const report = [3, 2, 1]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })
    
    test('report is safe when all levels are increasing', () => {
        const report = [3, 4, 5]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })
    
    test('report is safe when single mixed level difference', () => {
        const report = [3, 2, 4]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })
    
    test('report is safe when single no variation', () => {
        const report = [3, 3, 4]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })
    
    test('report is safe when single variation is bigger than 3', () => {
        const report = [3, 7, 4]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })
    
    test('report is safe when single variation is bigger than 3 decreasing', () => {
        const report = [7, 3, 4]
    
        expect(isSafeWithDampper(report)).toBeTruthy()
    })

    test('report is not safe when 2 variations are bigger than 3 decreasing', () => {
        const report = [11, 7, 3, 1]
    
        expect(isSafeWithDampper(report)).toBeFalsy()
    })

    test('report is not safe when 2 variations are bigger than 3 increasing', () => {
        const report = [1, 3, 7, 11]
    
        expect(isSafeWithDampper(report)).toBeFalsy()
    })

    test('report is not safe when 2 variations are zero', () => {
        const report = [1, 3, 3, 3]
    
        expect(isSafeWithDampper(report)).toBeFalsy()
    })

    test('report is not safe when two variation type changes', () => {
        const report = [1, 3, 2, 3, 2]
    
        expect(isSafeWithDampper(report)).toBeFalsy()
    })

    test("dampener works properly", () => {
        const report = [1, 2, 7, 8, 9]
        
        expect(isSafeWithDampper(report)).toBeFalsy()
    })
})