// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const num1Freq = {};
    const num2Freq = {};

    if (num1.length != num2.length) return false;

    for (let char of num1.toString()) {
        num1Freq[char] = ++num1Freq[char] || 1;
    }

    for (let char of num2.toString()) {
        num2Freq[char] = ++num2Freq[char] || 1;
    }

    if (num1Freq.size != num2Freq.size) return false;

    for (char in num1Freq) {
        if (num2Freq[char] != num1Freq[char]) return false;
    }

    return true;
}
