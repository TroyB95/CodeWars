const { evenOrOdd } = require('./evenOrOdd');

test('Given an odd number, it should return Odd', () => {
    expect(evenOrOdd(1)).toBe('Odd')
})

test('Given an even number, it should return Even', () => {
    expect(evenOrOdd(2)).toBe('Even')
})

