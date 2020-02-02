import repeater from './thinkfulStringDrill';

test('Given the string ko and 5, it should print out ko 5 times', () => {
    expect(repeater('ko', 5)).toBe('kokokokoko')
})