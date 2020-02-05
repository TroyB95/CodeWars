import { gimme } from './findMiddleElement';

describe('FindMiddleElement function', () => {
    it('Should return index of middle element', () => {
        expect(gimme([1,3,2])).toBe(2);
    })
})