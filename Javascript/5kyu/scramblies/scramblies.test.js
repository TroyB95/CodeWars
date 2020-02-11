import { scramble, getFrequency, compareObjectValues } from './scramblies';

describe('Scramble', () => {
    it('Should return true if characters can be rearranged into the str', () => {
        expect(scramble('rkqodlw', 'world')).toBe(true);
        expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true);
        expect(scramble('katas', 'steak')).toBe(false);
    })

})
