import factorial from "./factorial";

describe("Factorial function", () => {
	it("Should throw error if n is below 0.", () => {
		expect(() => factorial(-1).toThrow(RangeError));
	});
	it("Should throw error if n is above 12.", () => {
		expect(() => factorial(13).toThrow(RangeError));
	});
	it("Should return 120, if n = 5.", () => {
		expect(factorial(5)).toBe(120);
	});
	it("Should return 120, if n = 5.", () => {
		expect(factorial(5)).not.toBe(125);
	});
});
