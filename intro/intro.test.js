const {sum, nativeNull} = require('./intro')

describe('Sum function: ', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })

    test('should return value correctly comparing to other values', () => {
        expect(sum(2,3)).toBeGreaterThan(4)
        expect(sum(2,3)).toBeLessThan(6)
    })
    test('should sum two float values correctly', () => {
        expect(sum(0.1, 0.2)).not.toBe(0.3)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('Native null function: ', () => {
    test('should return true value for null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeUndefined()
    })
})