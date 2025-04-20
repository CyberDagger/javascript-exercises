const palindromes = function (word) {
    const skipChars = new RegExp('[,.!? ]');
    let i = 0;
    let j = word.length - 1;
    while(i < j) {
        if (word.charAt(i).toLowerCase() != word.charAt(j).toLowerCase()) {
            if (skipChars.test(word.charAt(i))) {
                i++;
            }
            else if (skipChars.test(word.charAt(j))) {
                j--;
            } else {
                return false;
            }
        } else {
            i++;
            j--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
