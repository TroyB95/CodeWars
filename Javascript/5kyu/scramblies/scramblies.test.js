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


    describe('compareObjectValues', () => {
        it('Should return true if the first object contains all the characters of second object', () => {
            expect(compareObjectValues({h: 2, e: 4, l: 2, o: 7}, {h: 2, e: 1, l: 2, o: 1})).toEqual(true);
            expect(compareObjectValues({h: 1, e: 1, l: 1, o: 1}, {h: 2, e: 1, l: 2, o: 1})).toEqual(false);
        })
    })
})
