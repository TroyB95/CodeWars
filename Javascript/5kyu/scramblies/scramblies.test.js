import { scramble, getFrequency, compareObjectValues } from './scramblies';

describe('Scramble', () => {
    it('Should return true if characters can be rearranged into the str', () => {
        expect(scramble('rkqodlw', 'world')).toBe(true);
        expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true);
        expect(scramble('katas', 'steak')).toBe(false);
    })

    describe('getFrequency', () => {
        it('Should return an object which each characters frequency', () => {
            expect(getFrequency('hello')).toEqual({h: 1, e: 1, l: 2, o: 1});
            expect(getFrequency('teststring')).not.toEqual({h: 1, e: 1, l: 2, o: 1});
        })
    })

})
