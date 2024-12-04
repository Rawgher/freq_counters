// add whatever parameters you deem necessary
function constructNote(msg, ltrs) {
    const msgFreq = {};
    const ltrsFreq = {};

    for (let char of ltrs) {
        ltrsFreq[char] = ++ltrsFreq[char] || 1;
    }

    for (let char of msg) {
        msgFreq[char] = ++msgFreq[char] || 1;
    }

    for (let char in msgFreq) {
        if (!ltrsFreq[char]) {
            return false;
        }
        if (msgFreq[char] > ltrsFreq[char]) {
            return false;
        }
    }

    return true;
}
