import { wave } from './mexicanWave';

test('should format chars to form wave', () => {
    expect(wave('hello')).toContain("Hello", "hEllo", "heLlo", "helLo", "hellO")

})