const {reverseString, isPalindrome} = require('./stringFunctions.js');

describe('isPalindrome', () => {
    test('isPalindrome(aba) => true', () => {
        let str = 'aba';
        expect(isPalindrome(str)).toBe(true);
    });
    test('isPalindrome(Ahmed) => false', () => {
        let str = 'Ahmed';
        expect(isPalindrome(str)).toBe(false);
    });

    test('isPalindrome(AcdVvDca) => true', () => {
        let str = 'Acdv vdcA';
        expect(isPalindrome(str)).toBe(true);
    });

    test('isPalindrome(Hello) => true', () => {
        let str = 'Hello';
        expect(isPalindrome(str)).toBe(false);
    });


    describe('Reverse string', () => {
        test('reverse(Ahmed) => demhA', () => {
            let str = 'Ahmed';
            expect(reverseString(str).join('')).toBe('demhA');
          });
          test('reverse(aba) => aba', () => {
            let str = 'aba';
            expect(reverseString(str).join('')).toBe('aba');
          });
          test('reverse(Hello) => olleH', () => {
            let str = 'Hello';
            expect(reverseString(str).join('')).toBe('olleH');
          });
          test('reverse(OpenAi) => iAnepO', () => {
            let str = 'OpenAi';
            expect(reverseString(str).join('')).toBe('iAnepO');
          });
          test('reverse(racecar) => racecar', () => {
            let str = 'racecar';
            expect(reverseString(str).join('')).toBe('racecar');
          });




        });
    
    });

