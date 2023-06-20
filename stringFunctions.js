function reverseString(str) {
    let str1 = [];
    for (let i = str.length - 1; i >= 0; i--) {
            str1.push(str[i]);
    }
    return str1;
}

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    str = str.toLowerCase();
    while (i < j) {
        if (!isLetter(str[i]))
        {
            i++;
            continue;
        }
        if (!isLetter(str[j]))
        {
            j--;
            continue;
        }
        if (str[i]!== str[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function isLetter(char) {
    return /[a-z]/i.test(char);
  }
module.exports = {reverseString, isPalindrome};