// add whatever parameters you deem necessary
function twoArrayObject(keys, vals) {
    return keys.reduce((obj, curr, idx) => {
        obj[curr] = idx < vals.length ? vals[idx] : null;
        return obj;
    }, {})
}
