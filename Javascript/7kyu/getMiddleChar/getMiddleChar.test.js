import { getMiddle } from './getMiddleChar';

describe('getMiddleChar', () => {
    it('should return l in hello', () => {
        expect(getMiddle('hello')).toBe('l')
    })

    it('should return i in mid', () => {
        expect(getMiddle('mid')).toBe('i')
    })
})