import { wave } from './mexicanWave';

test('should format chars to form wave', () => {
    expect(wave('hello')).toEqual(["Hello", "hEllo", "heLlo", "helLo", "hellO"])
    expect(wave('wave')).toEqual(["Wave", "wAve", "waVe", "wavE"])
    expect(wave('wave')).not.toEqual(["wAve", "Wave", "wavE", "wavE"])
})