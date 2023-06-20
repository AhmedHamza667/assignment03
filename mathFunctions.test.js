const {add, subtract, multiply, divide} = require('./mathFunctions.js');

describe('add', () => {
    test('add(1,2) => 3', () => {
        expect(add(1, 2)).toBe(3);
    });
    test('add(1,0)', () => {
            expect(subtract(1, 0)).toBe(1);
        });
        test('add(5,5)', () => {
            expect(add(5, 5)).toBe(10);
        });
});

describe('subtract', () => {
    test('subratct(1,2) => 3', () => {
        expect(subtract(1, 2)).toBe(-1);
    });
    test('subratct(1,0)', () => {
            expect(subtract(1, 0)).toBe(1);
        });
        test('subratct(5,5)', () => {
            expect(subtract(5, 5)).toBe(0);
        });
        test('subratct(7,5)', () => {
            expect(subtract(7, 5)).toBe(2);
        });

});

describe('multiply', () => {
    test('multiply(1,2) => 3', () => {
        expect(multiply(1, 2)).toBe(2);
    });
    test('multiply(1,0)', () => {
            expect(multiply(1, 0)).toBe(0);
        });
        test('multiply(5,5)', () => {
            expect(multiply(5, 5)).toBe(25);
        });
        test('multiply(7,5)', () => {
            expect(multiply(7, 5)).toBe(35);
        });
});

describe('divide', () => {
    test('divide(1,2) => 3', () => {
        expect(divide(1, 2)).toBe(0.5);
    });
    test('divide(1,0)', () => {
            expect(divide(1, 0)).toBeNull();
        });
        test('divide(5,5)', () => {
            expect(divide(5, 5)).toBe(1);
        });
        test('divide(7,5)', () => {
            expect(divide(7, 5)).toBe(1.4);
        });
});