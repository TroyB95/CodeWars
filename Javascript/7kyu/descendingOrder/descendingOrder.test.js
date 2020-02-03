import descendingOrder from './descendingOrder';

describe('Descending order function', () => {
    it('Should sort numbers in descending order', () => {
        expect(descendingOrder(2551)).toEqual(5521);
        expect(descendingOrder(2551)).not.toEqual(5221);
    })
})